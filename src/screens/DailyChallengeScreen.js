// Daily Challenge Screen - Widget version
// All classes prefixed with aqw-, all DOM queries use this.container.querySelector()
import { DailyChallenge } from '../game/DailyChallenge.js';
import { getMultiplier } from '../game/StreakSystem.js';
import iconSuccess from '../assets/icon_success.png';
import iconEffort from '../assets/icon_effort.png';
import iconCoin from '../assets/icon_coin.png';
import iconStreak from '../assets/icon_streak.png';

export class DailyChallengeScreen {
  constructor(container, gameState, onNavigate) {
    this.container = container;
    this.gameState = gameState;
    this.onNavigate = onNavigate;
    this.daily = new DailyChallenge();
    this.answered = false;
    this.answerResult = null;
  }

  render() {
    if (!this.daily.isAvailableToday(this.gameState)) {
      this.renderCompleted();
    } else {
      this.renderChallenge();
    }
  }

  renderChallenge() {
    const q = this.daily.getQuestion(this.gameState);
    const streak = this.gameState.get('streak') || 0;
    const multiplier = getMultiplier(streak);

    this.container.innerHTML = `
      <div class="aqw-screen aqw-daily-screen">
        <div class="aqw-daily-header">
          <h2 class="aqw-daily-title">今日の1問</h2>
          ${streak > 0 ? `<div class="aqw-daily-streak"><img src="${iconStreak}" class="aqw-inline-icon" /> ${streak}日連続 コインx${multiplier}</div>` : ''}
        </div>
        <div class="aqw-daily-question">
          <p class="aqw-daily-q-text">${q.q}</p>
        </div>
        <div class="aqw-daily-choices">
          ${q.choices.map((choice, i) => `
            <button class="aqw-daily-choice" data-index="${i}">
              <span class="aqw-choice-letter">${['A', 'B', 'C', 'D'][i]}</span>
              <span class="aqw-choice-text">${choice}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    this.container.querySelectorAll('.aqw-daily-choice').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.answered) return;
        this.answered = true;
        const index = parseInt(btn.dataset.index);
        const result = this.daily.submitAnswer(index, q);
        this.answerResult = result;

        // Visual feedback
        btn.classList.add(result.correct ? 'aqw-correct' : 'aqw-wrong');
        if (!result.correct) {
          this.container.querySelector(`[data-index="${q.answer}"]`)?.classList.add('aqw-correct');
        }

        // Apply rewards
        this.daily.applyRewards(this.gameState, result.correct);

        setTimeout(() => this.renderResult(result, q), 1000);
      });
    });
  }

  renderResult(result, question) {
    const streak = this.gameState.get('streak') || 0;
    const multiplier = getMultiplier(streak);
    const baseXP = result.correct ? 15 : 10;
    const baseCoins = Math.floor((result.correct ? 10 : 5) * multiplier);

    this.container.innerHTML = `
      <div class="aqw-screen aqw-daily-screen">
        <div class="aqw-daily-result">
          <img src="${result.correct ? iconSuccess : iconEffort}" class="aqw-daily-result-icon" />
          <h3 class="aqw-daily-result-title ${result.correct ? 'aqw-correct' : ''}">${result.correct ? 'せいかい！' : 'おしい！'}</h3>
          <div class="aqw-daily-rewards">
            <span>+${baseXP} XP</span>
            <span>+${baseCoins} <img src="${iconCoin}" class="aqw-inline-icon" /></span>
          </div>
          <div class="aqw-daily-explanation">${result.explanation}</div>
          <div class="aqw-daily-streak-info">
            <img src="${iconStreak}" class="aqw-inline-icon" />
            <span>${streak}日連続！ コインx${multiplier}</span>
          </div>
          <button class="aqw-btn aqw-btn-primary aqw-daily-done">ホームに戻る</button>
        </div>
      </div>
    `;

    this.container.querySelector('.aqw-daily-done')?.addEventListener('click', () => this.onNavigate('home'));
  }

  renderCompleted() {
    const streak = this.gameState.get('streak') || 0;
    const multiplier = getMultiplier(streak);

    this.container.innerHTML = `
      <div class="aqw-screen aqw-daily-screen">
        <div class="aqw-daily-done-wrap">
          <div class="aqw-daily-done-icon">
            <img src="${iconSuccess}" class="aqw-inline-icon" style="height:48px;" />
          </div>
          <h3 class="aqw-daily-done-title">今日のチャレンジ完了！</h3>
          <div class="aqw-daily-streak-info">
            <img src="${iconStreak}" class="aqw-inline-icon" />
            <span>${streak}日連続！ コインx${multiplier}</span>
          </div>
          <p class="aqw-daily-comeback">明日もチャレンジしよう！</p>
          <button class="aqw-btn aqw-btn-primary aqw-daily-home">ホームに戻る</button>
        </div>
      </div>
    `;

    this.container.querySelector('.aqw-daily-home')?.addEventListener('click', () => this.onNavigate('home'));
  }

  destroy() {}
}
