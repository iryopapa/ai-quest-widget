// Adventure Map Screen - Mountain climbing UI
// Bottom = start, Top = goal (AI秘書マスター)
import iconCheck from '../assets/icon_check.png';
import iconLocked from '../assets/icon_locked.png';
import iconTrophy from '../assets/icon_trophy.png';
import { EVOLUTION_STAGES } from '../game/Character.js';

export class AdventureMapScreen {
  constructor(container, gameState, onNavigate, config) {
    this.container = container;
    this.gameState = gameState;
    this.onNavigate = onNavigate;
    this.config = config;
  }

  render() {
    const chapters = this.config?.chapters || [];
    const completed = this.gameState.get('chaptersCompleted') || [];
    const total = chapters.length;
    const doneCount = completed.length;
    const percent = total > 0 ? Math.round((doneCount / total) * 100) : 0;
    const isAllDone = total > 0 && doneCount >= total;

    if (chapters.length === 0) {
      this.container.innerHTML = `
        <div class="aqw-screen aqw-map-screen">
          <div class="aqw-map-empty">
            <p>冒険マップの章データが設定されていません</p>
          </div>
        </div>
      `;
      return;
    }

    // Get current character for avatar
    const level = this.gameState.get('level');
    const stage = EVOLUTION_STAGES.find(s => level >= s.minLevel && level <= s.maxLevel) || EVOLUTION_STAGES[0];

    // Reverse chapters so bottom = ch1, top = last chapter
    const reversedChapters = [...chapters].reverse();

    this.container.innerHTML = `
      <div class="aqw-screen aqw-map-screen">
        <div class="aqw-map-altitude">
          <div class="aqw-map-altitude-bar">
            <div class="aqw-map-altitude-fill" style="height:${percent}%"></div>
          </div>
          <span class="aqw-map-altitude-text">🏔 標高 ${percent}%（${doneCount}/${total} 合目）</span>
        </div>

        <div class="aqw-map-mountain" id="aqw-map-scroll">
          <!-- Summit (top) -->
          <div class="aqw-map-summit ${isAllDone ? 'aqw-map-summit-done' : ''}">
            <div class="aqw-map-summit-icon">${isAllDone ? '👑' : '🚩'}</div>
            <div class="aqw-map-summit-text">${isAllDone ? 'AI秘書マスター達成！' : 'AI秘書マスター'}</div>
          </div>

          <!-- Trail nodes (reversed: top=last chapter, bottom=first) -->
          <div class="aqw-map-trail">
            ${reversedChapters.map((ch, ri) => {
              const origIdx = chapters.length - 1 - ri;
              const isDone = completed.includes(ch.id);
              const isCurrent = !isDone && (origIdx === 0 || completed.includes(chapters[origIdx - 1]?.id));
              const isLocked = !isDone && !isCurrent;
              const side = origIdx % 2 === 0 ? 'left' : 'right';
              const stationNum = origIdx + 1;

              return `
                <div class="aqw-trail-connector"></div>
                <div class="aqw-trail-node aqw-trail-${side} ${isDone ? 'aqw-trail-done' : ''} ${isCurrent ? 'aqw-trail-current' : ''} ${isLocked ? 'aqw-trail-locked' : ''}">
                  <div class="aqw-trail-circle">
                    ${isDone ? `<img src="${iconCheck}" class="aqw-trail-icon" />` :
                      isCurrent ? `<img src="${stage.img}" class="aqw-trail-avatar" />` :
                      `<img src="${iconLocked}" class="aqw-trail-icon aqw-trail-lock-icon" />`}
                  </div>
                  <div class="aqw-trail-info">
                    <div class="aqw-trail-station">${stationNum}合目</div>
                    <div class="aqw-trail-title">${isDone || isCurrent ? ch.title : '???'}</div>
                    ${ch.items ? `<div class="aqw-trail-items">${ch.items}項目</div>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Base (bottom) -->
          <div class="aqw-map-base">
            <div class="aqw-map-base-text">🌱 スタート地点</div>
          </div>
        </div>
      </div>
    `;

    // Scroll to bottom (start position)
    const scrollEl = this.container.querySelector('#aqw-map-scroll');
    if (scrollEl) {
      requestAnimationFrame(() => {
        scrollEl.scrollTop = scrollEl.scrollHeight;
      });
    }
  }

  destroy() {}
}
