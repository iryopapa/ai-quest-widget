// Game State Management with LocalStorage persistence
const STORAGE_KEY = 'ai-quest-widget-save';

const DEFAULT_STATE = {
  // Character
  name: 'AIペット',
  level: 1,
  xp: 0,
  coins: 0,

  // Progression
  totalQuests: 0,
  totalCorrect: 0,
  streak: 0,
  lastPlayDate: null,
  categoriesPlayed: [],
  badges: [],

  // Shop
  ownedItems: [],
  equippedItems: [],
  equippedBackground: null,

  // Settings
  soundEnabled: false, // default muted for widget
  initialized: false,

  // Widget-specific fields
  dailyChallengeDate: null,
  dailyChallengeStreak: 0,
  chaptersCompleted: [],
  adventureMapProgress: {},
  totalVideos: 0,
  totalTexts: 0,
  lastStreakDate: null,
};

export class GameState {
  constructor() {
    this.state = this.load();
    this.listeners = [];
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_STATE, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load save:', e);
    }
    return { ...DEFAULT_STATE };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save:', e);
    }
  }

  get(key) {
    return this.state[key];
  }

  set(key, value) {
    this.state[key] = value;
    this.save();
    this.notify();
  }

  update(partial) {
    Object.assign(this.state, partial);
    this.save();
    this.notify();
  }

  reset() {
    this.state = { ...DEFAULT_STATE };
    this.save();
    this.notify();
  }

  subscribe(fn) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  isNewDay() {
    const today = new Date().toDateString();
    return this.state.lastPlayDate !== today;
  }

  updateStreak() {
    const today = new Date().toDateString();
    const lastPlay = this.state.lastPlayDate;

    if (!lastPlay) {
      this.state.streak = 1;
    } else {
      const last = new Date(lastPlay);
      const now = new Date();
      const diff = Math.floor((now - last) / (1000 * 60 * 60 * 24));
      if (diff === 1) {
        this.state.streak++;
      } else if (diff > 1) {
        this.state.streak = 1;
      }
    }
    this.state.lastPlayDate = today;
    this.save();
  }

  getStreakMultiplier() {
    const days = this.state.streak || 0;
    if (days >= 30) return 2.5;
    if (days >= 14) return 2.0;
    if (days >= 7) return 1.5;
    if (days >= 3) return 1.2;
    return 1.0;
  }

  addBadge(badgeId) {
    if (!this.state.badges.includes(badgeId)) {
      this.state.badges.push(badgeId);
      this.save();
      return true;
    }
    return false;
  }

  addCategory(categoryId) {
    if (!this.state.categoriesPlayed.includes(categoryId)) {
      this.state.categoriesPlayed.push(categoryId);
      this.save();
    }
  }

  buyItem(itemId, price) {
    if (this.state.coins >= price && !this.state.ownedItems.includes(itemId)) {
      this.state.coins -= price;
      this.state.ownedItems.push(itemId);
      this.save();
      return true;
    }
    return false;
  }

  equipItem(itemId, type) {
    if (type === 'background') {
      this.state.equippedBackground = itemId;
    } else {
      if (this.state.equippedItems.includes(itemId)) {
        this.state.equippedItems = this.state.equippedItems.filter(i => i !== itemId);
      } else {
        // Max 3 accessories
        if (this.state.equippedItems.length >= 3) {
          this.state.equippedItems.shift();
        }
        this.state.equippedItems.push(itemId);
      }
    }
    this.save();
  }

  hasData() {
    return this.state.initialized;
  }
}
