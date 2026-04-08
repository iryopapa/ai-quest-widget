import { GameState } from '../game/GameState.js';
import { AudioManager } from '../game/AudioManager.js';
import { FloatingCharacter } from './FloatingCharacter.js';
import { PanelRouter } from './PanelRouter.js';
import { Notification } from '../components/Notification.js';
import { HostIntegration } from '../api/HostIntegration.js';
import { Character } from '../game/Character.js';

export class WidgetApp {
  constructor(root, shadowRoot, config) {
    this.root = root;
    this.shadowRoot = shadowRoot;
    this.config = config;
    this.gameState = new GameState();
    this.audioManager = new AudioManager(import.meta.env.BASE_URL || '/', shadowRoot);
    this.isPanelOpen = false;

    // Initialize if first time
    if (!this.gameState.hasData()) {
      this.gameState.update({ initialized: true });
    }

    this.setupDOM();
    this.notification = new Notification(this.root);
    this.floatingChar = new FloatingCharacter(this.floatingContainer, this.gameState, () => this.togglePanel());
    this.panelRouter = new PanelRouter(this.screenContainer, this.navContainer, this.gameState, this.audioManager, this.config);
    this.hostIntegration = new HostIntegration(this);
  }

  setupDOM() {
    this.root.innerHTML = `
      <div class="aqw-floating-container"></div>
      <div class="aqw-panel">
        <div class="aqw-panel-header">
          <span class="aqw-panel-title">AI Quest</span>
          <button class="aqw-panel-close">AI講座にもどる ▸</button>
        </div>
        <div class="aqw-screen-container"></div>
        <div class="aqw-nav-container"></div>
      </div>
    `;
    this.floatingContainer = this.root.querySelector('.aqw-floating-container');
    this.panelEl = this.root.querySelector('.aqw-panel');
    this.screenContainer = this.root.querySelector('.aqw-screen-container');
    this.navContainer = this.root.querySelector('.aqw-nav-container');

    this.root.querySelector('.aqw-panel-close').addEventListener('click', () => this.closePanel());

    // Prevent pull-to-refresh on mobile (only block overscroll at top)
    let startY = 0;
    this.screenContainer.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    }, { passive: true });
    this.screenContainer.addEventListener('touchmove', (e) => {
      const currentY = e.touches[0].clientY;
      const isScrollingDown = currentY > startY;
      if (isScrollingDown && this.screenContainer.scrollTop <= 0) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  openPanel() {
    this.isPanelOpen = true;
    this.panelEl.classList.add('aqw-open');
    this.floatingContainer.style.display = 'none';
    this.panelRouter.navigate('home');
  }

  closePanel() {
    this.isPanelOpen = false;
    this.panelEl.classList.remove('aqw-open');
    this.floatingContainer.style.display = '';
    this.audioManager.stopBgm();
    if (this.panelRouter.currentScreen?.destroy) {
      this.panelRouter.currentScreen.destroy();
    }
  }

  togglePanel() {
    if (this.isPanelOpen) this.closePanel();
    else this.openPanel();
  }

  awardXP(amount) {
    const char = new Character(this.gameState.state);
    const result = char.addXP(amount);
    this.gameState.update({ level: char.state.level, xp: char.state.xp });

    if (result.evolved) {
      this.gameState.addBadge('evolution');
      this.notification.show(`\u9032\u5316\uFF01${result.newStage.name}\u306B\u306A\u308A\u307E\u3057\u305F\uFF01`, 'levelup');
    }

    return result;
  }

  awardCoins(amount) {
    const multiplier = this.gameState.getStreakMultiplier();
    const actual = Math.floor(amount * multiplier);
    this.gameState.update({ coins: this.gameState.get('coins') + actual });
    return actual;
  }

  configure(config) {
    Object.assign(this.config, config);
    if (this.panelRouter) this.panelRouter.config = this.config;
  }
}
