import { EVOLUTION_STAGES } from '../game/Character.js';

// Character images
import eggImg from '../assets/char_egg.png';
import chickImg from '../assets/char_chick.png';
import kittenImg from '../assets/char_kitten.png';
import bunnyImg from '../assets/char_rabbit.png';
import unicornImg from '../assets/char_unicorn.png';

const CHAR_IMAGES = {
  egg: eggImg,
  chick: chickImg,
  kitten: kittenImg,
  bunny: bunnyImg,
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
