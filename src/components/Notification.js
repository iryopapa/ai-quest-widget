export class Notification {
  constructor(root) {
    this.root = root;
    this.queue = [];
    this.isShowing = false;

    // Create notification container
    this.container = document.createElement('div');
    this.container.className = 'aqw-notification-container';
    this.root.appendChild(this.container);
  }

  show(message, type = 'xp') {
    this.queue.push({ message, type });
    if (!this.isShowing) this._processQueue();
  }

  _processQueue() {
    if (this.queue.length === 0) {
      this.isShowing = false;
      return;
    }

    this.isShowing = true;
    const { message, type } = this.queue.shift();

    const toast = document.createElement('div');
    toast.className = `aqw-toast aqw-toast-${type}`;

    const icons = { xp: '\u2728', coin: '\uD83E\uDE99', streak: '\uD83D\uDD25', levelup: '\uD83C\uDF89', chapter: '\uD83D\uDEA9' };
    toast.innerHTML = `<span class="aqw-toast-icon">${icons[type] || '\u2728'}</span> ${message}`;

    this.container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('aqw-toast-show'));

    setTimeout(() => {
      toast.classList.add('aqw-toast-hide');
      setTimeout(() => {
        toast.remove();
        this._processQueue();
      }, 400);
    }, 2000);
  }
}
