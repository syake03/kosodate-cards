# 子育ての標準治療（仮称）— プロジェクト一式

医学の「標準治療」の子育て版。エビデンスに基づく推奨を、妊娠期〜独り立ちまで構造化して無料公開するためのプロジェクトです。

## このフォルダの中身

```
.
├─ BUILD_INSTRUCTIONS.md   ← Claude Code はまずこれを読む（構築依頼書）
├─ docs/
│  ├─ SPEC.md              ← サイト実装仕様（Astro / GitHub Pages）
│  └─ CONTENT_SPEC.md      ← カード制作・データ参照の仕様（v1.2）
├─ src/content/cards/      ← 公開する「カード」（1ファイル=1推奨）
│  ├─ no-honey-under-1.md
│  └─ safe-sleep-supine.md
└─ research/               ← 各カードの調査ログ（監査用・非公開でよい）
   ├─ no-honey-under-1.md
   └─ safe-sleep-supine.md
```

## 使い方

1. このフォルダを丸ごと Claude Code に渡す。
2. 「`BUILD_INSTRUCTIONS.md` に従ってサイトを構築して」と伝える。
3. ローカルで表示を確認 → GitHub にプッシュ → GitHub Pages で公開。

## 用語

- **カード** … 1つの推奨アクション（例：「1歳未満にはちみつを与えない」）。
- **エビデンス強度** … A / B / C / observational の4段階（CONTENT_SPEC §5.1）。
- **影響度** … critical（致命的）/ serious（重大）/ qol（生活の質）（同 §5.2）。
- **絶対リスト** … `evidence:A × impact:critical` のカード。トップに自動表示。
