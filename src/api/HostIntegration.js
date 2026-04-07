import { checkAndUpdateStreak, getMilestoneMessage } from '../game/StreakSystem.js';

export class HostIntegration {
  constructor(widgetApp) {
    this.app = widgetApp;
  }

  onVideoComplete() {
    const result = this.app.awardXP(20);
    const coins = this.app.awardCoins(5);
    this.app.gameState.update({ totalVideos: this.app.gameState.get('totalVideos') + 1 });
    this.app.notification.show(`+20 XP, +${coins} \u30B3\u30A4\u30F3`, 'xp');
    this.app.floatingChar.playReaction();
    this._checkStreak();
  }

  onTextComplete() {
    const result = this.app.awardXP(10);
    const coins = this.app.awardCoins(3);
    this.app.gameState.update({ totalTexts: this.app.gameState.get('totalTexts') + 1 });
    this.app.notification.show(`+10 XP, +${coins} \u30B3\u30A4\u30F3`, 'xp');
    this.app.floatingChar.playReaction();
    this._checkStreak();
  }

  onQuizPass(isPerfect = false) {
    const xp = isPerfect ? 50 : 30;
    const coinBase = isPerfect ? 25 : 15;
    const result = this.app.awardXP(xp);
    const coins = this.app.awardCoins(coinBase);
    this.app.notification.show(`+${xp} XP, +${coins} \u30B3\u30A4\u30F3${isPerfect ? ' \u30D1\u30FC\u30D5\u30A7\u30AF\u30C8\uFF01' : ''}`, 'xp');
    this.app.floatingChar.playReaction();
    this._checkStreak();
  }

  onChapterComplete(chapterId) {
    const chapters = this.app.gameState.get('chaptersCompleted') || [];
    if (!chapters.includes(chapterId)) {
      chapters.push(chapterId);
      this.app.gameState.update({ chaptersCompleted: chapters });
    }
    const result = this.app.awardXP(100);
    const coins = this.app.awardCoins(50);
    this.app.notification.show(`\u7AE0\u30AF\u30EA\u30A2\uFF01+100 XP, +${coins} \u30B3\u30A4\u30F3`, 'chapter');
    this.app.floatingChar.playReaction();

    // Check map complete badge
    const configChapters = this.app.config.chapters || [];
    if (configChapters.length > 0 && chapters.length >= configChapters.length) {
      this.app.gameState.addBadge('map_complete');
      this.app.notification.show('\u5192\u967A\u30DE\u30C3\u30D7\u5B8C\u4E86\uFF01', 'levelup');
    }

    this._checkStreak();
  }

  _checkStreak() {
    const result = checkAndUpdateStreak(this.app.gameState);
    if (result.isNewDay) {
      const milestone = getMilestoneMessage(result.streak);
      if (milestone) {
        this.app.notification.show(milestone, 'streak');
      }
    }
  }
}
