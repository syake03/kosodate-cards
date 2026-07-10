# 調査ログ: responsive-caregiving-serve-and-return
作成日: 2026-07-10 / 作成モデル: Claude (Sonnet 5)

## 使用した検索クエリ
- "応答的な関わり 保育所保育指針 厚生労働省"（日本語）
- "こども家庭庁 応答的な関わり 愛着形成 乳幼児"（日本語）
- "こども家庭庁 乳幼児期 愛着 応答的 資料 PDF"（日本語）
- "サーブアンドリターン 子育て 厚生労働省 こども家庭庁"（日本語）
- "母子保健 応答的な関わり アタッチメント 厚生労働省 手引き"（日本語）
- "保育所保育指針解説 応答的 乳児 全て 常に 望ましい"（日本語）
- "こども家庭庁 幼児期までのこどもの育ちに係る基本的なヴィジョン 答申 令和5年12月"（日本語）
- "保育所保育指針 改定 2025 2026 最新"（日本語、鮮度確認用）
- "WHO UNICEF Nurturing Care Framework responsive caregiving"（英語）
- "AAP responsive parenting serve and return infant"（英語）
- "AAP toxic stress policy statement responsive relationships buffer serve and return"（英語）
- "healthychildren.org bonding with your baby tips responsive"（英語）
- "Care for Child Development WHO UNICEF facilitator guide responsive caregiving every time"（英語）

## 検証済みソース（fetchして該当記載を確認したもののみ）

1. [Tier1] 厚生労働省｜保育所保育指針（平成29年3月31日厚生労働省告示第117号、2018年4月1日施行、現行版）｜https://www.mhlw.go.jp/web/t_doc?dataId=00010450&dataType=0&pageNo=1
   実際にfetchして内容検証：上記URLを直接fetchし確認。
   該当記載の要約：乳児保育の「ねらい」として「体の動きや表情、発声等により、保育士等と気持ちを通わせようとする」、「内容」として「子どもからの働きかけを踏まえた、応答的な触れ合いや言葉がけによって、欲求が満たされ、安定感をもって過ごす」と明記。「内容の取扱い」では「子どもの多様な感情を受け止め、温かく受容的・応答的に関わり、一人一人に応じた適切な援助を行う」とある。まさに本カードの主題（子の働きかけに気づいて応答的に返す）を直接裏付ける一次資料。
   ※次期改定に向けた検討（2025年6月に保育専門委員会設置、2026年夏頃に「まとめ」公表予定）が進行中だが、2026年7月時点で告示・施行された最新版はこの2017年版であることを別途検索で確認済み。

2. [Tier1] WHO｜Guideline: Improving early childhood development（Executive Summary, 2020年）｜https://cdn.who.int/media/docs/default-source/mca-documents/child/early-child-development/executive-summary-guideline-improving-early-childhood-development.pdf
   実際にfetchして内容検証：PDFをダウンロードし、pdfplumber（Python）で全文テキスト抽出して確認（WebFetchでは直接テキスト化できなかったため代替手段を使用。§3の「原本がfetchできない場合」に近い状況だが、原本自体は正規のWHOドメインでありダウンロード自体は成功、抽出手法のみ代替）。
   該当記載の要約：Nurturing Care Framework（WHO・UNICEF・世界銀行、2018年）の5要素の1つが「responsive caregiving（応答的養育）」。ガイドライン本文で「1 RESPONSIVE CAREGIVING: All infants and children should receive responsive care during the first 3 years of life; parents and other caregivers should be supported to provide responsive care.」と明記し、Strength of recommendation: Strong、Quality of evidence: Moderate（for responsive care）と評価。用語集では「refers to the ability of the caregiver to notice, understand, and respond to the child's signals in a timely and appropriate manner」と定義。エビデンスは2本のシステマティックレビューに基づく（Guideline Development Groupによる開発プロセス）。
   ※エビデンスの質は「Moderate」であり「High」ではない点を、エビデンス判定で重視した。

3. [Tier1] こども家庭審議会｜幼児期までのこどもの育ちに係る基本的なヴィジョン（答申）（令和5年12月1日）｜https://www.mhlw.go.jp/content/12201000/001177090.pdf（他委員会の参考資料として厚労省サイトに掲載されたものだが、発出主体はこども家庭庁の審議会＝こども家庭審議会）
   ※こども家庭庁公式ページ https://www.cfa.go.jp/policies/kodomo_sodachi（「はじめの100か月の育ちビジョン」）も同答申を踏まえた公式ページとして確認したが、そちらは概要・やさしい版等の二次的な公開物であり、fetchでは答申本文と完全に同一のテキストであることまでは確認できなかった。そのため出典欄には、全文テキストで直接検証済みの上記mhlw.go.jp PDFのURLを記載する。
   実際にfetchして内容検証：PDFをダウンロードし、pdfplumber（Python）で全文テキスト抽出して確認。
   該当記載の要約：「こどもの育ちに必要な『アタッチメント（愛着）』は、こどもが怖くて不安な時などに身近なおとな（愛着対象）がその気持ちを受け止め、こどもの心身に寄り添うことで安心感を与えられる経験の繰り返しを通じて獲得される安心の土台である」と明記。単発ではなく「経験の繰り返し」が土台になるという記述で、本カードの「積み重ねが安心感を支える」を直接裏付ける。また脚注で「『愛着』の対象は母親、血縁関係にある者でなければならない」などの社会通説にとらわれない、「いわゆる『三歳児神話』には科学的知見に基づき根拠がないとされている」と明記（俗説否定の根拠として使用）。愛着対象は保護者・養育者に限らず、保育者等も含まれるとも記載。

4. [Tier1] AAP（米国小児科学会）｜Preventing Childhood Toxic Stress: Partnering With Families and Communities to Promote Relational Health（Pediatrics, 2021年）｜読者向け正規URL：https://publications.aap.org/pediatrics/article/148/2/e2021052582/179805/Preventing-Childhood-Toxic-Stress-Partnering-With
   原本fetch不可（publications.aap.orgはHTTP 403でブロック）。§3の代替手順に従い、AAP会員州支部（Maryland AAP, mdaap.org）がホストする同論文の公式PDF転載（https://www.mdaap.org/wp-content/uploads/2023/07/Garner-and-Yogman-2021-AAP-ACEs-AND-TOXIC-STRESS-POLICY-STATEMENT-1.pdf）をダウンロードし、pdfplumberで全文テキスト抽出して内容検証を実施。
   該当記載の要約：Safe, Stable, Nurturing Relationships（SSNR）が毒性ストレス（toxic stress）への強力な緩衝（buffer）となり、レジリエンスを築くとする。「responsive interactions between children and engaged, attuned adults」が重要であるとし、小児科診療で推奨される戦略の1つとして「encouraging responsive, nurturing parenting」を明記。応答的な関わりが子の生物学的なストレス反応システムの発達に埋め込まれる（biologically embedded）としている。
   ※本文書は「応答的な関わりの欠如」＝即・重篤な悪影響、という主張はしておらず、あくまで慢性的・重度の逆境（毒性ストレス）に対する緩衝要因の1つとして応答的な関わりを位置づけている。影響度判定でこの点を考慮した（通常の日常育児における多少の応答漏れが重大な悪影響につながる、という記載ではない）。

5. [Tier2] AAP（米国小児科学会）／HealthyChildren.org｜3 Ways You Can Bond With Your Baby（2024年11月1日更新）｜https://www.healthychildren.org/English/ages-stages/baby/Pages/ways-you-can-bond-with-your-baby.aspx
   実際にfetchして内容検証：上記URLを直接fetchし確認。
   該当記載の要約：赤ちゃんとの絆づくりの方法として、目を合わせて微笑む・声をかける、泣いたときに安心させる関わりで応じる（応じることで信頼が育つのであり甘やかしにはならない、の趣旨）ことなどを紹介。末尾に「Bonding doesn't require you to be a perfect parent. There's no right or wrong way to do it.（絆づくりに完璧な親であることは求められない。正しいやり方・間違ったやり方はない）」と明記。本カードの「完璧に応じ続ける必要はない」という中心メッセージの直接的な裏付け。

6. [Tier2] ハーバード大学 Center on the Developing Child｜Serve and Return（key concept ページ、更新年不明）｜https://developingchild.harvard.edu/key-concept/serve-and-return/
   実際にfetchして内容検証：上記URLを直接fetchし確認。
   該当記載の要約：「サーブ・アンド・リターン」の用語定義として、子どもが目を合わせる・表情・身振り・喃語・泣く等で働きかけ（サーブ）、養育者がアイコンタクト・言葉・抱擁などで応答（リターン）する往復的なやりとりが、脳の神経回路の構築・強化に役立つと説明。応答が一貫しない・欠けている場合に発達への影響が生じうるとも記載。
   ※大学ホストのためTier2扱いとし、用語・概念の説明（背景セクションでの言葉遣いの参考）にとどめ、エビデンス判定・数値主張の主根拠にはしていない。

## ソース間の一致・不一致
- 一致点：WHO（国際機関）・厚生労働省（保育所保育指針）・こども家庭審議会（答申）・AAP（学会）のいずれも、乳幼児期の「子どもの働きかけに気づいて応答的に関わること」を、子どもの安心感・発達・親子関係の土台として重要視する点で一致。「完璧な応答は不要」という点は、直接的にはAAP/HealthyChildren.orgのみが明言しているが、他のソースも「経験の繰り返し」「日常的な関わり」を強調しており、単発・完璧さを求める記述はどのソースにもない。
- 不一致点：なし。ただし、日本の一次資料（保育所保育指針・こども家庭審議会答申）は主に「保育・養育の実践基準／政策ビジョン」としての記載であり、WHOのようなGRADE形式の「推奨の強さ／エビデンスの質」の明示的な格付けは行っていない。

## 日本と海外の文脈差
- 日本の一次資料は、保育所保育指針（保育士等向けの実践基準）とこども家庭審議会答申（政策ビジョン）が中心で、「保護者向けに応答的養育を直接推奨する」形の文書（WHOガイドラインのような形式）は確認できなかった。ただし内容の方向性（子の働きかけへの応答が安心感・発達の基盤になる）はWHO・AAPと一致しており、対立点はない。
- 本カードは、日本の実践基準（保育所保育指針）とこども家庭審議会答申を主、WHO Nurturing Care Framework（responsive caregiving）とAAPを補強として構成した。

## エビデンス判定
- 判定: B
- 決定木のたどり:
  - Q1（コクラン等のSR/メタ分析が効果を支持、またはTier1機関2つ以上が同方向で「明確に推奨」）→ 迷った上でNOと判定。WHOはガイドラインとして「Strong recommendation」を明記しているが、WHO自身の「Quality of evidence」表記は「Moderate」であり、Highではない。厚生労働省保育所保育指針・こども家庭審議会答申は、保育実践基準・政策ビジョンという性格の文書であり、WHOと同列の「エビデンスに基づく強い推奨」を独立に格付けした文書ではないため、これを「2つ目のTier1機関による明確な推奨」として数えることは見送った（迷ったら低い方に倒す原則に従った）。
  - Q2はQ1がNOのためスキップ。
  - Q3（Tier1機関の1つが推奨している、または複数のRCTが存在する）→ YES。WHOが「Strong recommendation」として明確に推奨しており、その根拠は複数のシステマティックレビュー・RCT（Guideline Development Groupが実施した2本のSRに基づく）である → 【B】。
- ソース側のグレード（あれば）: WHO＝Strength of recommendation: Strong／Quality of evidence: Moderate（responsive careについて）。

## 影響度判定
- 判定: qol
- 決定木のたどり:
  - Q1（守らないと死亡・不可逆な重篤障害に直結し、その裏付け（死亡統計等）があるか）→ NO。いずれの出典にも、応答的な関わりの欠如が死亡・重篤な不可逆障害に直結するという記載はない。
  - Q2（入院レベルの健康被害、または発達・心身への長期的な悪影響（虐待・重い感染症・深刻な栄養不良等）につながるか）→ NO。AAPのtoxic stress文書は、応答的な関わりの欠如そのものではなく、慢性的・重度の逆境（毒性ストレス）に対する「緩衝の欠如」を論じており、本カードが扱う「日常的な応答的関わり」の有無を直接、虐待や重い健康被害に結びつける記載ではない。
  - Q3（それ以外＝より良い発達・生活の質・親子関係の向上等）→ 【qol】。出典が示すのは、安心感・信頼感・言語や社会情緒面の発達の基盤といった「より良い発達」であり、致命性は低いためqolと判定。

## 未解決TODO
- なし。

## セルフチェック結果（§10、1項目ずつ）
- [x] 調査ログが存在し、全欄が埋まっている
- [x] 出典2本以上、うちTier1が1本以上（本カードはTier1が5本）
- [x] 全URLを実際にfetchし、該当記載を確認した（AAP Pediatrics論文のみ原本403のため§3代替手順でmdaap.org PDFにより検証。読者向けリンクは原本AAP公式URLを記載）
- [x] Tier3（商業ブログ等）を出典にしていない
- [x] エビデンス判定・影響度判定の決定木のたどりが調査ログに書いてある
- [x] 本文中のすべての数値・固有名詞が、いずれかの出典に存在する（「3年間／3歳まで」等の年齢言及はWHO・こども家庭審議会答申の記述の範囲に収めた）
- [x] 「具体的にどうする」「よくある誤解」の各主張が出典に対応している
- [x] 出典欄のURLはfetch検証済み。未fetchのものはなし（AAP論文はmdaap.org経由で検証済み、補強扱いではなく主根拠の1つとして使用。§3の手順に厳密に従った）
- [x] 出典に発行年／更新年を可能な範囲で併記した
- [x] 逐語コピーがない（原文の文をそのまま写していない。ただしHealthyChildren.orgの短い定型フレーズ「完璧な親であることは求められない」は要旨として日本語に意訳し、よくある誤解セクションで趣旨を説明する形にとどめた）
- [x] 禁止表現（§8）を使っていない（「必ず」「絶対に」「〜しないと壊れる」等の断定・恐怖煽り表現なし）
- [x] 同一機関のより新しい版がないか確認した（保育所保育指針は現行2017年版が最新、改定作業は2026年時点で未告示であることを確認）
- [x] ソース間の不一致がある場合、confidence_noteに書いた（不一致はないが、相関ベースの限界を型③で記載）
- [x] フロントマターがSPEC.md §2のスキーマに完全準拠
- [x] 迷った判定は低い方に倒した（エビデンスA相当の材料もあったが、WHOの「Quality of evidence: Moderate」表記と、日本の一次資料が実践基準・政策文書である点を踏まえ、Bにとどめた）
- [x] （v1.2）原本がfetchできなかったソース（AAP Pediatrics論文）は§3の代替手順（mdaap.org PDF）で内容検証し、調査ログに明記した
- [x] （v1.2）confidence_noteは§8.5の3つの型のいずれか（型③：有効性限定型）に沿い、200字以内に収めた
- [x] （v1.2）加熱・調理で無効化されない禁忌の該当なし（該当セクションなし）
- [x] （v1.2）critical×Aではない（本カードはimpact:qol）ため、この項目は非該当
