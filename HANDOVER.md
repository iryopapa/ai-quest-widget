# AI Quest Widget 引継書

## Nanobanana様への引継ぎ資料

### 担当者: Antigravity
### 日付: 2026-04-08

---

## 1. プロジェクト概要

### 目的
映せばさんのAI教育カリキュラムサイト（ママさん向け復職支援）に組み込む、**たまごっち風キャラクター育成ウィジェット**。学習するとキャラが育ち、コインでアイテムを買える仕組みで、毎日の学習継続を促進する。

### ターゲット
- 小さいお子さんがいるママさん
- AI知識ゼロ → AI秘書代行レベルまでのカリキュラム
- 利用時間: 主に21〜23時（寝かしつけ後）
- 1セッション: 5〜15分

### 設計思想
- **「ご褒美だけ、罰はなし」** — 学習しなくてもペナルティなし
- **毎日1分で参加可能** — デイリーチャレンジでストリーク維持
- **DB不要** — LocalStorageのみで動作

---

## 2. 技術スタック

| 項目 | 技術 |
|---|---|
| ビルド | Vite 6.x |
| 言語 | Vanilla JavaScript（フレームワークなし） |
| CSS分離 | Shadow DOM + aqw-プレフィックス |
| キャラ描画 | Canvas API（白背景除去・アクセサリー合成） |
| データ保存 | LocalStorage（キー: `ai-quest-widget-save`） |
| 出力形式 | 単一IIFE JSファイル（WordPressに1行で組み込み可能） |

---

## 3. プロジェクト構成

```
ai-quest-widget/
├── package.json
├── vite.config.js
├── index.html                     （開発用テストページ）
├── .gitignore
├── README.md                      （導入手順書）
├── HANDOVER.md                    （本ファイル）
├── src/
│   ├── widget.js                  （エントリーポイント・公開API）
│   ├── widget.css                 （全スタイル ~1000行）
│   ├── app/
│   │   ├── WidgetApp.js           （メインコントローラー）
│   │   ├── FloatingCharacter.js   （右下フローティングキャラ）
│   │   └── PanelRouter.js         （パネル内ナビゲーション）
│   ├── game/
│   │   ├── GameState.js           （状態管理・LocalStorage永続化）
│   │   ├── Character.js           （進化・ショップ・バッジデータ）
│   │   ├── Quiz.js                （クイズ問題・ロジック）
│   │   ├── AudioManager.js        （BGM管理）
│   │   ├── StreakSystem.js        （連続学習ボーナス）
│   │   └── DailyChallenge.js      （今日の1問）
│   ├── components/
│   │   ├── CharacterView.js       （Canvas描画・アニメーション）
│   │   ├── Navigation.js          （6タブナビ）
│   │   └── Notification.js        （トースト通知）
│   ├── screens/
│   │   ├── HomeScreen.js          （ホーム画面）
│   │   ├── QuestScreen.js         （クエスト・クイズ）
│   │   ├── ShopScreen.js          （ショップ・着せ替え）
│   │   ├── BookScreen.js          （学習記録・ずかん）
│   │   ├── AdventureMapScreen.js  （★ 星空の山マップ）
│   │   └── DailyChallengeScreen.js（今日の1問）
│   ├── api/
│   │   └── HostIntegration.js     （ホストサイト連携API）
│   └── assets/                    （PNG画像 46ファイル）
└── public/
    └── audio/                     （MP3 BGM 7ファイル）
```

---

## 4. 現在の状態

### 完了済み
- 全6画面（ホーム・マップ・クエスト・デイリー・ショップ・ずかん）
- キャラクター育成（5段階進化）
- クイズ（4カテゴリ×5問）
- ショップ・着せ替え（アクセサリー8種・背景4種）
- デイリーチャレンジ（今日の1問）
- ストリーク（連続学習ボーナス・コイン倍率）
- ホストサイト連携API
- モバイル対応（iPhone SE 375x812 確認済み）
- 開発用テストページ（シミュレーションボタン付き）

### 未完了（Nanobanana様への依頼事項）
- **★ 星空の山マップの画像素材生成（下記セクション5参照）**
- 生成した画像のウィジェットへの組み込み
- プロダクションビルドの画像最適化（WebP変換等）

---

## 5. ★ 画像生成依頼: 星空の山マップ

### コンセプト
山を下から上に登っていく冒険マップ。夜空テーマで、21-23時の利用時間帯にマッチする世界観。

### マップの構成

| 場所 | テーマ | 背景色 |
|---|---|---|
| スタート（最下部） | 夕焼けの麓 🌇 | オレンジ→紫 |
| 1-3合目 | 星が見え始める 🌟 | 紺・紫 |
| 4-5合目 | 天の川 🌌 | ダークブルー |
| 6-7合目 | オーロラ ✨ | グリーン・パープル |
| 山頂（最上部） | 三日月 + 王冠 🌙 | ゴールド・ネイビー |

### アートスタイル
既存のキャラクター画像（`src/assets/char_*.png`）に合わせた **パステル + 3Dクレイ風 + かわいい** スタイル。

### 必要画像リスト

#### 優先度1（必須）

**① 山の背景**
- ファイル名: `map_bg_mountain.png`
- サイズ: 380 x 1600px（縦長）
- 用途: マップ全体のスクロール背景
```
A tall vertical illustration of a cute fantasy mountain at night, 
bottom to top progression: 
bottom section is a warm sunset meadow with small flowers and grass, 
middle section transitions to a purple twilight mountainside with scattered glowing stars, 
upper section is a deep navy blue sky with a milky way band and aurora lights in green and purple, 
the very top has a crescent moon glowing golden. 
Style: soft pastel colors, kawaii aesthetic, dreamy atmosphere, 
no characters, no text. 
Flat illustration style with subtle gradients. 
Aspect ratio 1:4 vertical.
```

**② 完了ノード（光る星）**
- ファイル名: `map_star_done.png`
- サイズ: 64 x 64px
- 用途: クリア済みの章に表示
```
A single glowing star icon, cute kawaii style, 
five-pointed star with a warm golden-yellow glow, 
soft sparkle effect around it, 
3D clay render style, pastel colors, 
transparent background, centered, simple and clean.
```

**③ ロックノード（眠る星）**
- ファイル名: `map_star_locked.png`
- サイズ: 64 x 64px
- 用途: 未到達の章に表示
```
A small sleeping star icon, cute kawaii style, 
five-pointed star in gray/silver color with closed sleepy eyes (zZz), 
dimmed and muted pastel tones, 
3D clay render style, 
transparent background, centered, simple.
```

**④ 山頂ゴール（未達成時）**
- ファイル名: `map_summit_flag.png`
- サイズ: 120 x 120px
- 用途: 山頂のゴール表示
```
A cute kawaii flag on a mountain summit, 
small triangular pink and gold flag on a stick, 
planted on a snowy mountain peak with a few sparkles around it, 
night sky background with stars, 
3D clay render style, soft pastel colors, 
simple and iconic, transparent background, centered composition.
```

**⑤ 山頂ゴール（達成時）**
- ファイル名: `map_summit_crown.png`
- サイズ: 120 x 120px
- 用途: 全章クリア後の山頂表示
```
A cute kawaii golden crown sitting on a crescent moon, 
sparkling with star particles around it, 
the crown is adorned with small colorful gems, 
3D clay render style, soft warm golden glow, 
celebratory and magical atmosphere, 
transparent background, centered composition.
```

#### 優先度2（あるとリッチになる）

**⑥ スタート地点看板**
- ファイル名: `map_start.png`
- サイズ: 100 x 80px
```
A cute kawaii wooden signpost that reads "START" 
planted in a small grassy meadow with tiny flowers, 
warm sunset lighting, soft pastel colors, 
3D clay render style, 
transparent background, centered.
```

**⑦ 現在地キャラ（望遠鏡）**
- ファイル名: `map_current_telescope.png`
- サイズ: 80 x 80px
```
A cute kawaii egg-shaped character looking through a small telescope at the stars, 
the character is round, cream-colored with a happy face, 
standing on a small rocky ledge on a mountainside, 
3D clay render style, soft pastel colors, 
night sky with a few stars in background, 
transparent background, centered composition.
```

**⑧ 星座の線（パス用）**
- ファイル名: `map_trail_stars.png`
- サイズ: 40 x 120px
```
A vertical dotted line made of tiny glowing stars, 
connecting two points like a constellation path, 
about 5-6 small white-yellow dots connected by faint thin lines, 
dark navy background, soft glow effect, 
simple and minimal, kawaii style.
```

**⑨ オーロラ装飾**
- ファイル名: `map_aurora.png`
- サイズ: 380 x 200px
```
A beautiful aurora borealis curtain, 
soft green and purple translucent waves flowing across a dark navy sky, 
kawaii dreamy style, very soft and ethereal, 
semi-transparent, gentle glow, 
flat illustration with gradients, wide horizontal composition.
```

**⑩ 天の川装飾**
- ファイル名: `map_milkyway.png`
- サイズ: 380 x 150px
```
A cute stylized milky way band across a night sky, 
soft white and lavender stardust cluster flowing diagonally, 
tiny sparkling stars scattered around, 
kawaii dreamy style, semi-transparent, 
flat illustration, wide horizontal composition.
```

### 画像の配置先
生成した画像は `src/assets/` に配置してください。

---

## 6. 画像組み込み後の作業

画像生成後、`AdventureMapScreen.js` と `widget.css` のマップ部分を更新して画像を反映する必要があります。

### AdventureMapScreen.js での変更箇所

```javascript
// 上部にimport追加
import mapBg from '../assets/map_bg_mountain.png';
import mapStarDone from '../assets/map_star_done.png';
import mapStarLocked from '../assets/map_star_locked.png';
import mapSummitFlag from '../assets/map_summit_flag.png';
import mapSummitCrown from '../assets/map_summit_crown.png';
import mapStart from '../assets/map_start.png';

// 各所で使用:
// - 山頂: mapSummitFlag (未達成) / mapSummitCrown (達成)
// - 完了ノード: mapStarDone（iconCheck の代わり）
// - ロックノード: mapStarLocked（iconLocked の代わり）
// - スタート: mapStart
```

### widget.css での変更箇所

```css
/* .aqw-map-mountain の background を画像に変更 */
.aqw-map-mountain {
  background: url(...) center/cover no-repeat;
  /* 現在のCSSグラデーションを画像に置き換え */
}
```

---

## 7. 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/iryopapa/ai-quest-widget.git
cd ai-quest-widget

# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:5173 でテストページが開く

# ビルド
npm run build
# → dist/ に出力
```

---

## 8. GitHubリポジトリ作成手順

※ サンドボックス制限により自動作成できなかったため、以下の手順で手動作成をお願いします。

```bash
cd ~/Documents/Antigravity/AIクエスト/ai-quest-widget

# 既存の不完全な.gitを削除
rm -rf .git

# Git初期化
git init
git checkout -b main

# 全ファイルをステージ
git add -A

# 初回コミット
git commit -m "feat: AI Quest Widget - ゲーミフィケーション育成ウィジェット

- キャラクター育成（5段階進化）
- クイズ（4カテゴリ×5問）
- 星空の山 冒険マップ
- デイリーチャレンジ（今日の1問）
- ストリーク（連続学習ボーナス）
- ショップ・着せ替え
- ホストサイト連携API
- Shadow DOM CSSスコープ隔離
- モバイル対応"

# GitHubリポジトリ作成 & プッシュ
gh repo create iryopapa/ai-quest-widget --public --source=. --push
```

---

## 9. ファイル間の依存関係

```
widget.js（エントリー）
  ├── widget.css（スタイル）
  ├── app/WidgetApp.js
  │   ├── game/GameState.js
  │   ├── game/AudioManager.js
  │   ├── app/FloatingCharacter.js
  │   │   └── game/Character.js（進化データ）
  │   ├── app/PanelRouter.js
  │   │   ├── screens/HomeScreen.js
  │   │   │   └── components/CharacterView.js（Canvas描画）
  │   │   ├── screens/AdventureMapScreen.js ← ★画像追加対象
  │   │   ├── screens/QuestScreen.js
  │   │   │   └── game/Quiz.js（問題データ）
  │   │   ├── screens/DailyChallengeScreen.js
  │   │   │   └── game/DailyChallenge.js
  │   │   ├── screens/ShopScreen.js
  │   │   └── screens/BookScreen.js
  │   ├── components/Notification.js
  │   └── api/HostIntegration.js
  │       └── game/StreakSystem.js
  └── components/Navigation.js
```

---

## 10. 関連資料

| 資料 | 場所 |
|---|---|
| ゲーミフィケーション提案書 | `../ゲーミフィケーション提案書.md` |
| 実装計画書 | 本リポジトリ内の各ソースコードコメント |
| 元のAI Questアプリ | https://github.com/iryopapa/ai-quest |
| ゲームフルデザインPDF | `../ゲームフルデザイン.pdf` |

---

## 11. 連絡事項

- 画像の白背景は `CharacterView.js` の `removeWhiteBg()` で自動除去されますが、マップ画像は直接`<img>`で表示するため **透過PNG推奨** です
- 既存キャラ画像（`char_egg.png`等）は白背景PNGですが、マップ上で使用する場合はCSS `border-radius: 50%` + `overflow: hidden` のサークル内に収まるため問題ありません
- 音楽ファイル（`public/audio/`）は既存のものをそのまま使用しています
