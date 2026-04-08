// Navigation Component - 6-tab bottom nav
// Widget version: all classes prefixed with aqw-
import iconHome from '../assets/icon_nav_home.png';
import iconQuest from '../assets/icon_nav_quest.png';
import iconShop from '../assets/icon_nav_shop.png';
import iconBook from '../assets/icon_nav_book.png';
import iconSparkle from '../assets/icon_sparkle.png';
import iconBookNav from '../assets/icon_book.png';

export class Navigation {
  constructor(container, onNavigate, gameState) {
    this.container = container;
    this.onNavigate = onNavigate;
    this.gameState = gameState;
    this.activeTab = 'home';
  }

  render(activeTab) {
    this.activeTab = activeTab || this.activeTab;
    const dailyDone = this.gameState.get('dailyChallengeDate') === new Date().toISOString().slice(0, 10);

    this.container.innerHTML = `
      <nav class="aqw-bottom-nav">
        <button class="aqw-nav-btn ${this.activeTab === 'home' ? 'aqw-active' : ''}" data-screen="home">
          <img src="${iconHome}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">ホーム</span>
        </button>
        <button class="aqw-nav-btn ${this.activeTab === 'quest' ? 'aqw-active' : ''}" data-screen="quest">
          <img src="${iconBookNav}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">クエスト</span>
        </button>
        <button class="aqw-nav-btn ${this.activeTab === 'daily' ? 'aqw-active' : ''}" data-screen="daily">
          <img src="${iconSparkle}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">今日の1問</span>
          ${!dailyDone ? '<span class="aqw-nav-dot"></span>' : ''}
        </button>
        <button class="aqw-nav-btn ${this.activeTab === 'shop' ? 'aqw-active' : ''}" data-screen="shop">
          <img src="${iconShop}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">ショップ</span>
        </button>
        <button class="aqw-nav-btn ${this.activeTab === 'book' ? 'aqw-active' : ''}" data-screen="book">
          <img src="${iconBook}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">ずかん</span>
        </button>
      </nav>
    `;

    this.container.querySelectorAll('.aqw-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => this.onNavigate(btn.dataset.screen));
    });
  }
}
