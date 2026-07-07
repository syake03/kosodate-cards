// ビルド前チェック：各カードに「## 出典」セクションとリンクが最低1つあるか検査する。
// SPEC.md §2 の方針に従い、欠けていても build は止めず warning を出す（Zod スキーマは別途 build 内で厳格検証）。
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const CARDS_DIR = join(process.cwd(), 'src', 'content', 'cards');
const LINK_RE = /\[[^\]]+\]\(https?:\/\/[^)]+\)/;

async function main() {
  let files;
  try {
    files = (await readdir(CARDS_DIR)).filter((f) => f.endsWith('.md'));
  } catch {
    console.warn(`[check-sources] カードディレクトリが見つかりません: ${CARDS_DIR}`);
    return;
  }

  let warnings = 0;
  for (const file of files) {
    const raw = await readFile(join(CARDS_DIR, file), 'utf8');
    const idx = raw.indexOf('## 出典');
    if (idx === -1) {
      console.warn(`[check-sources] ⚠ ${file}: 「## 出典」セクションがありません`);
      warnings++;
      continue;
    }
    const sourcesBlock = raw.slice(idx);
    if (!LINK_RE.test(sourcesBlock)) {
      console.warn(`[check-sources] ⚠ ${file}: 出典セクションにリンクが1つもありません`);
      warnings++;
    }
  }

  if (warnings === 0) {
    console.log(`[check-sources] ✓ ${files.length}枚すべてに出典リンクを確認しました`);
  } else {
    console.warn(`[check-sources] ${warnings}件の警告。build は続行します。`);
  }
}

main().catch((e) => {
  // チェック自体の失敗で build を止めない
  console.warn('[check-sources] 実行時エラー:', e?.message ?? e);
});
