# 調査ログ: open-water-drowning

**本ログはカード公開後に遡及作成した検証ログである（作成日 2026-07-13）。**
カード本文（`src/content/cards/open-water-drowning.md`）は既に `status: published` で公開済みであり、本ログはその出典を事後的にfetch・検証した記録である。カード本文は本ログの作成にあたり一切変更していない。

作成日: 2026-07-13 / 作成モデル: claude-sonnet-5（遡及検証担当）

---

## 検証の方法

カード本文に掲載された出典URL 4本をすべて実際にfetchし、本文中の主張・数値が実在するか照合した。AAPの1本（2026年公表の最新政策声明）は直接fetchがボット検知でブロックされ、かつ発行から日が浅くWayback Machineにもスナップショットが存在しなかったため、CONTENT_SPEC.md §3の代替手順（同一機関の別ドメイン）に従い、AAPが運営するHealthyChildren.orgの当該声明の紹介記事をfetchして内容検証を代替した。

## 検証済みソース

1. **[Tier1]** こども家庭庁｜「水の危険は近くにあります、みんなで危険回避！」｜URL: https://www.cfa.go.jp/policies/child-safety-actions/cases/dekisui｜更新：2025年6月26日（カード記載「令和7年6月更新」と一致）
   直接WebFetchで取得・確認。「5歳以上では自然水域での溺死及び溺水が最も多く発生」「大人もライフジャケットを着用した上で、こどもが流されることも想定し、こどもよりも下流側にいることが重要」「膝程度の浅さでも流れが速い場合大人でも流されることになります」「浮き輪などのフロート遊具は...思った以上に風の影響を受けやすく、ちょっとした隙に流されてしまう場合がある」「活動中にも気象情報を随時チェックし、悪天候が予測される場合は、中止又は予定を変更する」を確認。カード本文の該当記述と一致。

2. **[Tier1]** 警察庁生活安全局｜「令和6年における水難の概況等」｜URL: https://www.npa.go.jp/news/release/2025/r06_suinan_gaikyou.pdf｜発行：令和7年6月19日
   PDF原本をfetch・Readツールで本文を目視確認。「中学生以下の死者・行方不明者28人について、発生場所別にみると、半数以上が河川18人（64.3%）であり、行為別にみると、最も多いのは水遊び15人（53.6%）」を確認——カード本文「令和6年の中学生以下の水難による死者・行方不明者28人のうち、河川が18人（64.3%）と半数以上を占め、行為別では水遊びが最多」と完全一致。

3. **[Tier1]** CDC｜「Preventing Drowning」｜URL: https://www.cdc.gov/drowning/prevention/index.html｜更新：Sept. 29, 2025（カード記載「2025年9月更新」と一致）
   直接fetchは403（ボット検知）。§3代替手順に従い、Wayback Machineの当該URL自体のスナップショットを取得し本文を確認。「Life jackets should be used by children for all activities while in and around natural water」「Do not rely on air-filled or foam toys, as these are not safety devices」「Adults watching kids in or near water should avoid distracting activities like reading, using the phone, and consuming alcohol or drugs」を確認。カード本文「泳げない子...にはライフジャケットを着用させ」「浮き輪や空気入りの浮き具...安全器具ではなく」「見守る大人はスマホ・読書・飲酒など気を散らすことを避け」と一致。

4. **[Tier1・国際]** AAP｜「Prevention of Drowning」（Pediatrics 2026、Policy Statement改訂版）｜URL: https://doi.org/10.1542/peds.2026-077410（リダイレクト先：https://publications.aap.org/pediatrics/article/158/1/e2026077410/207630/Prevention-of-Drowning-Policy-Statement）
   直接fetchはCloudflareチャレンジで403。Wayback Machineにも本記事のスナップショットは存在せず（2026年公表の新しい文書のため未アーカイブ、404）。§3代替手順（同一機関の別ドメイン）に従い、AAP公式サイトHealthyChildren.orgの紹介記事「AAP Releases Updated Drowning Prevention Recommendations」（URL: https://www.healthychildren.org/English/news/Pages/AAP-releases-updated-drowning-prevention-recommendations.aspx、発行：2026年5月18日オンライン先行公開、2026年7月号Pediatrics掲載）をfetchし内容検証を代替した。「乳幼児や泳ぎの弱い子どもについて『腕の長さ以内でタッチ監督を行う大人』の配置を強調」「複数層の予防—見守り、早期遊泳教室、ライフジャケット着用を含む—で子どもを溺水から守る必要性」「コーストガード認可のライフジャケット着用が推奨」を確認。カード本文「日本のこども家庭庁・警察庁、米国のAAP...はいずれも...単一の方法だけでは防ぎきれず、複数の備えを重ねることを強調している」という記述と整合。
   ※読者向けリンクとしてはカード出典欄記載のAAP公式論文URL（doi.org経由）が正規URLであるが、内容検証はHealthyChildren.org経由で代替実施した。AAP独自のエビデンスグレード（A/B/C）はHealthyChildren.org記事内では明示されておらず、今回は確認できていない。

## ソース間の一致・不一致

- 一致点：自然水域での常時見守り・ライフジャケット着用・浮き具への過信回避・複数対策の重層化という方向性は、日本（こども家庭庁・警察庁）と米国（CDC・AAP）で完全に一致している。
- 不一致点：なし。

## 日本と海外の文脈差

大きな方向性の相違はない。日本は河川での溺水が中学生以下で特に多い（64.3%）という国内特有のデータがあり、カードもこれを主軸に構成している。米国側の情報は共通する対策の補強として使われている。

## エビデンス判定

- 判定：**A**（カード記載どおり）
- 決定木のたどり：Q1「Tier1機関の2つ以上が同じ方向で明確に推奨」→ YES（こども家庭庁・警察庁・CDC・AAPが同一方向で明確に推奨）→ Q2「主要Tier1機関間で方向の不一致があるか」→ NO → 【A】
- ソース側のグレード：AAP独自のA/B/Cグレードは今回のfetch範囲（HealthyChildren.org経由）では確認できず。

## 影響度判定

- 判定：**critical**（カード記載どおり）
- 根拠：Q1「死亡または不可逆な重篤障害に直結しうるか、その裏付けが出典にあるか」→ YES。警察庁（Tier1・fetch確認済み）の公式統計で令和6年に中学生以下28人の水難死者・行方不明者、うち河川18人（64.3%）と明記。

## 未解決TODO

- AAP「Prevention of Drowning」原本（Pediatrics 2026）は現時点でボット検知・未アーカイブのため直接検証できていない。将来的にWayback Machineにスナップショットが作成された場合、または直接fetchが可能になった場合は、AAP独自のエビデンスグレードの有無を含め再検証することが望ましい。

## 遡及検証で見つかった問題

- 特になし。カード本文中の数値・主張はすべて出典で確認できた。ただしAAP原本については上記のとおりHealthyChildren.org経由の代替検証にとどまり、原論文本文そのものは未確認である点を留保として記録する。
