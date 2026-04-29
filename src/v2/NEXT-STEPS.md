# 仮実装から本番へ: 次のアクション

仮実装（Phase 1a）が動作確認OK → 本番アセット生成（Phase 1b〜2〜3）に着手するためのチェックリスト。

## 全体ロードマップ

```
[Phase 1a] PNG-based 仮実装          ← 完了 ✅
   │
[Phase 1b] chick の Lottie 化         ← 次これ（A）
   │
[Phase 2a] アクセ6種の SVG 化         ← 並行可能（B）
   │
[Phase 2b] 残りキャラ4種 Lottie 化   ← chick で確立した手順を量産
   │
[Phase 3]  接地影 SVG 6種             ← 仕上げ
   │
[Phase 4]  背景 SVG 4種               ← 仕上げ
   │
[Phase 5]  既存 widget への統合        ← 全アセット揃ったら
   │
[Phase 6]  映せばさん向け提案書化     ← Before/After スクショ付き
```

---

## (A) chick の Lottie 化

### 担当: あなた（人間作業）

1. **ラスタ生成**（Firefly or Gemini Flash で 3-5案）

   親計画 §3 のプロンプトをコピー:
   ```
   Cute mascot character, hand-drawn vector illustration style,
   flat colors with soft gradient highlights, warm dark brown outline,
   front-facing pose with slight 3/4 angle, lighting from upper-left 45 degrees,
   big sparkly eyes with two white highlights, blush cheeks,
   transparent background, square 1024x1024 composition,
   matching style of cozy children's storybook illustration
   +
   A fluffy yellow baby chick standing on small legs,
   tiny orange beak, soft feather texture suggested with simple curves,
   arms slightly raised in greeting pose
   ```

2. **ベスト1選定** → 保存先: `src/v2/assets/raster/char_chick.png`

3. **SVG化**
   - Firefly の SVG export（推奨）
   - or Recraft.ai でPNG→SVG変換
   - Inkscape で軽くクリーンアップ
   - 保存先: 一時的に `src/v2/assets/raster/char_chick.svg` でも可

4. **AfterEffects 取り込み**
   - メモリアの `memoria_character_setup.jsx` をベースに使用
   - レイヤー命名規約: `body / head / eye_left / eye_right / wing_left / wing_right`
   - 呼吸・まばたきのエクスプレッションを設定（親計画 §5）

5. **Lottie書き出し（Bodymovin）**
   - 出力: `src/v2/assets/lottie/char_chick.json`
   - 設定: glyph化なし、最適化ON
   - サイズ目安: 150-400KB

### 担当: 私（コード側）

ファイルが配置されたら自動的にLottieモードに切り替わります。
追加で:
- [ ] `npm i lottie-web` 実行（私がコマンド提案、実行はあなた承認）
- [ ] Lottieの呼吸とCSS sub-motionの周期同期確認
- [ ] iPhone実機 or DevTools でFPS計測

---

## (B) アクセ6種の SVG化（並行作業可能）

### 担当: あなた（人間作業）

1. **6種ラスタ生成**（親計画 §3 のアクセプロンプト）

   各アクセに置換: `pink ribbon bow / pastel top hat / round-frame glasses / small jeweled crown / cherry blossom flower / yellow shooting star`

2. **SVG化** → `src/v2/assets/items/item_<id>.svg`
   - viewBox は `0 0 100 100` に正規化
   - 影・背景なし、傾きなし（傾きは装着時に適用）
   - 白背景は完全除去（mix-blend-modeに頼らない）

### 担当: 私（コード側）

- ファイル配置後、自動的にPNG→SVG切り替え
- 装着位置のキャリブレーション（あなたがブラウザで手動調整）
- グラスとスター用に Lottie エフェクト（fx_lens_shine / fx_radial_burst）を後追いで追加

### キャリブレーション手順（あなた）

1. SVG配置 → `npm run dev` で確認
2. デモページのキャラセレクタで対象キャラを選ぶ
3. キャリブレータで該当アクセの `offsetX/Y/rotation/scale` を調整
4. 「JSONをコピー」→ `accessory_anchors.json` の該当エントリに貼り付け
5. **5キャラ × 6アクセ = 30エントリ** を順に埋める（1エントリあたり1〜2分）

---

## (C) 残りキャラ4種（egg/kitten/rabbit/unicorn）

(A)の手順を4回繰り返す。テンプレ化された AE プロジェクトを使い回せば1キャラあたり半日程度。

各キャラの追加プロンプトは親計画 §3 にあり。

---

## 並行作業の推奨順

| 日 | あなた | 私 |
|---|---|---|
| 1 | chick ラスタ生成 → SVG | (B)のための調整UI改良 |
| 2 | chick AE 取り込み・Null追加 | lottie-web インストール準備 |
| 3 | chick Lottie 書き出し → 動作確認 | Lottie統合の最終調整 |
| 4 | アクセ6種ラスタ生成 → SVG（並行） | パフォーマンス計測スクリプト |
| 5 | アクセSVG確認・キャリブレーション | 接地影SVG生成補助 |
| 6-9 | 残り4キャラを量産 | キャラ切替ロジック整備 |
| 10 | 全アセット投入 → 統合確認 | 既存widgetへの統合準備 |
| 11 | Before/After スクショ撮影 | 提案書TBD埋め |
| 12 | 映せばさん向け提案書最終化 | レビュー |

---

## 各Phase完了の判定基準

### Phase 1b (chick Lottie) 完了基準
- [ ] `src/v2/assets/lottie/char_chick.json` が配置されている
- [ ] デモページで Lottieひよこが滑らかに呼吸・まばたきする
- [ ] アクセ装着時、Lottie側の動きに乗ってアクセが揺れる
- [ ] iPhone DevTools で60fps維持

### Phase 2a (アクセSVG化) 完了基準
- [ ] `src/v2/assets/items/item_*.svg` が6個配置
- [ ] 5キャラ × 6アクセ = 30エントリ全てキャリブレーション済み
- [ ] mix-blend-mode に頼らずクッキリ表示

### Phase 1c-final (全キャラLottie) 完了基準
- [ ] `src/v2/assets/lottie/char_*.json` が5個配置
- [ ] キャラセレクタで全キャラ切替がスムーズ

### 提案書化前の最終確認
- [ ] 既存 LocalStorage データで起動しても問題なし
- [ ] バンドルサイズ before/after 計測
- [ ] iPhone SE / Pixel 6a 実機で動作確認

---

## トラブル時のリカバリ

| 症状 | 対応 |
|---|---|
| Lottie呼吸とCSSアクセ揺れがバラバラ | `v2.css` の `aqw-v2-fx-sway` 周期を Lottie の duration に合わせる |
| SVG が大きすぎてキャラからはみ出る | `accessory_anchors.json` の `scale` を 0.4〜0.6 に下げる |
| キャラ切り替え時にアクセが消える | `setEquipped()` 呼び忘れ。デモHTML側で再呼び出し |
| Lottie が読み込まれない | `assets/lottie/` のファイル名が `char_<id>.json` になっているか確認 |
| iOS Safariでカクつく | `will-change: transform` のCSS確認、Lottie `renderer: 'canvas'` 検討 |
