// SPEC.md §3〜§5 の分類・評価軸を一元管理する。表示名やバッジ色はここだけを見ればよい。

export type DomainId =
  | 'safety-sleep'
  | 'nutrition'
  | 'medical'
  | 'attachment'
  | 'discipline'
  | 'learning'
  | 'mental-health'
  | 'digital'
  | 'sex-safety'
  | 'money-independence';

export type AgeId =
  | 'prenatal-postpartum'
  | '0-1'
  | '1-3'
  | '3-6'
  | '6-9'
  | '9-12'
  | '12-15'
  | '15-22';

export type EvidenceId = 'A' | 'B' | 'C' | 'observational';
export type ImpactId = 'critical' | 'serious' | 'qol';

export interface Domain {
  id: DomainId;
  label: string;
  desc: string;
}

export interface Age {
  id: AgeId;
  label: string;
  hint: string;
}

// SPEC.md §3
export const DOMAINS: Domain[] = [
  { id: 'safety-sleep', label: '安全・事故予防', desc: '睡眠環境（SIDS）、窒息・誤飲、チャイルドシート、水回り・転落・やけど、家庭内事故' },
  { id: 'nutrition', label: '栄養・食事', desc: '授乳、離乳食、アレルギー予防、鉄・ビタミンD、食習慣、はちみつ等の禁忌' },
  { id: 'medical', label: '医療・予防接種', desc: '定期予防接種、乳幼児健診、歯科（フッ化物）、発熱・感染症の初期対応、かかりつけ' },
  { id: 'attachment', label: '愛着・親子関係', desc: '応答的養育、スキンシップ、産後うつと親のケア、安全基地' },
  { id: 'discipline', label: 'しつけ・行動', desc: '体罰を使わない関わり、限界設定、感情のコントロール、ポジティブ育児' },
  { id: 'learning', label: '学習・言語・遊び', desc: '語りかけ・読み聞かせ、遊びの役割、非認知能力、就学準備、学習環境' },
  { id: 'mental-health', label: 'メンタルヘルス', desc: '子どものストレス・不安、自己肯定感、思春期の心、いじめ、逆境体験（ACEs）' },
  { id: 'digital', label: 'デジタル・メディア', desc: 'スクリーンタイム、SNS、ゲーム、年齢別の付き合い方、オンライン安全' },
  { id: 'sex-safety', label: '性・安全教育', desc: '発達段階に応じた性教育、プライベートゾーン、同意、加害/被害の予防' },
  { id: 'money-independence', label: 'お金・自立', desc: '金銭教育、家事・責任、思春期〜青年期の自立支援、進路' },
];

// SPEC.md §4（妊娠期→独り立ちの順）
export const AGES: Age[] = [
  { id: 'prenatal-postpartum', label: '妊娠期・産後', hint: '妊娠〜生後数ヶ月' },
  { id: '0-1', label: '0〜1歳', hint: '乳児期' },
  { id: '1-3', label: '1〜3歳', hint: 'よちよち期' },
  { id: '3-6', label: '3〜6歳', hint: '未就学' },
  { id: '6-9', label: '6〜9歳', hint: '学童前期' },
  { id: '9-12', label: '9〜12歳', hint: '学童後期' },
  { id: '12-15', label: '12〜15歳', hint: '思春期前期' },
  { id: '15-22', label: '15〜22歳', hint: '思春期後期〜青年期' },
];

// SPEC.md §5.1 エビデンス強度（左＝強い → 右＝弱い の順で並べる）
export const EVIDENCE: Record<EvidenceId, { label: string; short: string; colorVar: string; desc: string }> = {
  A: { label: '強い根拠', short: 'A', colorVar: '--ev-a', desc: '複数の質の高い研究／システマティックレビューで一貫。主要機関が明確に推奨。' },
  B: { label: '中程度の根拠', short: 'B', colorVar: '--ev-b', desc: '良質な研究はあるが数が限られる、または一部に不一致。専門家は概ね支持。' },
  C: { label: '弱い根拠', short: 'C', colorVar: '--ev-c', desc: '観察研究中心で交絡の可能性、または専門家の意見が主。方向性は示唆される。' },
  observational: { label: '相関どまり', short: 'obs', colorVar: '--ev-obs', desc: '相関は報告されるが因果は不明。過度な断定を避けるべき領域。' },
};

export const EVIDENCE_ORDER: EvidenceId[] = ['A', 'B', 'C', 'observational'];

// SPEC.md §5.2 影響度（上＝致命的 → 下＝QOL の順）
export const IMPACT: Record<ImpactId, { label: string; short: string; colorVar: string; desc: string }> = {
  critical: { label: '致命的', short: '致命的', colorVar: '--impact-critical', desc: '守らないと死亡・重篤・不可逆な障害の恐れ' },
  serious: { label: '重大', short: '重大', colorVar: '--impact-serious', desc: '健康・発達・安全に大きく関わるが、直ちに致命的ではない' },
  qol: { label: 'QOL', short: 'QOL', colorVar: '--impact-qol', desc: '守れれば望ましいが、致命性は低い' },
};

export const IMPACT_ORDER: ImpactId[] = ['critical', 'serious', 'qol'];

export function domainLabel(id: string): string {
  return DOMAINS.find((d) => d.id === id)?.label ?? id;
}

export function ageLabel(id: string): string {
  return AGES.find((a) => a.id === id)?.label ?? id;
}

// 影響度→エビデンスの優先度で並べ替えるための重み（小さいほど上位）
export function impactRank(id: ImpactId): number {
  return IMPACT_ORDER.indexOf(id);
}
export function evidenceRank(id: EvidenceId): number {
  return EVIDENCE_ORDER.indexOf(id);
}
