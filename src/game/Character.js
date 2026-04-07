// Character Evolution & Stats System
import imgRibbon from '../assets/item_ribbon.png';
import imgHat from '../assets/item_hat.png';
import imgGlasses from '../assets/item_glasses.png';
import imgCrown from '../assets/item_crown.png';
import imgFlower from '../assets/item_flower.png';
import imgStar from '../assets/item_star.png';

import eggImg from '../assets/char_egg.png';
import chickImg from '../assets/char_chick.png';
import kittenImg from '../assets/char_kitten.png';
import rabbitImg from '../assets/char_rabbit.png';
import unicornImg from '../assets/char_unicorn.png';

import iconBadge from '../assets/icon_badge.png';
import iconCheck from '../assets/icon_check.png';
import iconStreak from '../assets/icon_streak.png';
import iconEffort from '../assets/icon_effort.png';
import iconSparkle from '../assets/icon_sparkle.png';
import iconTrophy from '../assets/icon_trophy.png';
import iconBox from '../assets/icon_box.png';

import bgMeadow from '../assets/item_bg_meadow.png';
import bgNight from '../assets/item_bg_night.png';
import bgOcean from '../assets/item_bg_ocean.png';
import bgSakura from '../assets/item_bg_sakura.png';

export const EVOLUTION_STAGES = [
  {
    id: 'egg',
    name: 'たまごちゃん',
    emoji: '🥚',
    img: eggImg,
    minLevel: 1,
    maxLevel: 5,
    description: 'まだ生まれたばかり…やさしく育ててね',
    bodyColor: '#fef3e2',
    accentColor: '#f5d6a8',
  },
  {
    id: 'chick',
    name: 'ひよこちゃん',
    emoji: '🐣',
    img: chickImg,
    minLevel: 6,
    maxLevel: 10,
    description: 'ぴよぴよ！好奇心いっぱいだよ',
    bodyColor: '#fff9c4',
    accentColor: '#ffd54f',
  },
  {
    id: 'kitten',
    name: 'こねこちゃん',
    emoji: '🐱',
    img: kittenImg,
    minLevel: 11,
    maxLevel: 20,
    description: 'にゃ〜ん♪ 一緒に学ぼう！',
    bodyColor: '#ffe0e6',
    accentColor: '#f48fb1',
  },
  {
    id: 'bunny',
    name: 'うさぎちゃん',
    emoji: '🐰',
    img: rabbitImg,
    minLevel: 21,
    maxLevel: 35,
    description: 'ぴょんぴょん！どんどん賢くなってるね',
    bodyColor: '#e8f5e9',
    accentColor: '#81c784',
  },
  {
    id: 'unicorn',
    name: 'ユニコーン',
    emoji: '🦄',
    img: unicornImg,
    minLevel: 36,
    maxLevel: 999,
    description: 'すごい！AIマスターに近づいてるよ✨',
    bodyColor: '#ede7f6',
    accentColor: '#b39ddb',
  },
];

export const SHOP_ITEMS = [
  { id: 'ribbon', name: 'リボン', icon: '🎀', iconImg: imgRibbon, price: 50, type: 'accessory' },
  { id: 'hat', name: 'ぼうし', icon: '🎩', iconImg: imgHat, price: 80, type: 'accessory' },
  { id: 'glasses', name: 'メガネ', icon: '👓', iconImg: imgGlasses, price: 60, type: 'accessory' },
  { id: 'crown', name: 'おうかん', icon: '👑', iconImg: imgCrown, price: 150, type: 'accessory' },
  { id: 'flower', name: 'おはな', icon: '🌸', iconImg: imgFlower, price: 40, type: 'accessory' },
  { id: 'star', name: 'ほし', icon: '⭐', iconImg: imgStar, price: 100, type: 'accessory' },
  { id: 'heart', name: 'ハート', icon: '💖', iconImg: imgStar, price: 70, type: 'accessory' },
  { id: 'bow', name: 'ちょうネクタイ', icon: '🎀', iconImg: imgRibbon, price: 90, type: 'accessory' },
  { id: 'bg_meadow', name: 'おはな畑', icon: '🌷', iconImg: bgMeadow, price: 120, type: 'background' },
  { id: 'bg_night', name: 'ほしぞら', icon: '🌙', iconImg: bgNight, price: 120, type: 'background' },
  { id: 'bg_ocean', name: 'うみ', icon: '🌊', iconImg: bgOcean, price: 120, type: 'background' },
  { id: 'bg_sakura', name: 'さくら', icon: '🌸', iconImg: bgSakura, price: 150, type: 'background' },
];

export const BADGES = [
  { id: 'first_quest', name: 'はじめてのクエスト', icon: '🏅', iconImg: iconBadge, condition: 'Complete first quest' },
  { id: 'perfect', name: 'パーフェクト！', icon: '💯', iconImg: iconCheck, condition: 'Get all 3 correct' },
  { id: 'streak_3', name: '3日連続！', icon: '🔥', iconImg: iconStreak, condition: '3 day streak' },
  { id: 'streak_7', name: '7日連続！', icon: '💪', iconImg: iconEffort, condition: '7 day streak' },
  { id: 'streak_14', name: '14日連続！', icon: '🔥', iconImg: iconStreak, condition: '14 day streak' },
  { id: 'streak_30', name: '学びの達人ママ', icon: '👑', iconImg: iconTrophy, condition: '30 day streak' },
  { id: 'daily_7', name: 'デイリー7日', icon: '📅', iconImg: iconEffort, condition: '7 daily challenges' },
  { id: 'map_complete', name: '冒険マップ完了', icon: '🗺️', iconImg: iconTrophy, condition: 'Complete adventure map' },
  { id: 'level_10', name: 'レベル10到達', icon: '⭐', iconImg: iconSparkle, condition: 'Reach level 10' },
  { id: 'level_20', name: 'レベル20到達', icon: '🌟', iconImg: iconSparkle, condition: 'Reach level 20' },
  { id: 'all_categories', name: '全カテゴリ制覇', icon: '🏆', iconImg: iconTrophy, condition: 'Try all categories' },
  { id: 'collector', name: 'コレクター', icon: '👗', iconImg: iconBox, condition: 'Buy 5 items' },
  { id: 'evolution', name: 'はじめての進化', icon: '🦋', iconImg: iconSparkle, condition: 'First evolution' },
];

export class Character {
  constructor(state) {
    this.state = state;
  }

  getStage() {
    return EVOLUTION_STAGES.find(
      s => this.state.level >= s.minLevel && this.state.level <= s.maxLevel
    ) || EVOLUTION_STAGES[0];
  }

  getNextStage() {
    const currentIdx = EVOLUTION_STAGES.findIndex(
      s => this.state.level >= s.minLevel && this.state.level <= s.maxLevel
    );
    return EVOLUTION_STAGES[currentIdx + 1] || null;
  }

  addXP(amount) {
    const prevStage = this.getStage();
    this.state.xp += amount;
    const xpNeeded = this.getXPForLevel(this.state.level + 1);
    let evolved = false;
    while (this.state.xp >= xpNeeded) {
      this.state.xp -= xpNeeded;
      this.state.level++;
    }
    const newStage = this.getStage();
    if (prevStage.id !== newStage.id) {
      evolved = true;
    }
    return { evolved, newStage: this.getStage() };
  }

  getXPForLevel(level) {
    return Math.floor(30 + level * 10);
  }

  getXPProgress() {
    const needed = this.getXPForLevel(this.state.level + 1);
    return { current: this.state.xp, needed };
  }
}
