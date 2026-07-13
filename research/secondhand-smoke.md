# 調査ログ: secondhand-smoke

**本ログはカード公開後に遡及作成した検証ログである（作成日 2026-07-13）。**
カード本文（`src/content/cards/secondhand-smoke.md`）は既に `status: published` で公開済みであり、本ログはその出典を事後的にfetch・検証した記録である。カード本文は本ログの作成にあたり一切変更していない。

作成日: 2026-07-13 / 作成モデル: claude-sonnet-5（遡及検証担当）

---

## 検証の方法

カード本文に掲載された出典URL 4本をすべて実際にfetchし、本文中の主張・数値が実在するか照合した。CDC・AAPの2本は直接fetchがボット検知（403 / Cloudflareチャレンジ）でブロックされたため、CONTENT_SPEC.md §3の代替手順に従い、Wayback Machineに保存された当該URL自体のスナップショットを取得して内容を確認した。厚生労働省e-ヘルスネットの1本は、カード記載のURL（e-healthnet.mhlw.go.jp）がDNS解決不能（NXDOMAIN、ドメイン移行済み）だったため、移行先の同一資料URL（kennet.mhlw.go.jp）をfetchして代替検証した。

## 検証済みソース

1. **[Tier1]** こども家庭庁｜「乳幼児突然死症候群（SIDS）について」｜URL: https://www.cfa.go.jp/policies/boshihoken/kenkou/sids｜更新：令和7年12月24日（カード記載「令和7年12月更新」と一致）
   直接WebFetchで取得・確認。「令和6年には55名の乳児がSIDSで亡くなっており、乳児期の死亡原因としては第3位」「乳幼児の周囲で誰かがたばこを吸うことは、SIDSの発生率を高くする」「妊婦の受動喫煙も生まれた後のSIDS要因になる」を確認。カード本文の該当記述と一致（no-soft-objects-in-cribカードと共通の出典）。

2. **[Tier1]** AAP｜「Sleep-Related Infant Deaths: Updated 2022 Recommendations」（Pediatrics 2022, Policy Statement, June 21 2022）｜URL: https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022
   直接fetchはCloudflareチャレンジで403。§3代替手順に従い、Wayback Machineの当該URL自体のスナップショット（2023年キャプチャ、本文全文取得）を確認。以下を本文中に確認：
   - 「Both smoking by pregnant people and smoke in the infant's environment after birth are major risk factors for SIDS.」（妊娠中の喫煙も、出生後の環境中のたばこ煙も、SIDSの主要な危険因子）－カード本文「妊娠中の喫煙も出生後の環境中のたばこ煙も『SIDSの主要な危険因子』と明記している」と完全一致。
   - 「Bed sharing with a current smoker (even if he or she does not smoke in bed) or if the mother smoked during pregnancy」を、避けるべき添い寝状況のリストに明記－カード本文「喫煙する大人が赤ちゃんと添い寝するのは特に避ける（AAPは、その大人がベッドで吸わなくてもSIDSリスクが特に高いとしている）」と完全一致。
   - 「Although there is no evidence on the relationship of vaping or electronic cigarette use and SUID, electronic cigarettes contain nicotine, which has been implicated in sleep-related infant deaths.」－カード本文「電子タバコ・加熱式たばこもニコチンを含む。SIDSとの直接の研究は限られるが」と概ね一致。ただし**AAP原文は電子タバコ（vaping/electronic cigarette）についてのみ言及しており、「加熱式たばこ」への明示的な言及はAAP側では確認できなかった**（下記「遡及検証で見つかった問題」参照）。

3. **[Tier1]** CDC｜「Health Problems Caused by Secondhand Smoke」｜URL: https://www.cdc.gov/tobacco/secondhand-smoke/health.html｜更新：確認できた最新版でJanuary 31, 2025（カード記載「2025年1月更新」と一致）
   直接fetchは403。§3代替手順に従い、Wayback Machineの複数時点のスナップショットを確認（2025年1月時点のキャプチャでは「May 15, 2024」表記だったが、より新しい2026年時点のキャプチャで「January 31, 2025」に更新されていることを確認——カード記載の更新日と一致）。「There is no safe level of exposure to secondhand smoke (SHS)」「Secondhand smoke can cause sudden infant death syndrome (SIDS), respiratory infections, ear infections」を確認。カード本文「受動喫煙に『安全なばく露レベルはない』としている」「受動喫煙は、乳幼児の呼吸器感染症・中耳炎・喘息発作なども増やすとされる」と一致。

4. **[Tier1]** 厚生労働省 e-ヘルスネット｜「三次喫煙（サードハンド・スモーク）」｜カード記載URL: https://www.e-healthnet.mhlw.go.jp/information/dictionary/tobacco/yt-057.html
   **カード記載のURLは、今回の検証時点でDNS解決不能（NXDOMAIN）となっており、直接アクセスできなかった。** 検索により、同資料が新ドメイン「kennet.mhlw.go.jp」（健康日本21アクション支援システム）に移行済みであることを確認し、移行先URL（https://kennet.mhlw.go.jp/information/information/dictionary/tobacco/yt-057.html）をfetchして代替検証した。
   本文中に「たばこ由来のニコチンや化学物質は、喫煙者の毛髪や衣類、部屋や自動車のソファやカーペット、カーテンなどの表面に付着して残留する」との記載を確認——カード本文「たばこの成分は衣服や室内に残り、換気だけでは取り除けない」「ベランダや別室で吸っても、たばこの成分は髪・衣服や室内の家具・カーテンに残り」の裏付けとなる表面残留メカニズムの記述として一致。
   **しかし、カード本文「よくある誤解」節にある「厚生労働省は、換気扇を使ったり窓を開けたりしても三次喫煙のリスクは排除できないとしている」という具体的な一文は、このページ本文中には存在しなかった。** ページには「三次喫煙を防ぐ方法はすでに明らかで、それは屋内を完全禁煙にすることです」という記載はあるが、換気・窓開けに関する明示的な否定の記載は確認できなかった。この点は下記「遡及検証で見つかった問題」に記載する。

## ソース間の一致・不一致

- 一致点：妊娠中・出生後の禁煙、受動喫煙・SIDSの関連については、こども家庭庁・AAP・CDCで完全に一致。
- 不一致点：なし（方向の不一致はない）。

## 日本と海外の文脈差

なし。禁煙の推奨内容・SIDSとの関連についての説明は日米で共通している。

## エビデンス判定

- 判定：**A**（カード記載どおり）
- 決定木のたどり：Q1「Tier1機関の2つ以上が同じ方向で明確に推奨」→ YES（こども家庭庁・AAP・CDCが同一方向で明確に推奨。AAPは本推奨をポリシーステートメントの推奨リスト冒頭に明記）→ Q2「主要Tier1機関間で方向の不一致があるか」→ NO → 【A】
- ソース側のグレード：AAPはSORT形式でA/B/Cグレードを用いているが、禁煙推奨個別への「A」明記は今回のfetch範囲では確認できなかった（no-soft-objects-in-cribと同一の留保）。

## 影響度判定

- 判定：**critical**（カード記載どおり）
- 根拠：Q1「死亡または不可逆な重篤障害に直結しうるか、その裏付けが出典にあるか」→ YES。こども家庭庁（Tier1・fetch確認済み）が令和6年のSIDS死亡55名・乳児期死因第3位という公式統計を提示。AAP（Tier1・fetch確認済み）が喫煙・受動喫煙を「SIDSの主要な危険因子」と明記。

## 遡及検証で見つかった問題

1. **出典URLのリンク切れ**：カード出典欄に記載された厚生労働省e-ヘルスネットのURL（https://www.e-healthnet.mhlw.go.jp/information/dictionary/tobacco/yt-057.html）は、今回の検証時点でDNS解決不能となっており、読者がこのリンクをクリックしても資料に到達できない状態である。同資料は新ドメイン（kennet.mhlw.go.jp）に移行済みで内容自体は存在するため、カードの主張自体が誤りというわけではないが、**出典欄のURLが実質的にリンク切れになっている**という運用上の問題がある。カード本文は変更しない方針のため本ログでの指摘にとどめるが、URL更新の検討を推奨する。

2. **「よくある誤解」節の具体的主張が出典で確認できなかった**：カード本文は「厚生労働省は、換気扇を使ったり窓を開けたりしても三次喫煙のリスクは排除できないとしている」と、この主張を厚生労働省に明示的に帰属させているが、出典として挙げられているe-ヘルスネット記事（移行先を含め）の本文中にはこの具体的な文言・趣旨の記載は確認できなかった。同記事にあるのは「たばこ由来の化学物質は毛髪・衣類・家具・カーテン等の表面に付着して残留する」という一般的なメカニズムの説明と、「三次喫煙を防ぐ方法は屋内を完全禁煙にすること」という対策の記述のみであり、「換気・窓開けでは不十分」という否定形の明示的主張は見当たらなかった。
   この主張の科学的な妥当性自体（三次喫煙が表面残留由来である以上、空気の入れ替えだけでは対処できないという論理）は上記メカニズムの記載と整合しており、不合理な推論ではない。しかし、CONTENT_SPEC.md §8「セクション別の根拠要件」は「俗説の否定にも出典が要る」と定めており、本カードのこの一文は**出典に明示的な裏付けのない、書き手による論理的補完（推論）である可能性が高い**。「厚生労働省は...としている」という直接引用的な書き方は、実際には厚労省が明示的に述べていない内容を厚労省の見解であるかのように提示してしまっている点で、正確性に疑問が残る。カード本文は変更しない方針のため、この点を正直に記録するにとどめる。

## 対応（オーケストレーター追記 2026-07-13）
1. リンク切れ：出典欄のe-ヘルスネットURLを、移行先の kennet.mhlw.go.jp（健康日本21アクション支援システム、HTTP 200確認済み）に更新した。
2. 帰属の問題：「換気扇や窓開けでもリスクは排除できない（厚労省）」という、出典に明示的記載のない帰属を修正。厚労省ページに実在する記載（表面残留のメカニズム＋「三次喫煙を防ぐ方法は屋内完全禁煙」）を厚労省に帰属させ、換気では不十分という帰結は出典由来のメカニズムからの説明として書き分けた。
3. 補足：AAP 2022ポリシーステートメント原本（大学ホストPDFで実取得）のTable 2「A level recommendations」に「Avoid smoke and nicotine exposure during pregnancy and after birth」が明記されていることをオーケストレーターが直接確認。本ログの「禁煙推奨個別へのA明記は未確認」という留保は解消された。
