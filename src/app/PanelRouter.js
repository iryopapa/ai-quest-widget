import { HomeScreen } from '../screens/HomeScreen.js';
import { QuestScreen } from '../screens/QuestScreen.js';
import { ShopScreen } from '../screens/ShopScreen.js';
import { BookScreen } from '../screens/BookScreen.js';
import { AdventureMapScreen } from '../screens/AdventureMapScreen.js';
import { DailyChallengeScreen } from '../screens/DailyChallengeScreen.js';
import { Navigation } from '../components/Navigation.js';

export class PanelRouter {
  constructor(screenContainer, navContainer, gameState, audioManager, config) {
    this.screenContainer = screenContainer;
    this.navContainer = navContainer;
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.config = config;
    this.currentScreen = null;
    this.currentScreenName = '';

    this.nav = new Navigation(navContainer, (screen) => this.navigate(screen), gameState);
  }

  navigate(screenName) {
    if (this.currentScreen?.destroy) {
      this.currentScreen.destroy();
    }

    this.currentScreenName = screenName;
    this.screenContainer.innerHTML = '';

    // Screen transition animation
    this.screenContainer.classList.add('aqw-screen-enter');
    setTimeout(() => this.screenContainer.classList.remove('aqw-screen-enter'), 300);

    this.nav.render(screenName);

    const nav = (s) => this.navigate(s);

    switch (screenName) {
      case 'home':
        this.audioManager.playBgm('home');
        this.currentScreen = new HomeScreen(this.screenContainer, this.gameState, nav);
        break;
      case 'map':
        this.audioManager.playBgm('home');
        this.currentScreen = new AdventureMapScreen(this.screenContainer, this.gameState, nav, this.config);
        break;
      case 'quest':
        this.audioManager.playBgm('quest_select');
        this.currentScreen = new QuestScreen(this.screenContainer, this.gameState, nav, this.audioManager);
        break;
      case 'daily':
        this.audioManager.playBgm('quiz');
        this.currentScreen = new DailyChallengeScreen(this.screenContainer, this.gameState, nav);
        break;
      case 'shop':
        this.audioManager.playBgm('shop');
        this.currentScreen = new ShopScreen(this.screenContainer, this.gameState, nav);
        break;
      case 'book':
        this.audioManager.playBgm('book');
        this.currentScreen = new BookScreen(this.screenContainer, this.gameState, nav, this.config);
        break;
    }

    if (this.currentScreen) {
      this.currentScreen.render();
    }
  }
}
