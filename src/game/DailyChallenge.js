import { QUESTIONS } from './Quiz.js';
import { getMultiplier } from './StreakSystem.js';

export class DailyChallenge {
  isAvailableToday(gameState) {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    return gameState.get('dailyChallengeDate') !== today;
  }

  getQuestion(gameState) {
    // Collect all questions from all categories
    const allQuestions = [];
    for (const [categoryId, questions] of Object.entries(QUESTIONS)) {
      for (const q of questions) {
        allQuestions.push({ ...q, category: categoryId });
      }
    }

    // Date-based seed so the same question appears all day
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % allQuestions.length;
    const question = { ...allQuestions[index] };

    // Shuffle choices using date-based deterministic shuffle
    const indices = question.choices.map((_, i) => i);
    let s = seed;
    for (let i = indices.length - 1; i > 0; i--) {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      const j = s % (i + 1);
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    return {
      ...question,
      choices: indices.map(i => question.choices[i]),
      answer: indices.indexOf(question.answer),
    };
  }

  submitAnswer(choiceIndex, question) {
    const correct = choiceIndex === question.answer;
    return { correct, explanation: question.explanation };
  }

  applyRewards(gameState, correct) {
    const multiplier = getMultiplier(gameState.get('streak') || 0);

    // Base rewards: +10 XP, +5 coins (x streak multiplier)
    let xpGain = Math.floor(10 * multiplier);
    let coinGain = Math.floor(5 * multiplier);

    // Bonus for correct answer: +5 XP, +5 coins (x multiplier)
    if (correct) {
      xpGain += Math.floor(5 * multiplier);
      coinGain += Math.floor(5 * multiplier);
    }

    const today = new Date().toISOString().slice(0, 10);
    const currentStreak = (gameState.get('dailyChallengeStreak') || 0) + 1;

    gameState.update({
      xp: (gameState.get('xp') || 0) + xpGain,
      coins: (gameState.get('coins') || 0) + coinGain,
      dailyChallengeDate: today,
      dailyChallengeStreak: currentStreak,
    });

    // Update the play streak as well
    gameState.updateStreak();

    return { xpGain, coinGain, multiplier, dailyChallengeStreak: currentStreak };
  }
}
