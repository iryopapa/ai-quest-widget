// Streak tracking pure logic module

export function checkAndUpdateStreak(gameState) {
  const today = new Date().toDateString();
  const lastPlay = gameState.get('lastPlayDate');
  let streak = gameState.get('streak') || 0;
  let isNewDay = false;
  let milestone = null;

  if (!lastPlay) {
    // First time playing
    streak = 1;
    isNewDay = true;
  } else if (lastPlay === today) {
    // Same day, no change
    isNewDay = false;
  } else {
    const last = new Date(lastPlay);
    const now = new Date();
    const diff = Math.floor((now - last) / (1000 * 60 * 60 * 24));
    if (diff === 1) {
      // Consecutive day
      streak++;
    } else {
      // Gap > 1 day, reset
      streak = 1;
    }
    isNewDay = true;
  }

  if (isNewDay) {
    milestone = getMilestoneMessage(streak);
    gameState.update({
      streak,
      lastPlayDate: today,
      lastStreakDate: today,
    });
  }

  return { streak, isNewDay, milestone };
}

export function getMultiplier(streakDays) {
  if (streakDays >= 30) return 2.5;
  if (streakDays >= 14) return 2.0;
  if (streakDays >= 7) return 1.5;
  if (streakDays >= 3) return 1.2;
  return 1.0;
}

export function getMilestoneMessage(streakDays) {
  if (streakDays === 30) return '30日連続達成！学びの達人ママ！';
  if (streakDays === 14) return '14日連続！すごい継続力！';
  if (streakDays === 7) return '7日連続達成！1週間がんばったね！';
  if (streakDays === 3) return '3日連続！いい調子！';
  return null;
}
