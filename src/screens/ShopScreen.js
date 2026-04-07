// Shop Screen - Widget version
// All classes prefixed with aqw-, all DOM queries use this.container.querySelector()
import { SHOP_ITEMS } from '../game/Character.js';
import { CharacterView } from '../components/CharacterView.js';

import iconBack from '../assets/icon_back.png';
import iconBox from '../assets/icon_box.png';
import iconCoin from '../assets/icon_coin.png';
import itemHat from '../assets/item_hat.png';
import bgMeadow from '../assets/item_bg_meadow.png';

export class ShopScreen {
  constructor(container, gameState, onNavigate) {
    this.container = container;
    this.gameState = gameState;
    this.onNavigate = onNavigate;
    this.charView = null;
    this.selectedTab = 'accessory';
  }

  render() {
    const coins = this.gameState.get('coins');
    const ownedItems = this.gameState.get('ownedItems') || [];
    const equippedItems = this.gameState.get('equippedItems') || [];
    const equippedBg = this.gameState.get('equippedBackground');

    const accessories = SHOP_ITEMS.filter(i => i.type === 'accessory');
    const backgrounds = SHOP_ITEMS.filter(i => i.type === 'background');
    const items = this.selectedTab === 'accessory' ? accessories : backgrounds;

    this.container.innerHTML = `
      <div class="aqw-screen aqw-shop-screen">
        <header class="aqw-screen-header">
          <button class="aqw-back-btn aqw-btn-back-shop">
            <img src="${iconBack}" style="height:16px; mix-blend-mode:multiply;" />
          </button>
          <h2 class="aqw-screen-title"><img src="${iconBox}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> ショップ</h2>
          <div class="aqw-coin-badge aqw-small">
            <img src="${iconCoin}" style="height:16px; mix-blend-mode:multiply;" />
            <span class="aqw-coin-count">${coins}</span>
          </div>
        </header>

        <div class="aqw-shop-preview aqw-shop-character"></div>

        <div class="aqw-shop-tabs">
          <button class="aqw-shop-tab ${this.selectedTab === 'accessory' ? 'aqw-active' : ''}" data-tab="accessory">
            <img src="${itemHat}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> アクセサリー
          </button>
          <button class="aqw-shop-tab ${this.selectedTab === 'background' ? 'aqw-active' : ''}" data-tab="background">
            <img src="${bgMeadow}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply; border-radius:4px;" /> 背景
          </button>
        </div>

        <div class="aqw-shop-items">
          ${items.map(item => {
            const owned = ownedItems.includes(item.id);
            const equipped = item.type === 'background'
              ? equippedBg === item.id
              : equippedItems.includes(item.id);
            return `
              <div class="aqw-shop-item ${owned ? 'aqw-owned' : ''} ${equipped ? 'aqw-equipped' : ''}" data-id="${item.id}">
                ${item.iconImg
                  ? `<img src="${item.iconImg}" class="aqw-item-icon-img" style="width:32px; height:32px; mix-blend-mode:multiply;" />`
                  : `<span class="aqw-item-icon">${item.icon}</span>`
                }
                <span class="aqw-item-name">${item.name}</span>
                ${owned ? `
                  <button class="aqw-item-action ${equipped ? 'aqw-unequip' : 'aqw-equip'}" data-id="${item.id}" data-type="${item.type}">
                    ${equipped ? 'はずす' : 'つける'}
                  </button>
                ` : `
                  <button class="aqw-item-action aqw-buy ${coins < item.price ? 'aqw-disabled' : ''}" data-id="${item.id}" data-price="${item.price}" data-type="${item.type}">
                    <img src="${iconCoin}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /> ${item.price}
                  </button>
                `}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Character preview
    const charContainer = this.container.querySelector('.aqw-shop-character');
    this.charView = new CharacterView(charContainer, this.gameState);
    this.charView.render();

    // Events
    this.container.querySelector('.aqw-btn-back-shop')?.addEventListener('click', () => this.onNavigate('home'));

    this.container.querySelectorAll('.aqw-shop-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.selectedTab = tab.dataset.tab;
        this.render();
      });
    });

    this.container.querySelectorAll('.aqw-item-action.aqw-buy:not(.aqw-disabled)').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const price = parseInt(btn.dataset.price);
        if (this.gameState.buyItem(id, price)) {
          // Check collector badge
          if (this.gameState.get('ownedItems').length >= 5) {
            this.gameState.addBadge('collector');
          }
          this.render();
        }
      });
    });

    this.container.querySelectorAll('.aqw-item-action.aqw-equip, .aqw-item-action.aqw-unequip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const type = btn.dataset.type;
        this.gameState.equipItem(id, type);
        this.render();
      });
    });
  }

  destroy() {
    if (this.charView) this.charView.destroy();
  }
}
