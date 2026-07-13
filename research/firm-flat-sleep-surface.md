# 調査ログ: firm-flat-sleep-surface

**本ログはカード公開後に遡及作成した検証ログである（作成日 2026-07-13）。**
公開済みのカード本文（`src/content/cards/firm-flat-sleep-surface.md`）は変更していない。以下は、カード本文の出典欄に記載された全URLを実際にfetchし、本文の主張・数値が出典に実在するかを照合した記録である。

作成日: 2026-07-13 / 作成モデル: claude-sonnet-5（遡及検証担当）

---

## 使用した検索クエリ

- 記載済み出典URLの直接fetch検証を主とした。
- AAP原本ページ・Federal Register原本が直接fetch不可（403／リダイレクトブロック）だったため、§3代替手順に基づき追加検索を実施：
  "AAP 2022 Sleep-Related Infant Deaths policy statement firm flat noninclined grade A recommendation pediatrics e2022057990"（英語）
  Federal Register API検索：「ban of inclined sleepers for infants」

---

## 検証済みソース（fetchして該当記載を確認したもののみ）

1. **[Tier1]** こども家庭庁｜「赤ちゃんが安全に眠れるように ～1歳未満の赤ちゃんを育てるみなさまへ～」（令和7年12月更新）
   URL: https://www.cfa.go.jp/policies/boshihoken/kenkou/sids
   fetch方法：WebFetchで直接fetch成功。
   該当記載の確認結果：
   - 「柔らかいクッションや傾斜のあるマットレスは避け、身体が沈まない硬めで平坦な布団やマットレスを使いましょう」と明記。カード本文の「寝具は硬めで平坦なものを」「傾斜のあるマットレスを避けるよう呼びかけ」と一致。
   - 「令和6年には55名の乳児がSIDSで亡くなっており、乳児期の死亡原因としては第3位となっています」と明記。カード本文の「日本ではSIDSで令和6年に55名の乳児が亡くなっています」と完全一致。

2. **[Tier1]** 消費者庁｜「子ども安全メール Vol.640 就寝時の窒息事故に注意しましょう」（2023年）
   URL: https://www.caa.go.jp/policies/policy/consumer_safety/child/project_001/mail/20231102/
   fetch方法：WebFetchで直接fetch成功。
   該当記載の確認結果：
   - 「日頃から親子で使用している低反発マットに子どもを寝かせていた。保護者が家事のため30分ほど目を離していたすきに、初めて寝返りをしたようで、気付いた時には、うつ伏せでマットに顔が完全に埋もれていた」と明記。カード本文の「低反発マットに寝かされた生後5か月児が初めての寝返りでうつ伏せになり顔が完全に埋もれて心肺停止に至った例」に対応する事例を確認。
   - 「保護者がマットの上で授乳後、げっぷさせるため肩に子どもの頭をのせたまま眠ってしまった。しばらくして目を覚ますと、マットと柵の隙間を埋めていた布団と毛布の上で、子どもがうつ伏せになっていた...人工呼吸管理を要し、集中治療室に入室。約1か月間の入院管理が必要だった」と明記。カード本文の「隙間の柔らかい布団の上でうつ伏せになり約1か月の入院を要した生後1か月児の例」と一致。

3. **[Tier1・原本fetch不可、§3代替手順で内容検証]** AAP｜「Sleep-Related Infant Deaths, Updated 2022 Recommendations」（Pediatrics 2022;150(1):e2022057990）
   読者向け正規URL: https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022
   原本fetch不可：publications.aap.org は直接fetchで403エラー（bot対策）。
   §3代替手順により、大学（University of Alabama at Birmingham図書館のプロキシ経由でホストされている、周産期医療の質改善団体ALPQCが配布する正規全文PDF）から実際に全文を取得し内容検証した。
   実際にfetchしたURL: https://bpb-us-w2.wpmucdn.com/sites.uab.edu/dist/f/430/files/2025/09/AAP-2022-Safe-Sleep-Recommendations.pdf
   （PDFの各ページに"Downloaded from ...by UAB Libraries | The University of Alabama at Birmingham user"の透かしがあり、大学図書館の正規契約経由で取得された、著者名・DOI・AAP著作権表記を含む本物のPediatrics誌掲載論文の全文であることを確認した。）
   確認できた記載：
   - 「Each year in the United States, ~3500 infants die of sleep-related infant deaths」（米国では毎年およそ3,500人の乳児が睡眠関連の原因で死亡）。カード本文の「米国では睡眠中の乳児死亡が年間およそ3,500人」と完全一致。
   - Table 2「Summary of Recommendations With Strength of Recommendation」の"A level recommendations"の項目に「Use a firm, flat, noninclined sleep surface to reduce the risk of suffocation or wedging/entrapment.」と明記。カード本文の「AAP（米国小児科学会）も『硬く平らで傾斜のない寝面を使う』ことを、最も強いエビデンスグレード『A』の推奨としています」と完全一致。
   - 「Sleep surfaces with inclines of more than 10 degrees are unsafe for infant sleep.」と本文中に明記（推奨2番、根拠付き）。カード本文の「AAPと米国の消費者製品安全委員会（CPSC）が『10度を超える傾斜面は乳児の睡眠に安全でない』とし」の裏付けとして確認。
   - 「Soft mattresses, including those with adjustable firmness or those made from memory foam, could create a pocket (or indentation) and increase the chance of rebreathing or suffocation if the infant is placed or rolls over to the prone position.」と明記。カード本文の「柔らかいマットレスは、赤ちゃんが寝返りなどで顔を沈めたときに口や鼻がふさがれ、呼吸ができなくなる危険があります」の医学的根拠と一致。
   - 逆流（GER）に関する記載：「Elevating the head of the infant's crib is ineffective in reducing GER and is not recommended.」「Infants cannot be placed at a 30-degree incline without sliding down, which raises concern that the infant could slide into a position that may compromise respiration.」と明記。カード本文の「傾斜は逆流軽減に効果がなく、ずり落ちの危険がある」と完全に一致。
   - 「Sitting devices, such as car seats, strollers, swings, infant carriers, and infant slings, are not recommended for routine sleep...When infants fall asleep in a sitting device, remove them from the product and move them to a crib or other appropriate flat surface as soon as is safe and practical.」と明記。カード本文の「車のチャイルドシート・ベビーラック・抱っこひも等で赤ちゃんが眠ってしまったら、できるだけ早く硬く平らな寝床に移す」と一致。

4. **[Tier1・原本fetch不可、§3代替手順で内容検証]** CPSC／連邦官報（Federal Register）｜「Ban of Inclined Sleepers for Infants」（2023年）
   読者向け正規URL: https://www.federalregister.gov/documents/2023/08/16/2023-17350/ban-of-inclined-sleepers-for-infants
   原本fetch不可：federalregister.gov は直接fetchで「unblock.federalregister.gov」への強制リダイレクトが発生し内容取得不可。
   §3代替手順により、米国政府出版局（govinfo.gov）がホストする同一文書（Federal Register Vol. 88, No. 157）の公式PDFを実際にfetchして内容検証した。govinfo.govはfederalregister.govと同じくGPO（Government Publishing Office）が運営する米国政府の一次公式資料ホストである。
   実際にfetchしたURL: https://www.govinfo.gov/content/pkg/FR-2023-08-16/pdf/2023-17350.pdf
   確認できた記載：
   - 「AAP's safe sleep guidance states that infants less than 1 year old should sleep on a firm, flat, surface...Consistent with that guidance, the SSBA and this final rule prohibit inclined sleeping accommodations with an incline of greater than 10 degrees for all children from birth up to 1 year of age.」と明記。カード本文の「CPSCは傾斜寝具（インクラインドスリーパー）の販売を法律で禁止しています」および「傾斜10度超を禁止」と完全に一致。

5. **[Tier1・補強扱い]** AAP／HealthyChildren.org｜「How to Keep Your Sleeping Baby Safe」（2026年1月更新）
   URL: https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx
   fetch方法：WebFetchで直接fetch成功。
   該当記載の確認結果：
   - 「A firm surface means that it shouldn't indent when your baby is lying on it.」と明記。カード本文の「硬めで平ら」の説明と一致。
   - 「Any surface that inclines more than 10 degrees isn't safe for your baby to sleep on.」と明記。カード本文の「10度」の数値と一致。カード本文中でこのソースは「保護者向け情報・補強扱い」と明記されており、主根拠にはしていない。この扱いは適切（AAP Policy Statement本体が主根拠）。

---

## ソース間の一致・不一致

- 一致点：こども家庭庁・消費者庁（日本）とAAP・CPSC（米国）は、いずれも「硬く平らな寝面を使う」「傾斜を避ける」という方向で完全に一致。米国側は「10度」という具体的な数値基準を持つのに対し、日本の公式資料は定性的な表現（「傾斜を避け硬めで平坦に」）にとどまる、という違いはあるが、方向の対立ではない。
- 不一致点：なし。

## 日本と海外の文脈差

カード本文のconfidence_noteに記載の通り、「傾斜10度まで」等の数値基準は主にAAP・米国CPSCが示すものであり、日本の公式資料は定性的な表現にとどまる、という地域差が正確に記載されている。この記載は今回の検証結果と一致する。

## エビデンス判定（再現確認）

- カードの判定：**A**
- ソース側のグレード：AAP自身が「Use a firm, flat, noninclined sleep surface」を"A level recommendations"（最高グレード）に分類していることを、AAP原本の代替検証（UAB図書館経由の全文PDF）で確認した。カード本文・confidence_noteの「AAPは最高グレードAとしている」という記載は正確である。
- 決定木の再現：
  Q1「Tier1機関の2つ以上が同じ方向で明確に推奨しているか」→ YES（こども家庭庁・AAP・CPSCが共に、硬く平らな寝面と傾斜の回避を明確に推奨。AAP自身がグレードAと明記）→ Q2へ
  Q2「主要Tier1機関間で推奨の方向に不一致があるか」→ NO（方向は完全に一致。数値基準の有無という地域差はconfidence_noteで手当て済み）
  → 【A】。evidence: "A"の判定は再現でき、AAP自身のグレード表記とも整合する。

## 影響度判定（再現確認）

- カードの判定：**critical**
- 決定木の再現：
  Q1「死亡または不可逆な重篤障害に直結しうるか、その裏付けが出典にあるか」→ YES。こども家庭庁の「令和6年SIDS死亡55名」という公式統計、消費者庁の実際の心肺停止・長期入院事例、AAPの「年間約3,500人が睡眠関連で死亡」という統計が、いずれも実際にfetchして確認できた。
  → 【critical】。impact: "critical"の判定は再現できる。

## 遡及検証で見つかった問題

なし。本カードは出典として挙げられた5本のURLすべてについて、原本または適切な代替手順（§3）による内容検証を行い、本文中のすべての数値・固有名詞（55名・3,500人・10度など）が出典に正確に対応していることを確認した。特にAAP 2022年版ポリシーステートメント原本を大学図書館プロキシ経由の正規PDFで直接確認できたことで、「AAPグレードA」「10度」「3,500人」という3つの主要な数値をすべて一次資料で裏付けることができた。confidence_noteの「守ってもゼロにできるわけではない」という限界の記載も、出典の内容（SIDSの多因子性・triple risk modelの説明）と整合している。

**総評：5枚の担当カードの中で、AAP原本を含む最も多くの一次資料に直接アクセスできたカード。出典との一致度は非常に高い。**
