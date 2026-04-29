// CharacterViewV2 - DOM-based character rendering with anchor-following accessories.
//
// Asset resolution (auto-priority):
//   character: assets/lottie/char_<id>.json -> assets/raster/char_<id>.png -> ../../assets/char_<id>.png (legacy)
//   accessory: assets/items/item_<id>.svg   -> ../../assets/item_<id>.png  (legacy)
//   shadow:    assets/shadows/shadow_<slot>.svg -> inline data URI fallback
//
// Vite's import.meta.glob is used so adding a file to the directory makes it
// available without code changes. Lottie loading is dynamic-imported only
// when at least one .json file is found, so the lottie-web dep is optional
// until you actually generate Lottie files.

import { AccessorySlot } from './AccessorySlot.js';
import anchorsData from './accessory_anchors.json';
import { EVOLUTION_STAGES } from '../game/Character.js';

// Map EVOLUTION_STAGES.id (e.g. 'bunny') -> v2 asset id (e.g. 'rabbit') and accessory_anchors key.
const STAGE_ID_TO_V2 = {
  egg: 'egg', chick: 'chick', kitten: 'kitten',
  bunny: 'rabbit',  // legacy uses 'bunny', v2 assets use 'rabbit'
  rabbit: 'rabbit',
  unicorn: 'unicorn',
};

// Accessory id alias: legacy may use bow/heart, v2 uses ribbon/star.
const ACC_ID_TO_V2 = {
  bow: 'ribbon',
  heart: 'star',
};

// ---- Asset glob (eager so URLs resolve at build time) ----
const lottieAssets = import.meta.glob('./assets/lottie/*.json',
  { eager: true, query: '?url', import: 'default' });
const rasterAssets = import.meta.glob('./assets/raster/*.{png,jpg,webp}',
  { eager: true, query: '?url', import: 'default' });
const itemSvgAssets = import.meta.glob('./assets/items/*.svg',
  { eager: true, query: '?url', import: 'default' });
const shadowSvgAssets = import.meta.glob('./assets/shadows/*.svg',
  { eager: true, query: '?url', import: 'default' });

// ---- Legacy fallbacks (existing PNGs in src/assets/) ----
import legacyEgg from '../assets/char_egg.png';
import legacyChick from '../assets/char_chick.png';
import legacyKitten from '../assets/char_kitten.png';
import legacyRabbit from '../assets/char_rabbit.png';
import legacyUnicorn from '../assets/char_unicorn.png';
import legacyRibbon from '../assets/item_ribbon.png';
import legacyHat from '../assets/item_hat.png';
import legacyGlasses from '../assets/item_glasses.png';
import legacyCrown from '../assets/item_crown.png';
import legacyFlower from '../assets/item_flower.png';
import legacyStar from '../assets/item_star.png';

const LEGACY_CHAR = {
  egg: legacyEgg, chick: legacyChick, kitten: legacyKitten,
  rabbit: legacyRabbit, unicorn: legacyUnicorn,
  // alias
  bunny: legacyRabbit,
};
const LEGACY_ACC = {
  ribbon: legacyRibbon, hat: legacyHat, glasses: legacyGlasses,
  crown: legacyCrown, flower: legacyFlower, star: legacyStar,
  bow: legacyRibbon, heart: legacyStar,
};

const STAGE_W = 200;
const STAGE_H = 220;

export class CharacterViewV2 {
  constructor(container, gameState, options = {}) {
    this.container = container;
    this.gameState = gameState;
    this.options = options;
    this.speechMessage = options.speechMessage || null;
    this.slots = new Map();
    this.lottieAnim = null;
  }

  async render() {
    const charId = this._resolveCharId();
    const charAsset = this._resolveCharAsset(charId);
    const equippedBg = this.gameState?.get?.('equippedBackground');
    const stage = this._resolveStage();

    let bgClass = '';
    if (equippedBg === 'bg_meadow') bgClass = 'aqw-bg-meadow';
    else if (equippedBg === 'bg_night') bgClass = 'aqw-bg-night';
    else if (equippedBg === 'bg_ocean') bgClass = 'aqw-bg-ocean';
    else if (equippedBg === 'bg_sakura') bgClass = 'aqw-bg-sakura';

    if (!charAsset) {
      this.container.innerHTML =
        `<div class="aqw-v2-error">CharacterViewV2: no asset for "${charId}".</div>`;
      return;
    }

    this.container.innerHTML = `
      <div class="aqw-character-stage aqw-v2-stage ${bgClass}" style="width:${STAGE_W}px;height:${STAGE_H}px;">
        ${this.speechMessage ? `<div class="aqw-char-speech-bubble">${this.speechMessage}</div>` : ''}
        <div class="aqw-character-sparkles aqw-sparkles-container"></div>
        <div class="aqw-v2-ground-shadow aqw-character-shadow"></div>
        <div class="aqw-v2-char-body aqw-character-body" data-mode="${charAsset.mode}">
          <div class="aqw-v2-char-host"></div>
        </div>
        ${stage ? `
          <div class="aqw-character-name-tag">
            <span class="aqw-character-name">${stage.name}</span>
          </div>
        ` : ''}
      </div>
    `;

    this.charBody = this.container.querySelector('.aqw-v2-char-body');
    const host = this.container.querySelector('.aqw-v2-char-host');

    if (charAsset.mode === 'lottie') {
      await this._renderLottieChar(host, charAsset.url);
      // While Lottie carries its own breath/blink, disable CSS breath to avoid double-shake.
      this.charBody.classList.add('aqw-v2-no-css-breath');
    } else {
      this._renderImgChar(host, charAsset.url, charId);
    }

    this._renderEquippedAccessories(charId);
  }

  // ---- Asset resolution ----

  _resolveStage() {
    const level = this.gameState?.get?.('level') || 1;
    return EVOLUTION_STAGES.find(s => level >= s.minLevel && level <= s.maxLevel)
      || EVOLUTION_STAGES[0];
  }

  _resolveCharId() {
    if (this.options.forceChar) return this.options.forceChar;
    // Read level from gameState and map via EVOLUTION_STAGES (matches legacy CharacterView behavior)
    const stage = this._resolveStage();
    if (stage) return STAGE_ID_TO_V2[stage.id] || stage.id;
    // Direct override (e.g. demo)
    const state = this.gameState;
    if (state?.get) {
      const id = state.get('characterId') || state.get('charId');
      if (id) return STAGE_ID_TO_V2[id] || id;
    }
    return 'chick';
  }

  _resolveCharAsset(charId) {
    const lottieKey = `./assets/lottie/char_${charId}.json`;
    const rasterKey = `./assets/raster/char_${charId}.png`;
    if (lottieAssets[lottieKey]) return { mode: 'lottie', url: lottieAssets[lottieKey] };
    if (rasterAssets[rasterKey]) return { mode: 'raster', url: rasterAssets[rasterKey] };
    if (LEGACY_CHAR[charId])     return { mode: 'legacy', url: LEGACY_CHAR[charId] };
    return null;
  }

  _resolveAccAsset(accId) {
    const v2Id = ACC_ID_TO_V2[accId] || accId;
    const svgKey = `./assets/items/item_${v2Id}.svg`;
    if (itemSvgAssets[svgKey]) return itemSvgAssets[svgKey];
    return LEGACY_ACC[accId] || LEGACY_ACC[v2Id] || null;
  }

  _resolveShadowAsset(slotName) {
    const svgKey = `./assets/shadows/shadow_${slotName}.svg`;
    if (shadowSvgAssets[svgKey]) return shadowSvgAssets[svgKey];
    return inlineShadowSvg(80, 18); // fallback: generic head_top shape
  }

  // ---- Character renderers ----

  _renderImgChar(host, url, charId) {
    const img = document.createElement('img');
    img.className = 'aqw-v2-char-img';
    img.src = url;
    img.alt = charId;
    host.appendChild(img);
  }

  async _renderLottieChar(host, url) {
    let lottie;
    try {
      const mod = await import('lottie-web');
      lottie = mod.default || mod;
    } catch (e) {
      host.innerHTML =
        `<div class="aqw-v2-error">lottie-web is not installed. Run: npm i lottie-web</div>`;
      console.warn('[CharacterViewV2] lottie-web import failed:', e);
      return;
    }
    this.lottieAnim?.destroy?.();
    this.lottieAnim = lottie.loadAnimation({
      container: host,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: url,
    });
  }

  // ---- Accessory layer ----

  _renderEquippedAccessories(charId) {
    const charData = anchorsData.characters[charId];
    if (!charData) return;

    const equipped =
      this.gameState?.get?.('equippedItems') || this.options.equipped || [];

    this.slots.forEach(s => s.destroy());
    this.slots.clear();

    equipped.forEach(accId => {
      const v2Acc = ACC_ID_TO_V2[accId] || accId;
      const accMeta = charData.accessories?.[v2Acc];
      const itemSrc = this._resolveAccAsset(accId);
      if (!accMeta || !itemSrc) return;

      const slotPos = charData.slots?.[accMeta.slot];
      if (!slotPos) return;

      // shadow: defaults to true. JSON can disable per accessory with "shadow": false
      const useShadow = accMeta.shadow !== false;
      const slot = new AccessorySlot(this.charBody, {
        ...accMeta,
        acc: accId,
        itemSrc,
        shadowSrc: useShadow ? this._resolveShadowAsset(accMeta.slot) : null,
      }, slotPos);

      this.slots.set(accId, slot);
    });
  }

  setEquipped(equippedList) {
    this.options.equipped = equippedList;
    const charId = this._resolveCharId();
    this._renderEquippedAccessories(charId);
  }

  async setCharacter(charId) {
    this.options.forceChar = charId;
    await this.render();
  }

  // ---- Reactions (compatibility with legacy CharacterView API) ----
  playReaction(type) {
    const body = this.container.querySelector('.aqw-v2-char-body');
    if (!body) return;
    const cls = type === 'happy' ? 'aqw-char-happy'
      : type === 'sad' ? 'aqw-char-sad'
      : type === 'evolve' ? 'aqw-char-evolve'
      : type === 'eat' ? 'aqw-char-happy'
      : null;
    if (!cls) return;
    body.classList.add(cls);
    setTimeout(() => body.classList.remove(cls), type === 'evolve' ? 1500 : 800);
  }

  destroy() {
    this.slots.forEach(s => s.destroy());
    this.slots.clear();
    this.lottieAnim?.destroy?.();
  }
}

function inlineShadowSvg(w, h) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
    <defs><filter id="b"><feGaussianBlur stdDeviation="2.5"/></filter></defs>
    <ellipse cx="${w / 2}" cy="${h / 2}" rx="${w / 2 - 4}" ry="${h / 2 - 2}"
             fill="#000" opacity="0.18" filter="url(#b)"/>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}
