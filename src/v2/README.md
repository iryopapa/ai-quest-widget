# v2 - 新キャラ装着パイプライン仮実装

親計画 `ai-quest-app/docs/2026-04-28-accessory-attach-pipeline.md` Phase 1 仮実装版。

## 構成

```
src/v2/
├── AccessorySlot.js         アンカー追従するアクセDOM要素
├── CharacterViewV2.js       新DOM-based CharacterView（既存と互換シグネチャ）
├── AnchorCalibrator.js      装着位置調整デバッグUI
├── accessory_anchors.json   キャラ × アクセの装着メタデータ
├── v2.css                   v2系のスタイル
└── README.md                これ
```

外部ファイル: `../../demo-new-pipeline.html` （プロジェクトルート）

## Phase 1a の実装範囲

| 項目 | 状態 |
|---|---|
| 対応キャラ | **chick のみ** |
| 対応アクセ | **ribbon, hat のみ** |
| キャラ表現 | 既存PNG（CSS呼吸アニメで揺らす） |
| アクセ表現 | 既存PNG + CSS sub-motion (sway/bobble) |
| 接地影 | data URI でインライン |
| 装着セレモニー | 未実装 |
| Lottie | 未統合 |

## 動かし方

プロジェクトルート（`ai-quest-widget/`）で:

```bash
npm install      # 初回のみ
npm run dev
```

ブラウザで:

```
http://localhost:5173/demo-new-pipeline.html
```

左に Before（現行Canvas方式）、右に After（新DOM方式）が並ぶ。
リボン・ハットのボタンで装着切替、下のキャリブレータで位置調整。

## 確認すべきこと（提案書化の判定材料）

- [ ] After のひよこが滑らかに呼吸している（CSS breath アニメ）
- [ ] リボン装着時、リボンが**呼吸と一緒に上下する**
- [ ] リボンがさらに**個別にゆらぐ**（CSS sway）
- [ ] ハット装着時、頭の下に**薄い影**が見える
- [ ] ハットが**ぴょこぴょこ弾む**（CSS bobble）
- [ ] iPhone (DevTools)でモバイルプレビュー確認
- [ ] 60fps 維持

これらが満たされれば、Lottie差し替え（Phase 1b）→ 全キャラ展開（Phase 2）→ 提案書化 へ進める。

## キャリブレータの使い方

1. デモページ下部の「装着キャリブレータ」でアクセを選択
2. offsetX/Y, rotation, scale をスライダーで調整
3. After 側で位置がリアルタイムに反映される
4. 良い位置で「JSONをコピー」→ `accessory_anchors.json` の該当エントリに貼り付け

## Phase 1b への移行手順

Phase 1a 検証OK後:

1. `char_chick.json` (Lottie) を `assets/lottie/` に配置
2. `CharacterViewV2.js` の `<img class="aqw-v2-char-img">` を Lottie コンテナに置換
3. `lottie-web` をインストール: `npm i lottie-web`
4. `AccessorySlot.attachLottieFx()` の TODO を実装（`fx_lens_shine.json` 等）
5. キャラLottie側に `slot_*` Null を仕込み、AE→Bodymovin 再書き出し
6. `accessory_anchors.json` の slot座標は Null 名参照に切替（または現行座標を維持しつつ Null 動きを加算）

## 既知の制約

- 既存PNGは白背景。`mix-blend-mode: multiply` で透過っぽく見せている。Phase 1bで不要になる
- CSS `breath` の周期はLottie呼吸とズレる可能性あり。Phase 1bで Lottie側に同期合わせ
- キャリブレータのコピーは clipboard API。HTTPS or localhost でないと動かない
- 親計画 §1 の「同時アクセ最大6並列」上限は Phase 1a では未実装
