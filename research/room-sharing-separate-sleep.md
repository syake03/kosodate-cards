# 調査ログ: room-sharing-separate-sleep
作成日: 2026-07-09 / 作成モデル: claude-sonnet-5

---

## 使用した検索クエリ

- 「こども家庭庁 添い寝 同室 別々の寝床 SIDS 消費者庁」（日本語）
- 「日本小児科学会 SIDS 添い寝 見解 こども家庭庁 リーフレット」（日本語）
- "AAP 2022 safe sleep policy statement room sharing without bed sharing PDF"（英語）
- "room sharing without bed sharing" AAP 2022 "Level A" evidence recommendation（英語）

---

## 検証済みソース（fetchして該当記載を確認したもののみ）

1. **[Tier1]** こども家庭庁｜「赤ちゃんが安全に眠れるように ～1歳未満の赤ちゃんを育てるみなさまへ～」
   URL: https://www.cfa.go.jp/policies/boshihoken/kenkou/sids
   更新：令和7年（2025年）12月24日
   該当記載要約：見出し「（5）赤ちゃん専用の寝床が安心につながります」の下で、「大人の身体で赤ちゃんに覆い被さったり、口や鼻を塞いでしまったりする危険がある添い寝には注意をしましょう」と明記。特に危険な場合として、①添い寝者が眠気を引き起こす・注意力を低下させる薬を服用している場合、②添い寝者が飲酒した場合、③赤ちゃんが早産・低出生体重で生まれた場合、の3つを列挙。
   **重要な留保**：ページは「専用の寝床」を推奨し添い寝の危険性を述べているが、「同じ部屋・別の寝床（room sharing）」を何か月間続けるべきかという具体的な期間・数値は記載されていない。AAPのような「少なくとも生後6か月・できれば1年」に相当する数値目標は、日本の公的資料には見当たらなかった。

2. **[Tier1]** American Academy of Pediatrics（AAP・米国小児科学会）｜「Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment」Pediatrics誌 Vol.150(1) e2022057990（2022年）
   URL（読者向け正規リンク。bot検出によりfetch不可）: https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022
   ※原本fetch不可。内容検証は §3 の代替手順に従い、アラバマ大学（University of Alabama at Birmingham）図書館がホストする同論文の公式PDF全文（フッターに "Downloaded from ... by UAB Libraries | The University of Alabama at Birmingham user" の記載あり、DOI/記事番号 peds_2022057990 が正規URLと一致）を実際にfetchし、pdfplumberでテキスト抽出して該当記載を目視確認した。
   実際にfetchしたURL: https://bpb-us-w2.wpmucdn.com/sites.uab.edu/dist/f/430/files/2025/09/AAP-2022-Safe-Sleep-Recommendations.pdf
   該当記載（原文引用・自分の言葉での要約）：
   - Table2「A level recommendations」の一つとして："It is recommended that infants sleep in the parents' room, close to the parents' bed, but on a separate surface designed for infants, ideally for at least the first 6 mo."（乳児は両親の寝室で、両親のベッドの近くだが、乳児用に設計された別の面で、理想的には少なくとも生後6か月は寝ることが推奨される）→ **AAPグレード＝A**（"consistent, good-quality, patient-oriented evidence" と定義）。
   - "There is evidence that sleeping in the parents' room but on a separate surface decreases the risk of SIDS by as much as 50%."（両親の寝室内・別の寝面で寝ることはSIDSリスクを最大50%減少させるとのエビデンスがある）
   - "Room sharing without bed sharing is protective for the first year of life, and there is no specific evidence for when it might be safe to move an infant to a separate room before 1 year of age. However, the rates of sleep-related deaths are highest in the first 6 months, so room sharing during this vulnerable period is especially important."（同室・別寝床は生後1年間保護的に働く。1歳になる前に別室に移してよい時期を示す明確な根拠はない。ただし睡眠関連死亡の発生率は生後6か月が最も高いため、この時期の同室は特に重要）
   - "Infants sleeping in a separate room are 2.75 to 11.5 times more likely to die suddenly and unexpectedly than infants who are room sharing without bed sharing."（別室で寝る乳児は、同室・別寝床の乳児に比べ、突然死のリスクが2.75〜11.5倍高い）
   - 添い寝（bed sharing）のリスクについて："on the basis of the evidence, the AAP is unable to recommend bed sharing under any circumstances."（エビデンスに基づき、AAPはいかなる状況でも添い寝を推奨できない）
   - "Couches and armchairs are extremely dangerous places for infants and should never be used for infant sleep. Sleeping on couches and armchairs places infants at extraordinarily high risk (with 22-to 67-fold increased risk) for infant death"（ソファ・アームチェアでの乳児の睡眠は22〜67倍の死亡リスク増加という極めて高い危険）
   - 添い寝時のリスク要因の階層："More than 10 times the baseline risk"＝添い寝相手が鎮静薬・アルコール等で覚醒しにくい場合、喫煙者の場合等／"5 to 10 times the baseline risk"＝正期産・正常体重児でも生後4か月未満、柔らかい寝面（ウォーターベッド・古いマットレス・ソファ等）の場合／"2 to 5 times the baseline risk"＝早産・低出生体重児の場合。
   - "a large percentage of infants who die while bed sharing are found with their face or head covered by bedding"（添い寝中に死亡した乳児の多くは、顔や頭が寝具で覆われた状態で発見される）
   - 一方でAAPは「多くの親が母乳育児のしやすさ・文化的な選好・安全と信じる理由から日常的に添い寝を選んでいることを理解・尊重する」とも明記し、断定的な非難ではなく、乳児をベビーベッド等に戻すタイミング（授乳・あやした後、目が覚めたらすぐ）等の現実的な助言も併記している。

3. **[Tier1]** 日本小児科学会｜「乳児の安全な睡眠環境の確保について　2024年改訂『寝ている赤ちゃんのいのちを守るために』（こども家庭庁）に関する見解」
   URL: https://www.jpeds.or.jp/modules/guidelines/index.php?content_id=160（全文PDF: https://www.jpeds.or.jp/uploads/files/20250324_SIDS_kenkai.pdf ※このPDFは文字化けが激しく本文の直接引用検証はできなかったため、本文の主張根拠としては使わず、日本語ページ側の要約のみ補強的に参照）
   承認：令和7年1月28日（2025年1月28日）理事会承認
   該当記載要約：AAPの「少なくとも最初の6か月間は、両親の寝室で、両親のベッドの近くだが乳児用に設計された別の面で寝る」という推奨を紹介した上で、日本特有の状況として「わが国でもエコチル調査の関連報告では解析対象72,624名のうち76.8％が親と共寝（添い寝）と回答」と、日本では添い寝が高頻度で行われている実態を指摘。その上で、こども家庭庁の現行リーフレットは添い寝について「保護者が添い寝をする時は、赤ちゃんを身体や腕で圧迫しないように注意しましょう」という記載のみにとどまり、「添い寝の安全性に関する具体的な検討や注意喚起が乏しい」という趣旨の問題提起をしている。日本小児科学会自身は、AAPのような「添い寝を一律に推奨しない」という強い言い切りではなく、リーフレットの表現の精緻化（過度に一律的な規制表現を避ける、対象月齢を生後2～12か月に絞ることの検討等）を要望する立場。
   ※この文書はAAPグレードのような独自のエビデンスグレード（A/B/C）を明示していない。添い寝の相対リスクの数値（オッズ比等）も本ページ内では確認できなかった。

4. **[Tier1・補強／地域差確認用]** AAP／HealthyChildren.org（AAP公式・保護者向け解説）｜「A Parent's Guide to Safe Sleep」
   URL: https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx
   最終更新：2026年1月8日
   該当記載要約：「赤ちゃんの寝る場所を、少なくとも生後6か月間は、あなたが寝る部屋の中（ただし同じベッドではない）に置く」。「AAPは同室で寝ることを推奨する。SIDSリスクを最大50%下げられ、添い寝よりずっと安全だから」。添い寝について「エビデンスに基づき、AAPはいかなる状況でも添い寝を推奨しない（双子等の多胎児を含む）」。ソファ・柔らかい椅子・クッションでの添い寝は最大67倍リスクが高い。鎮静または飲酒・薬物使用者との添い寝は10倍以上。生後4か月未満の乳児との添い寝は5〜10倍。原文2の内容と完全に一致しており、相互に検証できた。

---

## ソース間の一致・不一致

- 一致点：AAP（原論文・HealthyChildren.org双方）は「両親の寝室内・別の寝床で、少なくとも生後6か月、できれば1年」を明確にA level recommendationとして推奨し、添い寝は「いかなる状況でも推奨できない」と明言。数値（SIDSリスク50%減、別室2.75〜11.5倍、ソファ22〜67倍等）は原論文と保護者向けページで一致。
- 不一致点：日本のこども家庭庁は「添い寝の危険性」は明記しているが、「同室・別寝床を生後6か月／1年続ける」という具体的な期間目標のアクションとしては明示していない。日本小児科学会はAAPの推奨を紹介しつつも、こども家庭庁のリーフレットが添い寝の安全性について踏み込んだ言及をしていないことを問題として指摘しており、**「同室・別寝床」を独立した推奨アクションとして日本の公的機関自身が明確に打ち出しているとは言い切れない**。
- 添い寝の相対リスクの数値は、AAP文書にのみ確認できた。日本側（消費者庁・日本小児科学会）には、添い寝に特化した相対リスクの数値は本調査では確認できなかった（消費者庁の窒息事故報告は「柔らかい寝具・掛け布団」中心で、添い寝そのものの相対リスク数値ではない）。

---

## 日本と海外の文脈差

あり。
- 日本は添い寝文化があり、日本小児科学会の見解文書によれば、エコチル調査（環境省の大規模疫学調査）で解析対象の76.8%が親との添い寝（共寝）と回答している。
- AAPは「いかなる状況でも添い寝を推奨しない」と明言する一方、こども家庭庁は添い寝そのものを一律に否定せず、「専用の寝床が安心」という前向きな推奨と、「特に危険な3条件（服薬・飲酒・早産低出生体重）」への注意喚起という, より穏やかなトーンで構成されている。
- 「同室で寝るが寝床は別にする（room sharing without bed sharing）」という行動そのものについて、日本の公的機関が独自にAAPと同水準の明確さ・期間目標（生後6か月・1年）を打ち出しているとは確認できなかった。このため本カードは、行動の方向性（赤ちゃん専用の寝床を用意する）は日本の資料に沿いつつ、「同室で・生後6か月以上」という期間の目安はAAPの推奨を主な根拠として明記し、地域差をconfidence_noteで正直に書く。

---

## エビデンス判定

- 判定：**B**
- 決定木のたどり：
  Q1「コクラン等のSRが支持、またはTier1機関2つ以上が同方向で明確に推奨」→ 一部Yes・一部No。AAPは自らのグレードAとしてこの推奨を明確に打ち出しており、根拠はメタアナリシス相当のプール解析（"When all bed-sharing or surface-sharing circumstances are included in meta-analyses, the risk of dying suddenly and unexpectedly is almost 3 times higher than room sharing without bed sharing"）に基づく。しかし、「同室・別寝床を生後6か月／1年続ける」という具体的アクションそのものを、日本の公的機関（こども家庭庁）が独自に同水準で明確に推奨しているとは確認できなかった（添い寝の危険性への注意喚起はあるが、期間を伴う同室推奨としての明記はない）。日本小児科学会もAAP推奨の「紹介」にとどまり、独自の強い推奨表明ではない。
  → 「Tier1機関2つ以上が同方向で明確に推奨」という条件を厳密には満たさないと判断し、Q1＝NOとしてQ3へ。
  Q3「Tier1機関の1つが推奨している、または複数のRCTが存在する」→ YES（AAPが明確に推奨し、グレードA、根拠はプール解析＝メタアナリシス相当。SIDS領域はRCTが倫理的に不可能なため、この観察研究の統合が実質的に最良のエビデンス）→ 【B】確定。
  補足：迷った場合は下げる方針に従い、AAP単独の強い推奨＋日本側の明確な期間目標の欠如を理由に、Aではなく一段階下げてBとした。

---

## 影響度判定

- 判定：**critical**
- 根拠：Q1「守らなかった場合、死亡または不可逆な重篤障害に直結しうるか。その裏付け（死亡統計・事故報告）があるか」→ YES。
  AAP原論文は、添い寝時の死亡リスクとして「別室睡眠は同室・別寝床に比べ2.75〜11.5倍」「ソファでの添い寝は22〜67倍」「鎮静・飲酒状態での添い寝は10倍超」等、具体的な相対リスクの数値と、実際に添い寝中の死亡例で顔・頭が寝具に覆われていたとする記述がある。米国では年間約3,500人が睡眠関連の乳児死亡（同論文冒頭に記載、既存カードでも確認済み）。日本でもSIDSにより令和6年に55名の乳児が死亡（こども家庭庁、既存カードで確認済み）。→ 【critical】確定。

---

## 未解決TODO

- 添い寝（bed sharing）そのものの相対リスクについて、日本国内の統計・症例報告（消費者庁または日本小児科学会が独自に集計した数値）は今回の調査では見つからなかった。将来的に「添い寝の危険性」を主題とした別カードを作る際は、こども家庭庁・消費者庁に日本独自の症例統計がないか改めて確認するのが望ましい。
- 日本小児科学会の見解PDF本文（20250324_SIDS_kenkai.pdf）は文字化けのためWebFetchでの直接引用検証ができなかった。日本語ページ側の要約経由での確認にとどまるため、厳密には「原本fetch実施・要約はfetch経由の二次確認」という扱い。本カードでは主たる数値的根拠としては使わず、日本文脈の記述（エコチル調査76.8%、リーフレットへの問題提起）の裏付けとしてのみ用いた。
- 「同室・別寝床を続けるべき期間」は、こども家庭庁の資料には数値目標が見当たらなかったため、本カードのstatementは「AAPの推奨に基づく目安」として明記し、日本の公的機関独自の期間目標ではないことをconfidence_noteで明示する。

---

## セルフチェック結果（§10）

- [x] 調査ログが存在し、全欄が埋まっている
- [x] 出典2本以上、うちTier1が1本以上（criticalはTier1が2本）→ Tier1を4本確認（うち主根拠はこども家庭庁・AAP原論文の2本）
- [x] 全URLを実際にfetchし、該当記載を確認した（AAP原論文はUAB経由の代替PDFで検証。§3手順に従い実施し、実fetchURLをログに記載）
- [x] Tier3（商業ブログ等）を出典にしていない
- [x] エビデンス判定・影響度判定の決定木のたどりが調査ログに書いてある
- [x] 本文中のすべての数値・固有名詞が、いずれかの出典に存在する
- [x] 「具体的にどうする」「よくある誤解」の各主張が出典に対応している
- [x] 出典欄のURLはfetch検証済み。日本小児科学会PDFのみ文字化けのため間接確認だが、主根拠にはしていない
- [x] 出典に発行年／更新年を可能な範囲で併記した
- [x] 逐語コピーがない
- [x] 禁止表現を使っていない
- [x] 同一機関のより新しい版がないか確認した（cfa.go.jp令和7年12月更新、AAP2022が最新版であることをWeb検索で確認、HealthyChildren.org 2026年1月更新）
- [x] ソース間の不一致（日本と海外の文脈差）がある場合、confidence_noteに書いた
- [x] フロントマターがSPEC.md §2のスキーマに準拠
- [x] 迷った判定は低い方に倒した（エビデンスAではなくBとした）
- [x] 原本がfetchできなかったソース（AAP原論文）は§3の代替手順で内容検証し、調査ログに記録した
- [x] confidence_noteは§8.5の型（②地域差型）に沿い、200字以内に収めた
- [ ] 加熱・調理で無効化されない禁忌の該当なし（本カードは食品禁忌ではないため非該当）
- [x] critical×Bのため「守れば完全に安全」と誤読させないよう、confidence_note・本文で限界を明記した

**総合判定：日本の公的機関が「同室・別寝床を生後6か月／1年」という具体的な期間目標を独自に明記していない点が最大の留保。エビデンスをAではなくBに下げ、confidence_noteで地域差を正直に記載した上で、status: draft のままReviewerに渡す。**
