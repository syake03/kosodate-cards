# 調査ログ: ensure-time-for-free-play
作成日: 2026-07-10 / 作成モデル: Claude（Sonnet系, Writer役）

## トピックの切り方（STEP1）
「子どもが自由に遊ぶ時間を確保する（大人が主導しすぎない、子ども主導の遊び。習い事や課題で予定を埋めすぎない）」を1アクションとする。
- 既存カード `read-aloud-to-children`（読み聞かせ・語りかけ）、`limit-screen-time-young-children`（スクリーンタイム抑制）とは主題が重複しないよう、**遊びそのものの価値・自由に遊ぶ時間の確保**に絞った。読み聞かせや画面利用の是非には踏み込まない。

## 使用した検索クエリ
- "幼稚園教育要領 遊びを通しての指導 文部科学省"（日本語）
- "保育所保育指針 遊び 発達 こども家庭庁"（日本語）
- "幼稚園教育要領 総則 遊びは重要な学習"（日本語）
- "幼稚園教育要領 次期改訂 2026年 最新"（日本語・最新版確認用）
- "AAP The Power of Play policy statement Pediatrics 2018"（英語）
- "healthychildren.org power of play free play children"（英語）
- ""Power of Play" AAP pediatrics 2018 filetype:pdf"（英語・代替PDF探索）
- "WHO UNICEF Nurturing Care Framework play early childhood development"（英語）
- "Nurturing Care Framework WHO full report pdf who.int"（英語）

## 検証済みソース（fetchして該当記載を確認したもののみ）

1. [Tier1] 文部科学省｜幼稚園教育要領（平成29年3月31日文部科学省告示第62号、平成30年4月1日施行）｜https://www.mext.go.jp/content/1384661_3_2.pdf｜2017年3月告示
   該当記載の要約：第1章総則第1「幼稚園教育の基本」の中で、「幼児の自発的な活動としての遊びは，心身の調和のとれた発達の基礎を培う重要な学習であることを考慮して，遊びを通しての指導を中心として第２章に示すねらいが総合的に達成されるようにすること」と明記。遊び（特に子どもの自発的な活動としての遊び）を、心身の発達の基礎を培う「重要な学習」そのものと位置づけている。
   ※fetch方法の補足：WebFetchツールでは本PDFのテキスト抽出に失敗したため（バイナリとして認識）、curlで直接ダウンロードしpypdfでテキスト抽出のうえ該当記載を目視確認した（実際にfetchしたURLは上記と同一）。
   ※2026年時点で3要領・指針の次期改訂に向けた議論が進行中であること（こども家庭庁・文科省合同、2027年改訂目標、テーマは「遊びの深まり」）を確認したが、2026年7月現在、現行の平成29年版が施行中の最新版であることを確認した（参照：wam.go.jp記事）。

2. [Tier1] こども家庭庁｜保育所保育指針解説（原指針：平成29年3月31日厚生労働省告示第117号）第2章｜https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/eb316dce-fa78-48b4-90cc-da85228387c2/dc73559a/20231013-policies-hoiku-shishin-h30-2_19.pdf｜2023年10月13日付PDF（解説の掲載更新日、原指針は2017年3月）
   該当記載の要約：「保育士等が一方的に働きかけるのではなく、子どもの意欲や主体性に基づく自発的な活動としての生活と遊びを通して、様々な学びが積み重ねられていくことが重要である」と明記。大人が一方的に教え込むのではなく、子どもの主体性に基づく遊びを通して学びが積み重なるという考え方を示している。
   ※fetch方法の補足：WebFetchツールでのPDF直接読み込みに失敗したため、curl+pypdfでテキスト抽出し該当記載を確認した。

3. [Tier1] AAP（米国小児科学会）｜"The Power of Play: A Pediatric Role in Enhancing Development in Young Children"（Clinical Report, Pediatrics 2018;142(3):e20182058）｜読者向けリンク：https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Pediatric-Role-in-Enhancing｜2018年9月
   該当記載の要約：要旨で「developmentally appropriate play with parents and peers is a singular opportunity to promote the social-emotional, cognitive, language, and self-regulation skills that build executive function and a prosocial brain」と明記。本文では「Self-directed play, or free play, is crucial to children's exploration of the world and understanding of their preferences and interests」、「allow children to have unstructured time to play...encouraging educators to recognize playful learning as an important complement to didactic learning」と、子ども主導の自由な遊びの重要性と、詰め込み型学習に偏らないことの重要性を述べている。結論部では「Cultural shifts...have limited the opportunities for children to play. These factors may negatively affect school readiness, children's healthy adjustment, and the development of important executive functioning skills」と述べ、遊ぶ機会の減少への懸念を示している。また「many parents do not appreciate the importance of free play or guided play with their children and have come to think of worksheets and other highly structured activities as play」という誤解への言及もある。年齢別の実践例（Table 1）は0-6か月・7-12か月・1-3歳・4-6歳に分けて提示。
   ※原本fetch不可（publications.aap.org は403 Forbiddenでブロック）。§3の代替手順に従い、同内容の全文PDFをノースカロライナ大学FPG Child Development Institute（大学機関ホスト）でfetchし、該当記載を確認した：実際にfetchしたURL＝https://fpg.unc.edu/sites/fpg.unc.edu/files/resources/presentations-and-webinars/The%20Power%20of%20Play.pdf。読者向けリンクは正規のAAP原本URL（publications.aap.org）を出典欄に記載する。
   ※本報告は"Clinical Report"であり、AAPの一部ガイドライン（Policy Statement）にあるようなA/B/Cの明示的エビデンスグレードの記載は本文中に見当たらなかった（"grade" "level of evidence"等で検索したが該当なし）。引用されている研究の多くは観察研究・介入プログラムの評価研究であり、無作為化比較試験（RCT）への言及は限定的（例：Video Interaction Projectの RCTなど個別の介入研究）。

4. [Tier1] WHO・UNICEF・World Bank Group｜"Nurturing Care Framework for Early Childhood Development"｜読者向けリンク：https://www.who.int/publications/i/item/9789241514064｜2018年5月18日発行
   該当記載の要約：乳幼児への「養育者による質の高い関わり」の説明の中で、「quality time with the baby – including smiling, touching, talking, storytelling, listening to music, sharing and reading books, and engaging in play – builds neural connections that strengthen the child's brain」と記載。また、Nurturing Careの5要素（応答的養育・安全と安心・栄養・健康・早期学習）に関する望ましい状態（Outcomes）の一覧の中に「There are opportunities for age-appropriate play and early learning at home and in the community」が明記され、年齢に応じた遊びの機会が家庭・地域社会にあることが望ましい状態として位置づけられている。
   ※fetch方法の補足：WHO IRIS（who.intの文書リポジトリ）から直接PDFをfetchし（https://iris.who.int/server/api/core/bitstreams/781de51d-4cef-482e-bb3b-c2b3becf3c9f/content）、curl+pypdfでテキスト抽出のうえ該当記載を確認した。読者向けリンクはwho.intの公式カタログページ（who.int/publications/i/item/...）を記載。

## ソース間の一致・不一致
- 一致点：日本の幼児教育・保育の公的基準（幼稚園教育要領・保育所保育指針解説）、AAP、WHO/UNICEF/World Bankのいずれも、「子ども自身の主体的・自発的な活動としての遊び」を発達（心身・認知・言語・社会情緒）の基盤として重要視しており、方向性は完全に一致している。大人が一方的に教え込む・詰め込むことと、遊びを通した学びとを対比的に位置づけている点も共通する。
- 不一致点：なし。ただし、いずれのソースも「習い事の時間数を減らせ」「1日〇分遊ばせよ」という具体的な数値基準までは示しておらず、抽象度の高い原則的な推奨にとどまる。

## 日本と海外の文脈差
- 幼稚園教育要領・保育所保育指針解説は、幼稚園・保育所という「施設における教育・保育の設計原則」として遊びを位置づけている（家庭での過ごし方への直接の言及ではない）。AAPは家庭での親の関わり方（保護者への「遊びの処方箋」）まで踏み込んで述べている。本カードは家庭での実践を主題とするため、AAPの記載を実践面の主根拠とし、日本の公的基準は「遊びを学習・発達の基盤とする」という考え方の裏付けとして用いた。
- 数値的な時間配分の基準（例：1日〇分は自由遊びに）は、いずれの情報源にも見当たらなかったため、本カードでは具体的な時間数を挙げていない。

## エビデンス判定
- 判定: B
- 決定木のたどり（§6）：
  - Q1（コクラン等のSR/メタ分析が支持、またはTier1機関2つ以上が同じ方向で「明確に推奨」）：判断に迷った。幼稚園教育要領・保育所保育指針解説は法的拘束力のある教育・保育の基準文書だが、これは主に施設内カリキュラム設計の原則であり、「家庭で自由遊びの時間を確保することが発達によい」という効果を直接検証したメタ分析やSRではない。AAPの報告書もClinical Reportであり、独自のA/B/Cエビデンスグレードを明示していない（本文中に記載なし）。効果の根拠の多くが観察研究・プログラム評価であることから、迷った場合は低い方に倒す方針（§0・§6補足ルール）に従い、Q1＝NOとして次へ進んだ。
  - Q3（Tier1機関の1つが推奨している、または複数のRCTが存在する）：YES。AAP（Tier1）は「protect children's unstructured playtime」「focus on playful rather than didactic learning by letting children take the lead」と明確に推奨しており、引用文献にはVideo Interaction Projectなど個別のRCTも含まれる。
  - → 【B】
- ソース側のグレード（あれば）：AAP本報告書（Clinical Report）には独自のA/B/C等のエビデンスグレード表記なし（確認済み、本文中に該当語句なし）。

## 影響度判定
- 判定: qol
- 根拠：守らなかった場合に死亡・重篤な障害（Q1）や入院レベルの健康被害・深刻な発達阻害（Q2）に直結するという記載はいずれのソースにもない。遊びの機会減少について「学校準備・健全な適応・実行機能の発達に悪影響を及ぼしうる」（AAP）との言及はあるが、これは「より良い発達」の範囲であり、致命的・重篤な影響ではない。よって【qol】（Q3）。

## 未解決TODO
- なし。ただし以下は今後の更新時に留意：
  - 2026年時点で幼稚園教育要領・保育所保育指針等の次期改訂（2027年目標、「遊びの深まり」がテーマ）が進行中。改訂が確定・施行された場合は本カードの出典・記載を見直すこと。
  - 具体的な「望ましい自由遊びの時間量」を示す一次資料は見つからなかった。将来、日本の公的機関や学会が数値基準を示した場合は追記を検討する。

## セルフチェック結果（STEP9・§10）
- [x] 調査ログが存在し、全欄が埋まっている
- [x] 出典2本以上、うちTier1が1本以上（本カードはqolのためTier1 2本の要件は非該当だが、実際にはTier1を4本確保）
- [x] 全URLを実際にfetchし、該当記載を確認した（AAP原本のみ403のため代替手順で内容検証、詳細は上記に明記）
- [x] Tier3（商業ブログ等）を出典にしていない
- [x] エビデンス判定・影響度判定の決定木のたどりが調査ログに書いてある
- [x] 本文中のすべての数値・固有名詞が、いずれかの出典に存在する（具体的な時間数などの数値は本文に記載していない）
- [x] 「具体的にどうする」「よくある誤解」の各主張が出典に対応している
- [x] 出典欄のURLはfetch検証済み。未fetchのものは補強扱い（該当なし。AAPは代替手順で検証済み）
- [x] 出典に発行年／更新年を可能な範囲で併記した
- [x] 逐語コピーがない
- [x] 禁止表現（§8）を使っていない。特に習い事をしている家庭を否定しない/親を焦らせないトーンを確認した
- [x] 同一機関のより新しい版がないか確認した（次期改訂は2026年7月時点で未施行であることを確認済み）
- [x] ソース間の不一致がある場合、confidence_noteに書いた（不一致はなかったため、confidence_noteは相関ベースの限界＝型③を記載）
- [x] フロントマターがSPEC.md §2のスキーマに完全準拠
- [x] 迷った判定は低い方に倒した（エビデンス判定Q1で迷い、Bに倒した）
- [x] （v1.2）原本がfetchできなかったソース（AAP publications.aap.org）は、§3の代替手順で内容検証し、調査ログにその旨を記録した
- [x] （v1.2）confidence_noteは§8.5の3つの型のいずれかに沿い（型③：有効性限定型）、200字以内に収めた（117字）
- [ ] （v1.2）加熱・調理で無効化されない禁忌の場合、その旨をstatementに入れた → 該当なし（食品・物質の禁忌ではないため非該当）
- [x] （v1.2）critical×Aでも「守れば完全に安全」と誤読させていないか → 本カードはimpact:qol・evidence:Bのため該当項目自体が非該当だが、過度な効果断定（「遊ばせれば頭が良くなる」等）は本文・よくある誤解で明示的に否定した

status: draft（Writerとして自己判定は行わず、Reviewerへの引き継ぎとしてdraftのまま保存）
