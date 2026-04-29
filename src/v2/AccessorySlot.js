// AccessorySlot - DOM-based accessory attachment with anchor following.
//
// Phase 1a (current): character is a static <img>. Slot motion is inherited
//   from the parent .aqw-v2-char-body element which gets a CSS bobble animation.
// Phase 1b (future):  character becomes a Lottie. Slot motion comes from
//   lottie.getProperty(['layers', slotName, 'transform']).
//
// The public API stays the same in both phases.

export class AccessorySlot {
  /**
   * @param {HTMLElement} parentEl - the character body element (.aqw-v2-char-body)
   * @param {object} slotMeta - { slot, offset, rotation, scale, fx, itemSrc, shadowSrc }
   * @param {object} slotPosition - { x, y } in character-body local coordinates
   */
  constructor(parentEl, slotMeta, slotPosition) {
    this.parent = parentEl;
    this.meta = slotMeta;
    this.position = slotPosition;
    this.el = this._build();
    this.parent.appendChild(this.el);
  }

  _build() {
    const slot = document.createElement('div');
    slot.className = 'aqw-v2-acc-slot';
    slot.dataset.slot = this.meta.slot;
    slot.dataset.acc = this.meta.acc;

    const baseX = this.position.x + (this.meta.offset?.[0] || 0);
    const baseY = this.position.y + (this.meta.offset?.[1] || 0);
    const rot = this.meta.rotation || 0;
    const scale = this.meta.scale ?? 1;
    slot.style.transform =
      `translate(${baseX}px, ${baseY}px) rotate(${rot}deg) scale(${scale})`;

    if (this.meta.shadowSrc) {
      const shadow = document.createElement('img');
      shadow.className = 'aqw-v2-acc-shadow';
      shadow.src = this.meta.shadowSrc;
      shadow.alt = '';
      slot.appendChild(shadow);
    }

    const body = document.createElement('img');
    body.className = 'aqw-v2-acc-body';
    body.src = this.meta.itemSrc;
    body.alt = this.meta.acc;
    slot.appendChild(body);

    if (this.meta.fx?.startsWith('css:')) {
      const fxName = this.meta.fx.slice(4);
      body.classList.add(`aqw-v2-fx-${fxName}`);
    }
    // lottie:* fx is wired in Phase 1b via attachLottieFx()

    return slot;
  }

  attachLottieFx(_lottieModule, _path) {
    // Phase 1b stub. Will append a child div, loadAnimation into it,
    // and store the instance on this.fxInstance for play/pause/destroy.
    console.warn('[AccessorySlot] attachLottieFx not implemented in Phase 1a');
  }

  destroy() {
    this.fxInstance?.destroy?.();
    this.el.remove();
  }
}
