# CLAUDE.md — 子育ての地図（kosodate-cards）

## これは何
エビデンスに基づく子育ての推奨を、妊娠期〜独り立ちまで構造化して無料公開するサイト（Astro + GitHub Pages）。医学の「標準治療」の考え方を子育てに応用し、各推奨に「エビデンス強度×影響度」の2軸評価を付ける。**公開中**（https://syake03.github.io/kosodate-cards/ ）。
- サイト名は「子育ての地図」。旧称「子育ての標準治療」は言い換え済みなので本文では使わない。
- 運営は個人・非営利・匿名（企業/団体/行政と無関係、広告なし）。正しさは肩書きでなく各カードの出典で担保する方針。

## 現状（2026-07-18）
- カード37枚すべて status:published（第8バッチまで公開）。
- Fable 5外部批評（全14項目）はほぼ対応済み。次の制作バッチ（第9〜）のトピック選定方針は未定。

## 一次情報（この順で読む）
1. `README.md` — フォルダ構成の全体像
2. `BUILD_INSTRUCTIONS.md` — 構築依頼書（Claude Codeへの指示の起点）
3. `docs/SPEC.md` — サイト実装仕様 / `docs/CONTENT_SPEC.md` — カード制作・データ仕様
4. `docs/pipeline/` — 制作パイプライン（PIPELINE / WRITER_PROMPT / REVIEWER_PROMPT）

## 開発コマンド
- `npm run dev` → http://localhost:4321/kosodate-cards/ （`.claude/launch.json` 設定済み）
- 検索の動作確認は `npm run build && npm run preview`（devでは検索が動かない）

## 関連する場所
- コード以外の資料: `~/Documents/30_プロジェクト資料/kosodate/子育て/`（COWORK_BRIEF・PRODUCTION_QUEUE。PRODUCTION_QUEUEは初期10枚時代のもので古い）
- 依頼者=ユーザー本人。非エンジニアなので専門用語は一言添える
