# 調査ログ: no-soft-objects-in-crib

**本ログはカード公開後に遡及作成した検証ログである（作成日 2026-07-13）。**
カード本文（`src/content/cards/no-soft-objects-in-crib.md`）は既に `status: published` で公開済みであり、本ログはその出典を事後的にfetch・検証した記録である。カード本文は本ログの作成にあたり一切変更していない。

作成日: 2026-07-13 / 作成モデル: claude-sonnet-5（遡及検証担当）

---

## 検証の方法

カード本文に掲載された出典URL 5本をすべて実際にfetchし、本文中の主張・数値が実在するか照合した。CDC・AAPの2本は直接fetchがボット検知（403 / Cloudflareチャレンジ）でブロックされたため、CONTENT_SPEC.md §3の代替手順に従い、Wayback Machine（web.archive.org）に保存された当該URL自体のスナップショットを取得して内容を確認した（転載ではなく、正規URL自体の過去キャプチャであるため、原本の内容確認として扱った）。

## 検証済みソース

1. **[Tier1]** こども家庭庁｜「乳幼児突然死症候群（SIDS）について」｜URL: https://www.cfa.go.jp/policies/boshihoken/kenkou/sids｜更新: 令和7年12月24日（2026年12月ではなく令和7年＝2025年12月の意。カード記載「令和7年12月更新」と一致）
   直接WebFetchで取得・確認。「令和6年には55名の乳児がSIDSで亡くなっており、乳児期の死亡原因としては第3位」「柔らかいクッションや傾斜のあるマットレスは避け...ぬいぐるみやタオルなどは窒息のリスク」「掛け布団は赤ちゃんの顔にかかると窒息のリスク...スリーパーなどの着るものや空調で寒さを調整」「乳幼児の周囲で誰かがたばこを吸うことは、SIDSの発生率を高くする」を確認。カード本文の該当記述と一致。

2. **[Tier1]** 消費者庁｜「０歳児の就寝時の窒息死に御注意ください！」｜URL: https://www.caa.go.jp/policies/policy/consumer_safety/release/pdf/161024kouhyou_1.pdf｜発行：平成28年10月24日（2016年、カード記載と一致）
   PDF原本をfetch・Readツールで本文を目視確認（WebFetchはPDFをバイナリとして扱い抽出不可だったため、保存されたPDFをReadツールで直接読了）。「平成22年から平成26年までの5年間で、0歳児の就寝時の窒息死事故が160件（不慮の事故死全体（502件）の32%）確認」を確認。事故の状況の内訳表で「掛け布団等の寝具が顔を覆う・首に巻き付く 17件」「ベッド上の衣類やクッション等で顔を覆われる 4件」を確認——カード本文の該当数値と完全一致。

3. **[Tier1]** こども家庭庁｜「こどもの重大な事故を防ぐためのポイント ねる・たべる・みずあそび」｜URL: https://www.cfa.go.jp/assets/contents/node/basic_page/field_ref_resources/787dd8a4-3b44-4eed-a661-b9d0729f70c9/2522d336/20240905_policies_child-safety_effort_tsuchi_11.pdf｜発行：ファイル名より2024年9月頃（カード記載「2024年」と整合）
   PDF原本をReadツールで本文確認。「やわらかい敷布団、重い掛け布団や、ぬいぐるみ等を使用しない…顔が埋まったり、払いのけられなくなったりして、鼻や口がふさがれないようにする」「あおむけに寝かせる」を確認。カード本文の該当記述と一致。

4. **[Tier1]** CDC｜「Providing Care for Babies to Sleep Safely」｜URL: https://www.cdc.gov/sudden-infant-death/sleep-safely/index.html｜更新：September 17, 2024（カード記載「2024年更新」と一致）
   直接fetchは403（ボット検知）。§3代替手順に従い、Wayback Machineの当該URL自体のスナップショット（2026年6月取得のキャプチャ）を取得し本文を確認。「Keep soft bedding out of your baby's sleep area. This includes blankets, pillows, bumper pads, and soft toys.」を確認。カード本文の記述と一致。

5. **[Tier1]** AAP｜「Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment」（Pediatrics 2022, Policy Statement, June 21 2022）｜URL: https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022
   直接fetchはCloudflareチャレンジで403。§3代替手順に従い、Wayback Machineの当該URL自体のスナップショット（2023年キャプチャ、本文全文を含む約146,000字を取得）を確認。以下の記載を本文中に確認：
   - 「Airway obstruction from soft objects or loose bedding is the most common mechanism for accidental infant suffocation」（柔らかい物・ゆるい寝具による気道閉塞が偶発的乳児窒息の最も多い機序）－カード本文「AAPは、こうした柔らかい物・ゆるい寝具による気道の閉塞が、偶発的な乳児の窒息で最も多い原因だとしています」と一致。
   - 「It is recommended that weighted blankets, weighted sleepers, weighted swaddles, or other weighted objects not be placed on or near the sleeping infant.」－カード本文「おもり入りの毛布・スリーパー・おくるみを...置かない（AAP）」と一致。
   - 「Bumper pads or similar products...are not recommended because they have been implicated in deaths attributable to suffocation, entrapment/wedging, and strangulation. With current safety standards for crib slats, bumper pads and similar products are not necessary for safety against head entrapment or to prevent injury.」－カード本文「ベッドバンパーは、窒息・すき間への挟み込み・首の絞扼による死亡に関与...現行の安全基準を満たすベビーベッドでは不要とされている（AAP）」と一致。
   - AAPはSORT（Strength of Recommendation Taxonomy）に基づきA/B/Cのエビデンスグレードを用いていることを、掲載されているeLetter（読者からの指摘とタスクフォースの返信）中の言及から確認した。ただし、**柔らかい寝具・ベッドバンパーの推奨に「Grade A」のラベルが明示的に付与されている箇所は、取得できたテキストの範囲では確認できなかった**（本文中で明示的にAグレードと確認できたのは別の推奨＝「同室で別の寝床に寝かせる」推奨についてのみ）。この点は下記「遡及検証で見つかった問題」に記載する。

## ソース間の一致・不一致

- 一致点：柔らかい寝具・ぬいぐるみ・ベッドバンパー・おもり入りブランケットを寝床に置かない、という方向性は日本（こども家庭庁・消費者庁）と米国（CDC・AAP）で完全に一致している。
- 不一致点：なし。

## 日本と海外の文脈差

なし。防止策の内容・方向性ともに共通している。

## エビデンス判定

- 判定：**A**（カード記載どおり）
- 決定木のたどり：Q1「Tier1機関の2つ以上が同じ方向で明確に推奨」→ YES（こども家庭庁・消費者庁・CDC・AAPが同一方向で明確に推奨）→ Q2「主要Tier1機関間で方向の不一致があるか」→ NO → 【A】
- ソース側のグレード：AAPはSORT形式でA/B/Cを用いていることを確認したが、柔らかい寝具・ベッドバンパー項目個別への「A」明記は今回確認できず（上記参照）。

## 影響度判定

- 判定：**critical**（カード記載どおり）
- 根拠：Q1「死亡または不可逆な重篤障害に直結しうるか、その裏付けが出典にあるか」→ YES。消費者庁（Tier1・fetch確認済み）が160件中17件・4件の具体的死亡事故内訳を公式記録として提示。AAP（Tier1・fetch確認済み）が「柔らかい物・ゆるい寝具による気道閉塞が偶発的乳児窒息の最多原因」と明記。

## 遡及検証で見つかった問題

- **confidence_noteの「AAPは最高グレードAとしている」という記述について**：カードのconfidence_noteは「日本・海外の主要機関が一致して推奨し、AAPは最高グレードAとしている」と書いているが、今回Wayback Machine経由で取得したAAP 2022年ポリシーステートメント本文（約146,000字相当）を検索した範囲では、柔らかい寝具・ベッドバンパーの推奨箇所に個別に「Grade A」の明示ラベルが付与されている記載は確認できなかった。確認できたのは、（1）AAPがSORT基準でA/B/Cグレードを用いていること、（2）「別の寝床での同室睡眠」という別の推奨には本文中でSoR A（Strength of Recommendation A）が明示的に言及されていること、の2点のみである。柔らかい寝具の除去自体は同ポリシーの「Recommendations」冒頭リストに明確な推奨として掲載されており、エビデンス判定「A」自体（§6決定木）はTier1機関2者以上の明確な一致推奨という要件を満たすため揺るがないが、confidence_note中の「AAPは最高グレードAとしている」という一文は、今回のfetch範囲では完全な裏付けを確認できなかった。誇張とまでは言えないが、より正確には「AAPはSORT基準でA/B/Cのグレードを用いており、関連する複数の推奨にグレードAを付与している」という書き方が適切だった可能性がある。
- 上記以外の主張・数値については、5本の出典すべてで実際の記載と一致することを確認した。

## 対応（オーケストレーター追記 2026-07-13）
soft finding（confidence_note「AAPは最高グレードA」の裏付け未確認）について：AAP 2022ポリシーステートメント原本（大学ホストPDF https://bpb-us-w2.wpmucdn.com/sites.uab.edu/dist/f/430/files/2025/09/AAP-2022-Safe-Sleep-Recommendations.pdf で実取得）のTable 2「Summary of Recommendations With Strength of Recommendation — A level recommendations」に「Keep soft objects, such as pillows, pillow-like toys, quilts, comforters, mattress toppers, fur-like materials, and loose bedding … away from the infant's sleep area」が明記されていることをオーケストレーターが直接確認した。confidence_noteの記載は正確であり、修正不要。
