# BUILD_INSTRUCTIONS.md — Claude Code への構築依頼書

このフォルダを丸ごと Claude Code に渡し、以下を実行してもらう。

---

## あなた（Claude Code）へのお願い

このフォルダには、子育ての「標準治療」をまとめた公開サイトの仕様と、初期コンテンツ2枚が入っています。**`docs/SPEC.md` を実装仕様として、動く静的サイトを構築し、GitHub Pages で公開できる状態にしてください。**

### 手順

1. **まず `docs/SPEC.md` を全部読む。** 特に §1（技術スタック＝Astro）、§2（カードのデータスキーマ）、§5（2軸評価）、§6（デザイントークン）、§7（画面構成）、§11（ディレクトリ構成）、§12（受け入れ基準）に従うこと。
2. **`docs/CONTENT_SPEC.md` にも目を通す。** これはカードの中身の作り方のルール。サイト構築時は、カードのフロントマター項目（id/title/statement/domain/ages/evidence/impact/tags/updated/status/confidence_note）がここで定義された値であることを前提にスキーマを組む。
3. Astro プロジェクトを初期化し、`docs/SPEC.md §11` のディレクトリ構成で組み立てる。
4. **既存のカード2枚をそのまま使う。** `src/content/cards/` に `no-honey-under-1.md` と `safe-sleep-supine.md` が既にある。これらが正しく表示されるようにする。中身は書き換えないこと。
5. `docs/SPEC.md §12` の受け入れ基準（Definition of Done）を1つずつ満たす。
6. ローカルで `npm run dev` が動き、`npm run build` が通ることを確認する。
7. GitHub Pages 用の GitHub Actions ワークフロー（`.github/workflows/deploy.yml`）を用意する。

### 最初に動かすときの最小ゴール（これができたら第一段階クリア）

- トップページに、2枚のカードが表示される。
- そのうち「あおむけ寝」と「はちみつ」は両方 `evidence:A × impact:critical` なので、**トップの「The Essentials（絶対リスト）」に自動で出る**こと。
- 各カードをクリックすると詳細ページが開き、本文（なぜ／どうする／よくある誤解／出典）が読める。
- エビデンスバッジ（A）と影響度バッジ（critical）が、色＋文字ラベルで表示される。
- 領域別ビュー（栄養／安全・事故予防）と年齢別ビュー（0〜1歳）から、それぞれのカードにたどり着ける。

まずここまでを動かし、その後 §7 の残りの画面（俯瞰マトリクス、本人／専門家トグル、methodology・disclaimerページ、Pagefind検索）を実装する。

### 注意

- **カードの内容（事実・出典）は絶対に改変しない。** レイアウトのために表示を変えるのは可だが、テキストや出典URLは触らない。
- localStorage はサイト（GitHub Pages）上では使用可。ただし本人／専門家トグルの初期値は「本人向け」にする。
- `astro.config.mjs` の `base` を、公開するリポジトリ名に合わせて設定する（例：リポジトリ名が `kosodate-cards` なら `base: '/kosodate-cards/'`）。
- 分からない設計判断は、勝手に決めず `docs/SPEC.md` の記述を優先する。仕様にない細部は、シンプルで壊れにくい方を選ぶ。

### 完成後に教えてほしいこと

- ローカルで確認する方法（`npm install` → `npm run dev` の手順）
- GitHub にプッシュして Pages で公開するまでの手順（リポジトリ作成、Pages の設定箇所）
- 新しいカードを追加する方法（`src/content/cards/` に `.md` を足すだけで反映される、という前提で合っているかの確認）
