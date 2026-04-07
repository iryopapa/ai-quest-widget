// Home Screen - Widget version
// All classes prefixed with aqw-, all DOM queries use this.container.querySelector()
// No StatusBar, no hunger-based messages, streak display added
import { CharacterView } from '../components/CharacterView.js';
import { Character } from '../game/Character.js';
import { getMultiplier } from '../game/StreakSystem.js';

import iconStreak from '../assets/icon_streak.png';
import iconCoin from '../assets/icon_coin.png';
import iconBook from '../assets/icon_book.png';
import iconSparkle from '../assets/icon_sparkle.png';
import itemCrown from '../assets/item_crown.png';

export class HomeScreen {
  constructor(container, gameState, onNavigate) {
    this.container = container;
    this.gameState = gameState;
    this.onNavigate = onNavigate;
    this.charView = null;
  }

  render() {
    const level = this.gameState.get('level');
    const xp = this.gameState.get('xp');
    const coins = this.gameState.get('coins');
    const streak = this.gameState.get('streak') || 0;
    const char = new Character(this.gameState.state);
    const stage = char.getStage();
    const nextStage = char.getNextStage();
    const xpProgress = char.getXPProgress();
    const xpPercent = Math.round((xpProgress.current / xpProgress.needed) * 100);
    const multiplier = getMultiplier(streak);
    const dailyDone = this.gameState.get('dailyChallengeDate') === new Date().toISOString().slice(0, 10);

    this.container.innerHTML = `
      <div class="aqw-screen aqw-home-screen">
        <header class="aqw-home-header">
          <div class="aqw-header-left">
            <div class="aqw-level-badge">
              <span class="aqw-level-label">Lv.</span>
              <span class="aqw-level-number">${level}</span>
            </div>
          </div>
          <div class="aqw-header-center">
            <div class="aqw-streak-badge ${streak > 0 ? 'aqw-active' : ''}">
              <img src="${iconStreak}" style="height:16px; mix-blend-mode:multiply;" class="aqw-streak-icon-img" />
              <span class="aqw-streak-count">${streak}日</span>
              ${multiplier > 1 ? `<span class="aqw-streak-multiplier">x${multiplier}</span>` : ''}
            </div>
          </div>
          <div class="aqw-header-right">
            <div class="aqw-coin-badge">
              <img src="${iconCoin}" style="height:16px; mix-blend-mode:multiply;" class="aqw-coin-icon-img" />
              <span class="aqw-coin-count">${coins}</span>
            </div>
          </div>
        </header>

        <div class="aqw-xp-bar-container">
          <div class="aqw-xp-bar">
            <div class="aqw-xp-fill" style="width: ${xpPercent}%"></div>
          </div>
          <span class="aqw-xp-text">${xpProgress.current} / ${xpProgress.needed} XP</span>
        </div>

        <div class="aqw-character-container aqw-home-character"></div>

        ${nextStage ? `
          <div class="aqw-evolution-hint">
            <img src="${iconSparkle}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" />
            <span class="aqw-hint-text">Lv.${nextStage.minLevel}で <strong>${nextStage.name}</strong><img src="${nextStage.img}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply; margin-left:4px;" /> に進化！</span>
          </div>
        ` : `
          <div class="aqw-evolution-hint aqw-max-evolution">
            <img src="${itemCrown}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" />
            <span class="aqw-hint-text">最終進化おめでとう！</span>
          </div>
        `}

        <div class="aqw-home-actions">
          <button class="aqw-action-btn aqw-quest-btn aqw-btn-go-quest">
            <img src="${iconBook}" style="height:22px; margin-bottom:2px;" class="aqw-action-icon-img" />
            <span class="aqw-action-text">クエストに出発！</span>
            <span class="aqw-action-sub">3問チャレンジ</span>
          </button>
          ${!dailyDone ? `
            <button class="aqw-action-btn aqw-daily-btn aqw-btn-go-daily">
              <img src="${iconSparkle}" style="height:22px; margin-bottom:2px;" class="aqw-action-icon-img" />
              <span class="aqw-action-text">今日の1問</span>
              <span class="aqw-action-sub">デイリーチャレンジ</span>
            </button>
          ` : ''}
        </div>

        <div class="aqw-home-message">
          <span class="aqw-message-bubble">${this.getMessage(stage)}</span>
        </div>
      </div>
    `;

    // Render character
    const charContainer = this.container.querySelector('.aqw-home-character');
    this.charView = new CharacterView(charContainer, this.gameState);
    this.charView.render();

    // Event listeners
    this.container.querySelector('.aqw-btn-go-quest')?.addEventListener('click', () => {
      this.onNavigate('quest');
    });
    this.container.querySelector('.aqw-btn-go-daily')?.addEventListener('click', () => {
      this.onNavigate('daily');
    });
  }

  getMessage(stage) {
    // Always happy messages (no hunger-based mood)
    const messages = {
      egg: ['わくわく…なかからコンコンしてるよ！', 'ぬくぬく…あたたかいね♪'],
      chick: ['ぴよぴよ！今日もがんばろう♪', 'AIってすごいね！もっと知りたい！'],
      kitten: ['にゃ〜ん♪ 一緒に学ぶの楽しいにゃ！', 'AIマスターに近づいてるにゃ'],
      bunny: ['ぴょん！今日もAI博士に一歩近づいたね！', 'すごいすごい！どんどん賢くなってるよ'],
      unicorn: ['キラキラ あなたはAIマスターの素質があるわ！', '一緒にもっと上を目指しましょう'],
    };

    const pool = messages[stage.id] || messages.egg;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  destroy() {
    if (this.charView) this.charView.destroy();
  }
}
