// PIPELINE.md §3 機械チェック層（判断を要さない違反だけを機械的に弾く）。
// 使い方:
//   node scripts/validate-cards.mjs              … 全カードを検査
//   node scripts/validate-cards.mjs <id> [<id>]  … 指定カードのみ検査
// 合格/不合格を一覧表示し、1枚でも不合格なら exit 1。
import { readdir, readFile } from 'node:fs/promises';
import { join, basename } from 'node:path';

const CARDS_DIR = join(process.cwd(), 'src', 'content', 'cards');

const DOMAINS = new Set([
  'safety-sleep', 'nutrition', 'medical', 'attachment', 'discipline',
  'learning', 'mental-health', 'digital', 'sex-safety', 'money-independence',
]);
const AGES = new Set(['prenatal-postpartum', '0-1', '1-3', '3-6', '6-9', '9-12', '12-15', '15-22']);
const EVIDENCE = new Set(['A', 'B', 'C', 'observational']);
const IMPACT = new Set(['critical', 'serious', 'qol']);
const STATUS = new Set(['draft', 'review', 'published']);

// §3 禁止ドメイン（ブログ・まとめ系の簡易ブラックリスト。完全ではないが明白なものを弾く）
const FORBIDDEN_DOMAINS = [
  'ameblo.jp', 'note.com', 'hatenablog', 'hatena.ne.jp', 'fc2.com',
  'livedoor', 'seesaa', 'exblog', 'blog.', 'wordpress.com',
  'note.mu', 'togetter', 'naver', 'matome', 'x.com', 'twitter.com',
  'facebook.com', 'instagram.com', 'youtube.com', 'youtu.be', 'tiktok',
];

const REQUIRED_FIELDS = ['id', 'title', 'statement', 'domain', 'ages', 'evidence', 'impact', 'tags', 'updated', 'status'];
const LINK_RE = /\[[^\]]+\]\((https?:\/\/[^)]+)\)/g;

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    let val = kv[2].trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      fm[key] = [...val.slice(1, -1).matchAll(/"([^"]*)"|'([^']*)'/g)].map((x) => x[1] ?? x[2]);
    } else {
      fm[key] = val.replace(/^["']|["']$/g, '');
    }
  }
  return fm;
}

function checkCard(file, raw) {
  const id = basename(file, '.md');
  const errs = [];
  const fm = parseFrontmatter(raw);
  if (!fm) return [`フロントマター（--- で囲まれた領域）が見つからない`];

  for (const f of REQUIRED_FIELDS) {
    if (fm[f] === undefined || fm[f] === '' || (Array.isArray(fm[f]) && fm[f].length === 0)) {
      errs.push(`必須項目 ${f} が欠落または空`);
    }
  }
  if (fm.id && fm.id !== id) errs.push(`id("${fm.id}") がファイル名("${id}")と不一致`);
  if (fm.domain && !DOMAINS.has(fm.domain)) errs.push(`domain "${fm.domain}" が enum 外`);
  if (Array.isArray(fm.ages)) {
    for (const a of fm.ages) if (!AGES.has(a)) errs.push(`ages に enum 外の値 "${a}"`);
  }
  if (fm.evidence && !EVIDENCE.has(fm.evidence)) errs.push(`evidence "${fm.evidence}" が enum 外`);
  if (fm.impact && !IMPACT.has(fm.impact)) errs.push(`impact "${fm.impact}" が enum 外`);
  if (fm.status && !STATUS.has(fm.status)) errs.push(`status "${fm.status}" が enum 外`);
  if (fm.updated && !/^\d{4}-\d{2}-\d{2}$/.test(fm.updated)) errs.push(`updated が YYYY-MM-DD 形式でない`);
  if (fm.confidence_note && fm.confidence_note.length > 200) {
    errs.push(`confidence_note が200字超（${fm.confidence_note.length}字）`);
  }

  // 出典セクションとリンク本数
  const srcIdx = raw.indexOf('## 出典');
  if (srcIdx === -1) {
    errs.push(`本文に「## 出典」セクションがない`);
  } else {
    const block = raw.slice(srcIdx);
    const links = [...block.matchAll(LINK_RE)].map((m) => m[1]);
    if (links.length < 2) errs.push(`出典リンクが2本未満（${links.length}本）`);
    if (fm.impact === 'critical' && links.length < 2) {
      errs.push(`impact:critical だが出典リンクが2本未満`);
    }
    for (const url of links) {
      const hit = FORBIDDEN_DOMAINS.find((d) => url.includes(d));
      if (hit) errs.push(`出典に禁止ドメイン("${hit}")を含む: ${url}`);
    }
  }
  return errs;
}

async function main() {
  const args = process.argv.slice(2);
  let files = (await readdir(CARDS_DIR)).filter((f) => f.endsWith('.md'));
  if (args.length) files = files.filter((f) => args.includes(basename(f, '.md')));

  // id 重複チェック（全体）
  const allIds = (await readdir(CARDS_DIR)).filter((f) => f.endsWith('.md')).map((f) => basename(f, '.md'));
  const dup = allIds.filter((v, i) => allIds.indexOf(v) !== i);

  let failed = 0;
  console.log(`[validate-cards] ${files.length}枚を検査\n`);
  for (const file of files) {
    const raw = await readFile(join(CARDS_DIR, file), 'utf8');
    const errs = checkCard(file, raw);
    const id = basename(file, '.md');
    if (dup.includes(id)) errs.push(`id が重複している`);
    if (errs.length === 0) {
      console.log(`  ✓ ${id}`);
    } else {
      failed++;
      console.log(`  ✗ ${id}`);
      for (const e of errs) console.log(`      - ${e}`);
    }
  }
  console.log(`\n[validate-cards] 合格 ${files.length - failed} / 不合格 ${failed}`);
  if (failed > 0) {
    console.log('不合格カードは status を draft に落とし、Reviewerに回さないこと（PIPELINE §3）。');
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('[validate-cards] 実行エラー:', e?.message ?? e);
  process.exit(2);
});
