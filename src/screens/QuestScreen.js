// Quest Screen - Quiz gameplay
// Widget version: all classes prefixed with aqw-, all DOM queries use this.container.querySelector()
// No hunger/energy/mood, streak multiplier on coins, audioManager passed via constructor
import { Quiz, CATEGORIES } from '../game/Quiz.js';
import { Character } from '../game/Character.js';

import iconSuccess from '../assets/icon_success.png';
import iconEffort from '../assets/icon_effort.png';
import iconCoin from '../assets/icon_coin.png';
import iconTrophy from '../assets/icon_trophy.png';
import iconNext from '../assets/icon_next.png';
import iconSparkle from '../assets/icon_sparkle.png';
import iconNavHome from '../assets/icon_nav_home.png';
import iconBook from '../assets/icon_book.png';
import iconBack from '../assets/icon_back.png';

export class QuestScreen {
  constructor(container, gameState, onNavigate, audioManager) {
    this.container = container;
    this.gameState = gameState;
    this.onNavigate = onNavigate;
    this.audioManager = audioManager;
    this.quiz = new Quiz();
    this.phase = 'select'; // select, quiz, result, summary
    this.answerResult = null;
    this.answered = false;
  }

  render() {
    switch (this.phase) {
      case 'select':
        this.renderCategorySelect();
        break;
      case 'quiz':
        this.renderQuestion();
        break;
      case 'result':
        this.renderAnswerResult();
        break;
      case 'summary':
        this.renderSummary();
        break;
    }
  }

  renderCategorySelect() {
    this.container.innerHTML = `
      <div class="aqw-screen aqw-quest-screen">
        <header class="aqw-screen-header">
          <button class="aqw-back-btn aqw-btn-back-home">
            <img src="${iconBack}" style="height:16px; mix-blend-mode:multiply;" />
          </button>
          <h2 class="aqw-screen-title"><img src="${iconBook}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> クエスト選択</h2>
          <div class="aqw-spacer"></div>
        </header>

        <div class="aqw-quest-intro">
          <p class="aqw-quest-intro-text">どのカテゴリに挑戦する？<br>3問のクイズに答えてXPをゲットしよう！</p>
        </div>

        <div class="aqw-category-grid">
          ${CATEGORIES.map(cat => `
            <button class="aqw-category-card" data-category="${cat.id}" style="--cat-color: ${cat.color}">
              <img src="${cat.iconImg}" class="aqw-cat-icon-img" style="height:48px; margin-bottom:8px; mix-blend-mode:multiply;" />
              <span class="aqw-cat-name">${cat.name}</span>
              <span class="aqw-cat-badge">3問</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    this.container.querySelector('.aqw-btn-back-home')?.addEventListener('click', () => this.onNavigate('home'));
    this.container.querySelectorAll('.aqw-category-card').forEach(card => {
      card.addEventListener('click', () => {
        const catId = card.dataset.category;
        this.quiz.startQuest(catId);
        this.gameState.addCategory(catId);
        this.phase = 'quiz';
        if (this.audioManager) this.audioManager.playBgm('quiz');
        this.answered = false;
        this.render();
      });
    });
  }

  renderQuestion() {
    const q = this.quiz.getCurrentQuestion();
    const progress = this.quiz.currentIndex + 1;
    const total = this.quiz.currentQuestions.length;
    const cat = CATEGORIES.find(c => c.id === this.quiz.currentCategory);

    this.container.innerHTML = `
      <div class="aqw-screen aqw-quest-screen aqw-quiz-active">
        <header class="aqw-quiz-header" style="--cat-color: ${cat.color}">
          <div class="aqw-quiz-progress">
            <div class="aqw-quiz-progress-bar">
              <div class="aqw-quiz-progress-fill" style="width: ${(progress / total) * 100}%"></div>
            </div>
            <span class="aqw-quiz-progress-text">${progress} / ${total}</span>
          </div>
          <div class="aqw-quiz-category-badge">
            <img src="${cat.iconImg}" style="height:20px; mix-blend-mode:multiply; vertical-align:middle; margin-right:4px;" /> ${cat.name}
          </div>
        </header>

        <div class="aqw-quiz-content">
          <div class="aqw-question-card">
            <p class="aqw-question-text">${q.q}</p>
          </div>

          <div class="aqw-choices-container">
            ${q.choices.map((choice, i) => `
              <button class="aqw-choice-btn" data-index="${i}">
                <span class="aqw-choice-letter">${['A', 'B', 'C', 'D'][i]}</span>
                <span class="aqw-choice-text">${choice}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.container.querySelectorAll('.aqw-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.answered) return;
        this.answered = true;
        const index = parseInt(btn.dataset.index);
        this.answerResult = this.quiz.answerQuestion(index);

        // Visual feedback
        const correctIdx = this.quiz.currentQuestions[this.quiz.currentIndex - 1].answer;
        btn.classList.add(this.answerResult.correct ? 'aqw-correct' : 'aqw-wrong');
        if (!this.answerResult.correct) {
          this.container.querySelector(`[data-index="${correctIdx}"]`)?.classList.add('aqw-correct');
        }

        setTimeout(() => {
          this.phase = 'result';
          this.render();
        }, 800);
      });
    });
  }

  renderAnswerResult() {
    const result = this.answerResult;
    const isFinished = this.quiz.isFinished();

    this.container.innerHTML = `
      <div class="aqw-screen aqw-quest-screen aqw-result-screen">
        <div class="aqw-result-content">
          <div class="aqw-result-icon ${result.correct ? 'aqw-correct' : 'aqw-wrong'}">
            <img src="${result.correct ? iconSuccess : iconEffort}" style="height:64px; mix-blend-mode:multiply;" />
          </div>
          <h3 class="aqw-result-title ${result.correct ? 'aqw-correct' : 'aqw-wrong'}">
            ${result.correct ? 'せいかい！' : 'おしい！'}
          </h3>

          ${result.correct ? `
            <div class="aqw-result-rewards">
              <span class="aqw-reward-item">+15 XP</span>
              <span class="aqw-reward-item">+10 <img src="${iconCoin}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /></span>
            </div>
          ` : `
            <div class="aqw-result-rewards">
              <span class="aqw-reward-item">+5 XP</span>
            </div>
          `}

          <div class="aqw-explanation-box">
            <p class="aqw-explanation-text">${result.explanation}</p>
          </div>

          <button class="aqw-btn aqw-btn-primary aqw-btn-lg aqw-btn-next">
            ${isFinished ? `<img src="${iconTrophy}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> 結果を見る` : `<img src="${iconNext}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> つぎの問題へ`}
          </button>
        </div>
      </div>
    `;

    this.container.querySelector('.aqw-btn-next')?.addEventListener('click', () => {
      if (isFinished) {
        this.phase = 'summary';
        if (this.audioManager) this.audioManager.playBgm('result');
        this.applyRewards();
        this.render();
      } else {
        this.phase = 'quiz';
        this.answered = false;
        this.render();
      }
    });
  }

  applyRewards() {
    const results = this.quiz.getResults();
    const char = new Character(this.gameState.state);

    let totalXP = 0;
    let totalCoins = 0;
    results.results.forEach(r => {
      if (r.correct) {
        totalXP += 15;
        totalCoins += 10;
      } else {
        totalXP += 5;
      }
    });

    // Bonus for perfect
    if (results.correct === results.total) {
      totalXP += 10;
      totalCoins += 15;
      this.gameState.addBadge('perfect');
    }

    // Apply streak multiplier to coins
    const multiplier = this.gameState.getStreakMultiplier();
    totalCoins = Math.floor(totalCoins * multiplier);

    const evolved = char.addXP(totalXP);

    this.gameState.update({
      level: char.state.level,
      xp: char.state.xp,
      coins: this.gameState.get('coins') + totalCoins,
      totalQuests: this.gameState.get('totalQuests') + 1,
      totalCorrect: this.gameState.get('totalCorrect') + results.correct,
    });

    this.gameState.updateStreak();

    // Check badges
    if (this.gameState.get('totalQuests') === 1) {
      this.gameState.addBadge('first_quest');
    }
    if (this.gameState.get('streak') >= 3) {
      this.gameState.addBadge('streak_3');
    }
    if (this.gameState.get('streak') >= 7) {
      this.gameState.addBadge('streak_7');
    }
    if (this.gameState.get('streak') >= 14) {
      this.gameState.addBadge('streak_14');
    }
    if (this.gameState.get('streak') >= 30) {
      this.gameState.addBadge('streak_30');
    }
    if (this.gameState.get('level') >= 10) {
      this.gameState.addBadge('level_10');
    }
    if (this.gameState.get('level') >= 20) {
      this.gameState.addBadge('level_20');
    }
    if (this.gameState.get('categoriesPlayed').length >= 4) {
      this.gameState.addBadge('all_categories');
    }
    if (evolved.evolved) {
      this.gameState.addBadge('evolution');
    }

    this._questResults = {
      ...results,
      totalXP,
      totalCoins,
      evolved: evolved.evolved,
      newStage: evolved.newStage,
    };
  }

  renderSummary() {
    const r = this._questResults;
    const cat = CATEGORIES.find(c => c.id === r.category);
    const multiplier = this.gameState.getStreakMultiplier();

    this.container.innerHTML = `
      <div class="aqw-screen aqw-quest-screen aqw-summary-screen">
        <div class="aqw-summary-content">
          <h2 class="aqw-summary-title"><img src="${iconTrophy}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> クエスト完了！</h2>

          <div class="aqw-summary-category">
            <img src="${cat.iconImg}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> ${cat.name}
          </div>

          <div class="aqw-summary-score">
            <div class="aqw-score-circle">
              <span class="aqw-score-number">${r.correct}</span>
              <span class="aqw-score-total">/ ${r.total}</span>
            </div>
            <p class="aqw-score-label">${r.correct === r.total ? `パーフェクト！<img src="${iconSuccess}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" />` : r.correct >= 2 ? `すごい！<img src="${iconEffort}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" />` : 'つぎはがんばろう！'}</p>
          </div>

          <div class="aqw-summary-rewards">
            <div class="aqw-reward-row">
              <span class="aqw-reward-label">獲得XP</span>
              <span class="aqw-reward-value">+${r.totalXP} XP</span>
            </div>
            <div class="aqw-reward-row">
              <span class="aqw-reward-label">獲得コイン</span>
              <span class="aqw-reward-value">+${r.totalCoins} <img src="${iconCoin}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /></span>
            </div>
            ${multiplier > 1 ? `
              <div class="aqw-reward-row aqw-bonus">
                <span class="aqw-reward-label">ストリークボーナス</span>
                <span class="aqw-reward-value">x${multiplier}</span>
              </div>
            ` : ''}
            ${r.correct === r.total ? `
              <div class="aqw-reward-row aqw-bonus">
                <span class="aqw-reward-label">パーフェクトボーナス</span>
                <span class="aqw-reward-value">+10 XP +15 <img src="${iconCoin}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /></span>
              </div>
            ` : ''}
          </div>

          ${r.evolved ? `
            <div class="aqw-evolution-announcement">
              <div class="aqw-evolution-sparkles">
                <img src="${iconSparkle}" style="height:24px; mix-blend-mode:multiply;" />
                <img src="${iconSparkle}" style="height:32px; mix-blend-mode:multiply;" />
                <img src="${iconSparkle}" style="height:24px; mix-blend-mode:multiply;" />
              </div>
              <h3 class="aqw-evolution-title"><img src="${iconSuccess}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> 進化しました！</h3>
              <p class="aqw-evolution-name"><img src="${r.newStage.img}" style="height:48px; vertical-align:middle; mix-blend-mode:multiply;" /> ${r.newStage.name}</p>
              <p class="aqw-evolution-desc">${r.newStage.description}</p>
            </div>
          ` : ''}

          <div class="aqw-summary-actions">
            <button class="aqw-btn aqw-btn-primary aqw-btn-lg aqw-btn-back-home-summary">
              <img src="${iconNavHome}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> ホームに戻る
            </button>
            <button class="aqw-btn aqw-btn-secondary aqw-btn-md aqw-btn-another-quest">
              <img src="${iconBook}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> もう一回チャレンジ
            </button>
          </div>
        </div>
      </div>
    `;

    this.container.querySelector('.aqw-btn-back-home-summary')?.addEventListener('click', () => {
      this.onNavigate('home');
    });
    this.container.querySelector('.aqw-btn-another-quest')?.addEventListener('click', () => {
      this.phase = 'select';
      if (this.audioManager) this.audioManager.playBgm('quest_select');
      this.render();
    });
  }

  destroy() {
    // Cleanup if needed
  }
}
