# v2 アセット投入ディレクトリ

本番アセット生成の出力先。仮実装が自動的にこれらのファイルを優先利用する。

## ディレクトリ用途

```
assets/
├── raster/      生成されたラスタ画像（Firefly/Gemini出力。SVG化前のオリジナル保管用）
│   ├── char_chick.png
│   ├── item_ribbon.png
│   └── ...
├── lottie/      AE→Bodymovin で書き出された Lottie JSON
│   ├── char_chick.json
│   ├── char_kitten.json
│   └── ...
├── items/       静的SVG アクセサリ（Firefly SVG export または Recraft.ai 経由）
│   ├── item_ribbon.svg
│   ├── item_hat.svg
│   └── ...
└── shadows/     接地影 SVG（手描き or 共通アセット）
    ├── shadow_head_top.svg
    ├── shadow_ear_left.svg
    └── ...
```

## ファイル名規約

| 種別 | パターン | 例 |
|---|---|---|
| キャラLottie | `char_<id>.json` | `char_chick.json` |
| アクセSVG | `item_<id>.svg` | `item_ribbon.svg` |
| 影SVG | `shadow_<slot>.svg` | `shadow_head_top.svg` |

`<id>` は `accessory_anchors.json` のキーと一致させること。

## 投入時の自動切り替え

`CharacterViewV2.js` の `getAssetUrl()` がこの順で解決する:

1. `assets/lottie/char_<id>.json` があれば Lottie モード
2. なければ `assets/raster/char_<id>.png` フォールバック
3. それもなければ既存の `../../assets/char_<id>.png` フォールバック

アクセも同様:
1. `assets/items/item_<id>.svg` があれば SVG使用
2. なければ既存 `../../assets/item_<id>.png` フォールバック

→ **ファイルを置けば自動的に新アセットに切り替わる**ため、コード修正不要。
