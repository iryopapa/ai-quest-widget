import { EVOLUTION_STAGES } from '../game/Character.js';

// New v2 character images (transparent PNG, hand-drawn vector source).
// We use raster (not Lottie) here because the floating button is tiny and
// always-visible; Lottie's per-frame rendering is unnecessary overhead.
import eggImg from '../v2/assets/raster/char_egg.png';
import chickImg from '../v2/assets/raster/char_chick.png';
import kittenImg from '../v2/assets/raster/char_kitten.png';
import rabbitImg from '../v2/assets/raster/char_rabbit.png';
import unicornImg from '../v2/assets/raster/char_unicorn.png';

const CHAR_IMAGES = {
  egg: eggImg,
  chick: chickImg,
  kitten: kittenImg,
  bunny: rabbitImg,   // EVOLUTION_STAGES uses 'bunny' as id; v2 asset filename is 'rabbit'
  rabbit: rabbitImg,
  unicorn: unicornImg,
};

export class FloatingCharacter {
  constructor(container, gameState, onClick) {
    this.container = container;
    this.gameState = gameState;
    this.onClick = onClick;
    this.unsubscribe = gameState.subscribe(() => this.render());
    this.render();
  }

  render() {
    const level = this.gameState.get('level');
    const stage = EVOLUTION_STAGES.find(s => level >= s.minLevel && level <= s.maxLevel) || EVOLUTION_STAGES[0];
    const charImg = CHAR_IMAGES[stage.id];
    const dailyChallengeDate = this.gameState.get('dailyChallengeDate');
    const today = new Date().toDateString();
    const hasDailyChallenge = dailyChallengeDate !== today;

    this.container.innerHTML = `
      <button class="aqw-floating-btn aqw-bounce" title="AI Quest \u3092\u958B\u304F">
        <img src="${charImg}" class="aqw-floating-img" alt="${stage.name}" />
        ${hasDailyChallenge ? '<span class="aqw-floating-dot"></span>' : ''}
      </button>
    `;

    this.container.querySelector('.aqw-floating-btn').addEventListener('click', this.onClick);
  }

  playReaction() {
    const btn = this.container.querySelector('.aqw-floating-btn');
    if (btn) {
      btn.classList.add('aqw-reaction');
      setTimeout(() => btn.classList.remove('aqw-reaction'), 600);
    }
  }

  destroy() {
    if (this.unsubscribe) this.unsubscribe();
  }
}
