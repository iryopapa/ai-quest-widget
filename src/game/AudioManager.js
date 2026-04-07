export class AudioManager {
  constructor(baseURL, rootElement) {
    this.bgms = {};
    this.currentBgm = null;
    this.currentTrack = null;
    this.isMuted = true; // default muted for widget

    // Store base URL for lazy-loading audio
    this.base = baseURL || (import.meta.env.BASE_URL || '/');
    this.tracks = {
      title: `${this.base}audio/title-bgm.mp3`,
      home: `${this.base}audio/selection-bgm.mp3`,
      quest_select: `${this.base}audio/quest-bgm.mp3?v=3`,
      quiz: `${this.base}audio/quest-bgm.mp3?v=3`,
      result: `${this.base}audio/results-bgm.mp3`,
      shop: `${this.base}audio/dress-up-bgm.mp3`,
      book: `${this.base}audio/item-bgm.mp3`,
    };

    // Attach first-interaction listeners to rootElement if provided
    if (rootElement) {
      const initAudio = () => {
        if (this.currentBgm && this.currentBgm.paused && !this.isMuted) {
          this.currentBgm.play().catch(e => console.warn("Still can't play audio:", e));
        }
        rootElement.removeEventListener('click', initAudio);
        rootElement.removeEventListener('touchstart', initAudio);
      };
      rootElement.addEventListener('click', initAudio);
      rootElement.addEventListener('touchstart', initAudio);
    }
  }

  _getOrCreateAudio(track) {
    if (!this.bgms[track]) {
      const src = this.tracks[track];
      if (!src) return null;
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0.3;
      this.bgms[track] = audio;
    }
    return this.bgms[track];
  }

  playBgm(track) {
    if (this.isMuted) return;

    // If the same track is requested, do nothing
    if (this.currentTrack === track) {
      return;
    }

    // Pause current
    if (this.currentBgm) {
      this.currentBgm.pause();
      this.currentBgm.currentTime = 0;
    }

    // Lazy-load and play new
    const newBgm = this._getOrCreateAudio(track);
    if (newBgm) {
      this.currentBgm = newBgm;
      this.currentTrack = track;
      this.currentBgm.play().catch(e => {
        console.warn('Autoplay prevented. Audio will play on first interaction.', e);
      });
    }
  }

  stopBgm() {
    if (this.currentBgm) {
      this.currentBgm.pause();
      this.currentBgm.currentTime = 0;
      this.currentBgm = null;
      this.currentTrack = null;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.currentBgm) {
      this.currentBgm.pause();
    } else if (!this.isMuted && this.currentBgm) {
      this.currentBgm.play().catch(e => console.warn(e));
    }
    return this.isMuted;
  }
}
