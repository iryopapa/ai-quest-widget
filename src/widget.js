import styles from './widget.css?inline';
import { WidgetApp } from './app/WidgetApp.js';

class AIQuestWidgetBootstrap {
  constructor() {
    this.app = null;
    this.init();
  }

  init() {
    // Create host element
    const host = document.createElement('div');
    host.id = 'aqw-root';
    document.body.appendChild(host);

    // Attach shadow DOM
    const shadow = host.attachShadow({ mode: 'open' });

    // Inject styles
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    shadow.appendChild(styleEl);

    // Create containers
    const root = document.createElement('div');
    root.className = 'aqw-widget-root';
    shadow.appendChild(root);

    // Get config
    const config = window.AIQuestConfig || {};

    // Init app
    this.app = new WidgetApp(root, shadow, config);
  }
}

// Boot
const widget = new AIQuestWidgetBootstrap();

// Public API
window.AIQuest = {
  init(config) {
    if (widget.app) widget.app.configure(config);
  },
  onVideoComplete() {
    if (widget.app) widget.app.hostIntegration.onVideoComplete();
  },
  onTextComplete() {
    if (widget.app) widget.app.hostIntegration.onTextComplete();
  },
  onQuizPass(isPerfect = false) {
    if (widget.app) widget.app.hostIntegration.onQuizPass(isPerfect);
  },
  onChapterComplete(chapterId) {
    if (widget.app) widget.app.hostIntegration.onChapterComplete(chapterId);
  },
  open() {
    if (widget.app) widget.app.openPanel();
  },
  close() {
    if (widget.app) widget.app.closePanel();
  },
  getState() {
    if (widget.app) return { ...widget.app.gameState.state };
    return null;
  },
};
