// Character View - Canvas-based character rendering with accessory compositing
// Widget version: all classes prefixed with aqw-, all DOM queries use this.container.querySelector()
import { EVOLUTION_STAGES, SHOP_ITEMS } from '../game/Character.js';

// Character images
import eggImg from '../assets/char_egg.png';
import chickImg from '../assets/char_chick.png';
import kittenImg from '../assets/char_kitten.png';
import bunnyImg from '../assets/char_rabbit.png';
import unicornImg from '../assets/char_unicorn.png';

// Accessory images
import ribbonImg from '../assets/item_ribbon.png';
import hatImg from '../assets/item_hat.png';
import glassesImg from '../assets/item_glasses.png';
import crownImg from '../assets/item_crown.png';
import flowerImg from '../assets/item_flower.png';
import starImg from '../assets/item_star.png';

// Reaction icons
import iconHeart from '../assets/icon_heart.png';
import iconSweat from '../assets/icon_sweat.png';
import iconCake from '../assets/icon_cake.png';
import iconSuccess from '../assets/icon_success.png';
import iconSparkle from '../assets/icon_sparkle.png';

// ---- Image source maps ----
const CHAR_IMAGES = {
  egg: eggImg, chick: chickImg, kitten: kittenImg,
  bunny: bunnyImg, unicorn: unicornImg
};

const ITEM_IMAGES = {
  ribbon: ribbonImg, hat: hatImg, glasses: glassesImg,
  crown: crownImg, flower: flowerImg, star: starImg,
  heart: starImg, bow: ribbonImg
};

// ---- Canvas dimensions ----
const CANVAS_W = 200;
const CANVAS_H = 220;
const CHAR_X = 20;
const CHAR_Y = 40;
const CHAR_W = 160;
const CHAR_H = 160;

// ---- Accessory positions per character (x, y, w, h on the canvas) ----
const ACCESSORY_POSITIONS = {
  egg: {
    hat:     { x: 52, y: 5,   w: 90, h: 60 },
    crown:   { x: 48, y: 0,   w: 100, h: 58 },
    ribbon:  { x: 138, y: 28, w: 52, h: 52 },
    glasses: { x: 46, y: 98,  w: 105, h: 46 },
    flower:  { x: 5,  y: 32,  w: 48, h: 48 },
    star:    { x: 148, y: 2,  w: 42, h: 42 },
    heart:   { x: 2,  y: 100, w: 42, h: 42 },
    bow:     { x: 68, y: 172, w: 58, h: 42 },
  },
  chick: {
    hat:     { x: 55, y: 8,   w: 85, h: 55 },
    crown:   { x: 50, y: 2,   w: 95, h: 55 },
    ribbon:  { x: 135, y: 22, w: 50, h: 50 },
    glasses: { x: 48, y: 90,  w: 100, h: 44 },
    flower:  { x: 8,  y: 28,  w: 46, h: 46 },
    star:    { x: 146, y: 0,  w: 42, h: 42 },
    heart:   { x: 2,  y: 92,  w: 42, h: 42 },
    bow:     { x: 68, y: 168, w: 58, h: 42 },
  },
  kitten: {
    hat:     { x: 52, y: 5,   w: 90, h: 58 },
    crown:   { x: 48, y: 0,   w: 100, h: 56 },
    ribbon:  { x: 136, y: 20, w: 52, h: 52 },
    glasses: { x: 46, y: 92,  w: 104, h: 44 },
    flower:  { x: 6,  y: 25,  w: 46, h: 46 },
    star:    { x: 148, y: 0,  w: 42, h: 42 },
    heart:   { x: 2,  y: 95,  w: 42, h: 42 },
    bow:     { x: 68, y: 170, w: 58, h: 42 },
  },
  bunny: {
    hat:     { x: 55, y: 10,  w: 85, h: 55 },
    crown:   { x: 50, y: 5,   w: 95, h: 55 },
    ribbon:  { x: 132, y: 18, w: 52, h: 52 },
    glasses: { x: 48, y: 95,  w: 100, h: 44 },
    flower:  { x: 8,  y: 22,  w: 46, h: 46 },
    star:    { x: 146, y: 0,  w: 42, h: 42 },
    heart:   { x: 2,  y: 98,  w: 42, h: 42 },
    bow:     { x: 68, y: 168, w: 58, h: 42 },
  },
  unicorn: {
    hat:     { x: 52, y: 8,   w: 88, h: 56 },
    crown:   { x: 48, y: 2,   w: 98, h: 56 },
    ribbon:  { x: 136, y: 22, w: 52, h: 52 },
    glasses: { x: 46, y: 90,  w: 104, h: 44 },
    flower:  { x: 5,  y: 28,  w: 46, h: 46 },
    star:    { x: 148, y: 0,  w: 42, h: 42 },
    heart:   { x: 2,  y: 92,  w: 42, h: 42 },
    bow:     { x: 68, y: 172, w: 58, h: 42 },
  },
};

// ---- Persistent image cache (shared across all instances) ----
const processedImageCache = {};

export class CharacterView {
  constructor(container, gameState, options = {}) {
    this.container = container;
    this.gameState = gameState;
    this.animFrame = null;
    this.speechMessage = options.speechMessage || null;
  }

  render() {
    const level = this.gameState.get('level');
    const stage = EVOLUTION_STAGES.find(
      s => level >= s.minLevel && level <= s.maxLevel
    ) || EVOLUTION_STAGES[0];
    const equippedBg = this.gameState.get('equippedBackground');

    // Background class for equipped wallpaper
    let bgClass = '';
    if (equippedBg === 'bg_meadow') bgClass = 'aqw-bg-meadow';
    else if (equippedBg === 'bg_night') bgClass = 'aqw-bg-night';
    else if (equippedBg === 'bg_ocean') bgClass = 'aqw-bg-ocean';
    else if (equippedBg === 'bg_sakura') bgClass = 'aqw-bg-sakura';

    this.container.innerHTML = `
      <div class="aqw-character-stage ${bgClass}">
        ${this.speechMessage ? `<div class="aqw-char-speech-bubble">${this.speechMessage}</div>` : ''}
        <div class="aqw-character-sparkles aqw-sparkles-container"></div>
        <div class="aqw-character-body">
          <canvas class="aqw-char-canvas" width="${CANVAS_W}" height="${CANVAS_H}"></canvas>
        </div>
        <div class="aqw-character-shadow"></div>
        <div class="aqw-character-name-tag">
          <img src="${stage.img}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" />
          <span class="aqw-character-name">${stage.name}</span>
        </div>
      </div>
    `;

    // Load images, process white backgrounds, then draw
    this.loadAndDraw(stage);
    this.startAnimation(stage);
  }

  // ---- Image loading & processing ----

  async loadAndDraw(stage) {
    const equippedItems = this.gameState.get('equippedItems') || [];

    // Collect all image sources we need
    const needed = { [stage.id]: CHAR_IMAGES[stage.id] };
    equippedItems.forEach(id => {
      const imgKey = this.getImageKey(id);
      needed[imgKey] = ITEM_IMAGES[imgKey];
    });

    // Load & process (skips already cached images)
    await Promise.all(
      Object.entries(needed).map(([key, src]) => this.loadImage(key, src))
    );

    this.drawCanvas(stage);
  }

  getImageKey(itemId) {
    if (itemId === 'bow') return 'ribbon';
    if (itemId === 'heart') return 'star';
    return itemId;
  }

  loadImage(key, src) {
    if (processedImageCache[key]) return Promise.resolve();

    return new Promise(resolve => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        processedImageCache[key] = this.removeWhiteBg(img);
        resolve();
      };
      img.onerror = () => resolve();
      img.src = src;
    });
  }

  /**
   * Remove white/near-white background pixels from an image.
   * Returns a canvas element with transparent background.
   */
  removeWhiteBg(img) {
    const c = document.createElement('canvas');
    c.width = img.naturalWidth || img.width;
    c.height = img.naturalHeight || img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);

    try {
      const imageData = ctx.getImageData(0, 0, c.width, c.height);
      const d = imageData.data;

      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        const brightness = (r + g + b) / 3;

        if (brightness > 250) {
          // Pure white -> fully transparent
          d[i + 3] = 0;
        } else if (brightness > 230) {
          // Near-white -> fade out gradually (smooth edge)
          const factor = (250 - brightness) / 20;
          d[i + 3] = Math.round(factor * d[i + 3]);
        }
      }

      ctx.putImageData(imageData, 0, 0);
    } catch (e) {
      // Security/CORS error - use original image as-is
      console.warn('Could not process image pixels:', e);
    }

    return c;
  }

  // ---- Canvas drawing ----

  drawCanvas(stage) {
    const canvas = this.container.querySelector('.aqw-char-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // Layer 1: Draw character
    const charImg = processedImageCache[stage.id];
    if (charImg) {
      ctx.drawImage(charImg, CHAR_X, CHAR_Y, CHAR_W, CHAR_H);
    }

    // Layer 2+: Draw equipped accessories on top
    const equippedItems = this.gameState.get('equippedItems') || [];
    const positions = ACCESSORY_POSITIONS[stage.id] || {};

    equippedItems.forEach(id => {
      const imgKey = this.getImageKey(id);
      const processed = processedImageCache[imgKey];
      const pos = positions[id];
      if (processed && pos) {
        ctx.drawImage(processed, pos.x, pos.y, pos.w, pos.h);
      }
    });
  }

  // ---- Animation ----

  startAnimation(stage) {
    const body = this.container.querySelector('.aqw-character-body');
    if (!body) return;

    let tick = 0;

    const animate = () => {
      tick++;
      const baseSpeed = stage.id === 'chick' ? 0.08 : 0.04;
      const amplitude = stage.id === 'chick' ? 8 : stage.id === 'egg' ? 3 : 5;

      const y = Math.sin(tick * baseSpeed) * amplitude;
      const rot = Math.sin(tick * baseSpeed * 0.7) * 2;

      body.style.transform = `translateY(${y}px) rotate(${rot}deg)`;

      // Sparkles for unicorn (always allowed)
      if (stage.id === 'unicorn' && tick % 20 === 0) {
        this.addSparkle();
      }

      this.animFrame = requestAnimationFrame(animate);
    };
    animate();
  }

  addSparkle() {
    const container = this.container.querySelector('.aqw-sparkles-container');
    if (!container) return;
    const sparkle = document.createElement('img');
    sparkle.src = iconSparkle;
    sparkle.className = 'aqw-sparkle';
    sparkle.style.mixBlendMode = 'multiply';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDuration = (1 + Math.random()) + 's';
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }

  // ---- Reactions ----

  playReaction(type) {
    const body = this.container.querySelector('.aqw-character-body');
    if (!body) return;

    if (type === 'happy') {
      body.classList.add('aqw-char-happy');
      this.showEmoji(iconHeart);
      setTimeout(() => body.classList.remove('aqw-char-happy'), 800);
    } else if (type === 'sad') {
      body.classList.add('aqw-char-sad');
      this.showEmoji(iconSweat);
      setTimeout(() => body.classList.remove('aqw-char-sad'), 800);
    } else if (type === 'evolve') {
      body.classList.add('aqw-char-evolve');
      this.showEmoji(iconSuccess);
      setTimeout(() => body.classList.remove('aqw-char-evolve'), 1500);
    } else if (type === 'eat') {
      body.classList.add('aqw-char-happy');
      this.showEmoji(iconCake);
      setTimeout(() => body.classList.remove('aqw-char-happy'), 800);
    }
  }

  showEmoji(emojiSrc) {
    const stage = this.container.querySelector('.aqw-character-stage');
    if (!stage) return;
    const el = document.createElement('img');
    el.src = emojiSrc;
    el.className = 'aqw-floating-emoji';
    el.style.mixBlendMode = 'multiply';
    el.style.left = 40 + Math.random() * 20 + '%';
    stage.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }

  // ---- Cleanup ----

  destroy() {
    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
    }
  }
}
