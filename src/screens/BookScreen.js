// Book Screen - Widget version
// All classes prefixed with aqw-, all DOM queries use this.container.querySelector()
// No data reset button, added stats for totalVideos, totalTexts, dailyChallengeStreak, adventure map progress
import { BADGES, EVOLUTION_STAGES } from '../game/Character.js';
import iconBook from '../assets/icon_book.png';
import iconCheck from '../assets/icon_check.png';
import iconEffort from '../assets/icon_effort.png';
import iconStreak from '../assets/icon_streak.png';
import iconBadge from '../assets/icon_badge.png';
import iconLocked from '../assets/icon_locked.png';
import iconBack from '../assets/icon_back.png';

export class BookScreen {
  constructor(container, gameState, onNavigate, config) {
    this.container = container;
    this.gameState = gameState;
    this.onNavigate = onNavigate;
    this.config = config;
  }

  render() {
    const level = this.gameState.get('level');
    const totalQuests = this.gameState.get('totalQuests');
    const totalCorrect = this.gameState.get('totalCorrect');
    const streak = this.gameState.get('streak') || 0;
    const badges = this.gameState.get('badges') || [];
    const categoriesPlayed = this.gameState.get('categoriesPlayed') || [];
    const totalVideos = this.gameState.get('totalVideos') || 0;
    const totalTexts = this.gameState.get('totalTexts') || 0;
    const dailyChallengeStreak = this.gameState.get('dailyChallengeStreak') || 0;

    // Adventure map progress
    const chapters = this.config?.chapters || [];
    const chaptersCompleted = this.gameState.get('chaptersCompleted') || [];
    const mapTotal = chapters.length;
    const mapDone = chaptersCompleted.length;
    const mapPercent = mapTotal > 0 ? Math.round((mapDone / mapTotal) * 100) : 0;

    const stage = EVOLUTION_STAGES.find(
      s => level >= s.minLevel && level <= s.maxLevel
    ) || EVOLUTION_STAGES[0];

    const accuracy = totalQuests > 0
      ? Math.round((totalCorrect / (totalQuests * 3)) * 100)
      : 0;

    this.container.innerHTML = `
      <div class="aqw-screen aqw-book-screen">
        <header class="aqw-screen-header">
          <button class="aqw-back-btn aqw-btn-back-book">
            <img src="${iconBack}" style="height:16px; mix-blend-mode:multiply;" />
          </button>
          <h2 class="aqw-screen-title"><img src="${iconBook}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> 学習きろく</h2>
          <div class="aqw-spacer"></div>
        </header>

        <div class="aqw-book-stats">
          <div class="aqw-stat-card">
            <img src="${iconBook}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${totalQuests}</span>
            <span class="aqw-stat-label">クエスト数</span>
          </div>
          <div class="aqw-stat-card">
            <img src="${iconCheck}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${totalCorrect}</span>
            <span class="aqw-stat-label">正解数</span>
          </div>
          <div class="aqw-stat-card">
            <img src="${iconEffort}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${accuracy}%</span>
            <span class="aqw-stat-label">正答率</span>
          </div>
          <div class="aqw-stat-card">
            <img src="${iconStreak}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${streak}</span>
            <span class="aqw-stat-label">連続日数</span>
          </div>
        </div>

        <div class="aqw-book-stats aqw-book-stats-extra">
          <div class="aqw-stat-card">
            <span class="aqw-stat-value">${totalVideos}</span>
            <span class="aqw-stat-label">動画視聴</span>
          </div>
          <div class="aqw-stat-card">
            <span class="aqw-stat-value">${totalTexts}</span>
            <span class="aqw-stat-label">テキスト読了</span>
          </div>
          <div class="aqw-stat-card">
            <span class="aqw-stat-value">${dailyChallengeStreak}</span>
            <span class="aqw-stat-label">デイリー連続</span>
          </div>
          ${mapTotal > 0 ? `
            <div class="aqw-stat-card">
              <span class="aqw-stat-value">${mapPercent}%</span>
              <span class="aqw-stat-label">マップ進捗</span>
            </div>
          ` : ''}
        </div>

        <div class="aqw-book-section">
          <h3 class="aqw-section-title">進化ずかん</h3>
          <div class="aqw-evolution-gallery">
            ${EVOLUTION_STAGES.map((s, i) => {
              const unlocked = level >= s.minLevel;
              return `
                <div class="aqw-evolution-card ${unlocked ? 'aqw-unlocked' : 'aqw-locked'}">
                  ${unlocked ? `<img src="${s.img}" class="aqw-evo-img" style="height:60px; object-fit:contain; mix-blend-mode:multiply; margin-bottom:8px;" />` : `<span class="aqw-evo-emoji">?</span>`}
                  <span class="aqw-evo-name">${unlocked ? s.name : '???'}</span>
                  <span class="aqw-evo-level">${unlocked ? `Lv.${s.minLevel}` : `Lv.${s.minLevel}で解放`}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="aqw-book-section">
          <h3 class="aqw-section-title"><img src="${iconBadge}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> バッジコレクション</h3>
          <div class="aqw-badge-grid">
            ${BADGES.map(badge => {
              const earned = badges.includes(badge.id);
              return `
                <div class="aqw-badge-card ${earned ? 'aqw-earned' : 'aqw-locked'}" title="${badge.condition}">
                  ${earned
                    ? `<img src="${badge.iconImg}" style="height:32px; mix-blend-mode:multiply;" />`
                    : `<img src="${iconLocked}" style="height:32px; mix-blend-mode:multiply; opacity:0.5;" />`
                  }
                  <span class="aqw-badge-name">${earned ? badge.name : '???'}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>
    `;

    this.container.querySelector('.aqw-btn-back-book')?.addEventListener('click', () => this.onNavigate('home'));
  }

  destroy() {}
}
