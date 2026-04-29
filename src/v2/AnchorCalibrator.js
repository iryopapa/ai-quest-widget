// AnchorCalibrator - debug UI for tuning AccessorySlot positions in the browser.
//
// Drop into demo-new-pipeline.html, pick a character + accessory, and use
// number inputs / sliders to find the right offset/rotation/scale. Click
// "JSONをコピー" to grab the updated entry, paste back into accessory_anchors.json.

import anchorsData from './accessory_anchors.json';

export class AnchorCalibrator {
  constructor(container, charView) {
    this.container = container;
    this.charView = charView;
    this.charId = 'chick';
    this.accId = 'ribbon';
    this.draft = JSON.parse(JSON.stringify(anchorsData)); // deep clone
    this._render();
  }

  _render() {
    const charData = this.draft.characters[this.charId];
    const accIds = Object.keys(charData.accessories);

    this.container.innerHTML = `
      <div class="aqw-v2-calibrator">
        <h3>装着キャリブレータ (${this.charId})</h3>
        <div class="aqw-v2-calibrator-row">
          <label>アクセ:</label>
          <select id="acc-select">
            ${accIds.map(id => `<option value="${id}" ${id === this.accId ? 'selected' : ''}>${id}</option>`).join('')}
          </select>
        </div>
        <div id="cal-fields"></div>
        <div class="aqw-v2-calibrator-row">
          <button id="cal-copy">JSONをコピー</button>
          <button id="cal-reset">リセット</button>
        </div>
        <pre id="cal-preview"></pre>
      </div>
    `;

    this.container.querySelector('#acc-select').addEventListener('change', e => {
      this.accId = e.target.value;
      this._render();
    });
    this.container.querySelector('#cal-copy').addEventListener('click', () => this._copyJson());
    this.container.querySelector('#cal-reset').addEventListener('click', () => this._reset());

    this._renderFields();
  }

  _renderFields() {
    const acc = this.draft.characters[this.charId].accessories[this.accId];
    const fields = this.container.querySelector('#cal-fields');
    fields.innerHTML = `
      ${this._numRow('offsetX', acc.offset[0], -100, 100, 1)}
      ${this._numRow('offsetY', acc.offset[1], -100, 100, 1)}
      ${this._numRow('rotation', acc.rotation || 0, -180, 180, 1)}
      ${this._numRow('scale', acc.scale ?? 1, 0.1, 2, 0.05)}
    `;
    fields.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', e => this._onChange(e.target));
    });
    this._updatePreview();
  }

  _numRow(name, value, min, max, step) {
    return `
      <div class="aqw-v2-calibrator-row" data-field="${name}">
        <label>${name}</label>
        <input type="range" data-name="${name}" min="${min}" max="${max}" step="${step}" value="${value}" />
        <input type="number" data-name="${name}" min="${min}" max="${max}" step="${step}" value="${value}" />
      </div>
    `;
  }

  _onChange(input) {
    const name = input.dataset.name;
    const v = parseFloat(input.value);
    const acc = this.draft.characters[this.charId].accessories[this.accId];

    if (name === 'offsetX') acc.offset[0] = v;
    else if (name === 'offsetY') acc.offset[1] = v;
    else if (name === 'rotation') acc.rotation = v;
    else if (name === 'scale') acc.scale = v;

    // Sync sibling input
    const row = input.closest('[data-field]');
    row.querySelectorAll('input').forEach(el => { if (el !== input) el.value = v; });

    this._reapply();
    this._updatePreview();
  }

  _reapply() {
    // Mutate the shared anchorsData live so the view picks it up on re-render
    Object.assign(
      anchorsData.characters[this.charId].accessories[this.accId],
      this.draft.characters[this.charId].accessories[this.accId]
    );
    // Force re-equip with current list
    const equipped = this.charView.options.equipped || [];
    this.charView.setEquipped(equipped);
  }

  _updatePreview() {
    const acc = this.draft.characters[this.charId].accessories[this.accId];
    const out = JSON.stringify({ [this.accId]: acc }, null, 2);
    this.container.querySelector('#cal-preview').textContent = out;
  }

  _copyJson() {
    const acc = this.draft.characters[this.charId].accessories[this.accId];
    const text = JSON.stringify({ [this.accId]: acc }, null, 2);
    navigator.clipboard?.writeText(text).then(
      () => alert('コピーしました'),
      () => alert('コピー失敗（手動でプレビューから取得してください）')
    );
  }

  _reset() {
    this.draft = JSON.parse(JSON.stringify(anchorsData));
    this._render();
    this._reapply();
  }
}
