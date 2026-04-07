# AI Quest Widget

AI教育カリキュラムサイトに組み込むフローティングウィジェット。
たまごっち風キャラクター育成 × AIクイズ学習ゲームです。

## 機能

- **キャラクター育成**: 5段階進化（たまご → ひよこ → こねこ → うさぎ → ユニコーン）
- **クエスト**: 4カテゴリ × 5問のAIクイズ
- **冒険マップ**: カリキュラムの進捗を視覚化
- **デイリーチャレンジ**: 毎日1問、1分で参加可能
- **ストリーク**: 連続学習日数でコイン倍率アップ（3日→1.2x, 7日→1.5x, 14日→2.0x, 30日→2.5x）
- **ショップ**: コインでアクセサリー・背景を購入、キャラを着せ替え
- **ホストサイト連携API**: 動画視聴・テスト合格等でXP/コインを付与

## 開発

```bash
npm install
npm run dev
```

`http://localhost:5173` でテストページが開きます。

## WordPress導入方法

### 1. ファイル配置

`dist/` フォルダの内容をWordPressサーバーにアップロード：
- `ai-quest-widget.iife.js` → テーマディレクトリまたはCDN

### 2. スクリプト追加

WordPressテーマのフッター（`footer.php`等）に追加：

```html
<script src="/path/to/ai-quest-widget.iife.js"></script>
<script>
  AIQuest.init({
    chapters: [
      { id: 'ch1', title: '第1章 AIとは？', items: 3 },
      { id: 'ch2', title: '第2章 生成AIの基礎', items: 4 },
      // カリキュラムの章構成に合わせて設定
    ]
  });
</script>
```

### 3. 学習イベント連携

カリキュラムサイトの学習完了イベントで以下のAPIを呼び出し：

```javascript
// 動画視聴完了時（+20 XP, +5コイン）
AIQuest.onVideoComplete();

// テキスト読了時（+10 XP, +3コイン）
AIQuest.onTextComplete();

// 小テスト合格時（+30 XP, +15コイン）
AIQuest.onQuizPass(false);

// 小テスト満点合格時（+50 XP, +25コイン）
AIQuest.onQuizPass(true);

// 章クリア時（+100 XP, +50コイン）
AIQuest.onChapterComplete('ch1');
```

### 4. その他のAPI

```javascript
AIQuest.open();       // パネルを開く
AIQuest.close();      // パネルを閉じる
AIQuest.getState();   // 現在のゲーム状態を取得（読み取り専用）
```

## データ保存

- ブラウザのLocalStorageに保存（キー: `ai-quest-widget-save`）
- サーバー/データベース不要
- 注意: 別端末・別ブラウザではデータ共有不可

## 技術スタック

- Vite + Vanilla JavaScript
- Shadow DOM（CSSスコープ隔離）
- Canvas API（キャラクター描画）
- LocalStorage（データ永続化）
