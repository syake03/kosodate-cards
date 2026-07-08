import { getCollection, type CollectionEntry } from 'astro:content';
import { impactRank, evidenceRank, type ImpactId, type EvidenceId } from './taxonomy';

export type CardEntry = CollectionEntry<'cards'>;

// 表示対象は published のみ（PIPELINE.md §1）。
// draft/review は自動生成・検証中の未確認カードなのでサイトに出さない。
// review→published への昇格は人間が行う（公開の最終責任は人間が持つ）。
export async function getVisibleCards(): Promise<CardEntry[]> {
  const all = await getCollection('cards');
  return all.filter((c) => c.data.status === 'published');
}

// 影響度（致命的→QOL）→ エビデンス（A→observational）→ タイトル で安定ソート。
export function sortByPriority(cards: CardEntry[]): CardEntry[] {
  return [...cards].sort(
    (a, b) =>
      impactRank(a.data.impact as ImpactId) - impactRank(b.data.impact as ImpactId) ||
      evidenceRank(a.data.evidence as EvidenceId) - evidenceRank(b.data.evidence as EvidenceId) ||
      a.data.title.localeCompare(b.data.title, 'ja')
  );
}

// 絶対リスト（The Essentials）＝ エビデンスA × 影響度critical
export function essentials(cards: CardEntry[]): CardEntry[] {
  return cards.filter((c) => c.data.evidence === 'A' && c.data.impact === 'critical');
}
