// Home Screen - Widget version
// All classes prefixed with aqw-, all DOM queries use this.container.querySelector()
// No StatusBar, no hunger-based messages, streak display added
import { CharacterViewV2 as CharacterView } from '../v2/CharacterViewV2.js';
import { Character } from '../game/Character.js';
import { getMultiplier } from '../game/StreakSystem.js';

import iconStreak from '../assets/icon_streak.png';
import iconCoin from '../assets/icon_coin.png';
import iconBook from '../assets/icon_book.png';
import iconSparkle from '../assets/icon_sparkle.png';
import itemCrown from '../assets/item_crown.png';
import mapMountain from '../assets/map_mountain_clean.png';

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

    // Adventure map data
    const chapters = this.gameState._config?.chapters || (typeof window !== 'undefined' && window.AIQuestConfig?.chapters) || [];
    const completed = this.gameState.get('chaptersCompleted') || [];
    const total = chapters.length;
    const doneCount = completed.length;
    const mapPercent = total > 0 ? Math.round((doneCount / total) * 100) : 0;

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


        <div class="aqw-home-map-preview">
          <div class="aqw-mountain-card">
            <div class="aqw-mountain-card-header">
              <span class="aqw-mountain-card-title">🏔 冒険マップ</span>
              <span class="aqw-mountain-card-status">${doneCount}/${total} 合目</span>
            </div>
            <div class="aqw-mountain-card-img" style="background-image:url('${mapMountain}')">
              ${chapters.map((ch, i) => {
                const isDone = completed.includes(ch.id);
                const isCurrent = !isDone && (i === 0 || completed.includes(chapters[i - 1]?.id));
                return `<div class="aqw-mnode aqw-mnode-${i} ${isDone ? 'aqw-mnode-done' : ''} ${isCurrent ? 'aqw-mnode-current' : ''}">
                  <div class="aqw-mnode-dot">
                    ${isDone ? '✓' : isCurrent ? `<img src="${stage.img}" class="aqw-mnode-avatar" />` : ''}
                  </div>
                  ${isCurrent ? `<span class="aqw-mnode-label">${ch.title}</span>` : ''}
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Render character
    const charContainer = this.container.querySelector('.aqw-home-character');
    this.charView = new CharacterView(charContainer, this.gameState, { speechMessage: this.getMessage(stage) });
    this.charView.render();

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
