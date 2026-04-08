(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const re='@import"https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700;900&display=swap";.aqw-widget-root{--aqw-pink: #f8a4c8;--aqw-pink-light: #fce4f0;--aqw-pink-dark: #e06090;--aqw-lavender: #c4b5fd;--aqw-lavender-light: #ede7f6;--aqw-lavender-dark: #7c6ef0;--aqw-mint: #86efac;--aqw-mint-light: #dcfce7;--aqw-mint-dark: #22c55e;--aqw-cream: #fef9ef;--aqw-cream-dark: #f5e6c8;--aqw-peach: #fed7aa;--aqw-peach-dark: #e0a030;--aqw-sky: #93c5fd;--aqw-sky-dark: #3b82f6;--aqw-bg: #faf5ff;--aqw-bg-card: #ffffff;--aqw-text: #3d2e52;--aqw-text-light: #8b7ca0;--aqw-text-muted: #c4b5d4;--aqw-border: #e8ddf5;--aqw-shadow: rgba(100, 60, 150, .08);--aqw-shadow-strong: rgba(100, 60, 150, .15);--aqw-max-width: 380px;--aqw-nav-height: 56px;--aqw-header-height: 44px;--aqw-radius: 16px;--aqw-radius-sm: 10px;--aqw-radius-lg: 24px;--aqw-ease: cubic-bezier(.4, 0, .2, 1);--aqw-bounce-ease: cubic-bezier(.68, -.55, .27, 1.55);position:fixed;bottom:0;right:0;z-index:999999;font-family:Zen Maru Gothic,sans-serif;color:var(--aqw-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5;box-sizing:border-box}.aqw-widget-root *,.aqw-widget-root *:before,.aqw-widget-root *:after{box-sizing:border-box}.aqw-floating-container{position:fixed;bottom:20px;right:20px;z-index:999999}.aqw-floating-btn{width:64px;height:64px;border-radius:50%;border:3px solid white;background:linear-gradient(135deg,var(--aqw-lavender-light),var(--aqw-pink-light));box-shadow:0 4px 20px #7c6ef04d;cursor:pointer;overflow:hidden;position:relative;padding:0;display:flex;align-items:center;justify-content:center;transition:transform .2s var(--aqw-ease),box-shadow .2s var(--aqw-ease)}.aqw-floating-btn:hover{transform:scale(1.1);box-shadow:0 6px 28px #7c6ef066}.aqw-floating-img{width:48px;height:48px;object-fit:contain}.aqw-floating-dot{position:absolute;top:2px;right:2px;width:12px;height:12px;background:#ef4444;border-radius:50%;border:2px solid white}.aqw-bounce{animation:aqw-bounce 3s ease-in-out infinite}@keyframes aqw-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-6px)}}.aqw-reaction{animation:aqw-react .6s var(--aqw-bounce-ease)!important}@keyframes aqw-react{0%{transform:scale(1)}40%{transform:scale(1.2)}to{transform:scale(1)}}.aqw-panel{position:fixed;bottom:20px;right:20px;width:380px;height:620px;background:var(--aqw-bg);border-radius:var(--aqw-radius-lg);box-shadow:0 8px 40px #00000026;display:none;flex-direction:column;overflow:hidden;z-index:999999}.aqw-panel.aqw-open{display:flex;animation:aqw-slideUp .3s var(--aqw-ease)}@keyframes aqw-slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.aqw-panel-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:linear-gradient(135deg,var(--aqw-lavender-dark),var(--aqw-pink-dark));color:#fff;flex-shrink:0}.aqw-panel-title{font-weight:700;font-size:15px}.aqw-panel-close{background:none;border:none;color:#fff;font-size:18px;cursor:pointer;padding:4px 8px;border-radius:8px;transition:background .2s}.aqw-panel-close:hover{background:#fff3}.aqw-screen-container{flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.aqw-screen-container::-webkit-scrollbar{width:4px}.aqw-screen-container::-webkit-scrollbar-track{background:transparent}.aqw-screen-container::-webkit-scrollbar-thumb{background:var(--aqw-lavender);border-radius:4px}.aqw-nav-container{flex-shrink:0}.aqw-screen-enter{animation:aqw-screenFadeIn .3s var(--aqw-ease)}@keyframes aqw-screenFadeIn{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@media(max-width:480px){.aqw-panel{width:100%;height:100%;bottom:0;right:0;border-radius:0}}.aqw-notification-container{position:fixed;bottom:90px;right:24px;z-index:1000000;display:flex;flex-direction:column;gap:8px;align-items:flex-end}.aqw-toast{padding:8px 16px;border-radius:20px;font-size:13px;font-weight:600;color:#fff;transform:translate(100px);opacity:0;transition:all .4s var(--aqw-ease);white-space:nowrap;font-family:Zen Maru Gothic,sans-serif}.aqw-toast-show{transform:translate(0);opacity:1}.aqw-toast-hide{transform:translateY(-10px);opacity:0}.aqw-toast-xp{background:linear-gradient(135deg,var(--aqw-lavender-dark),#9b8afb)}.aqw-toast-coin{background:linear-gradient(135deg,#f59e0b,#fbbf24)}.aqw-toast-streak{background:linear-gradient(135deg,#ff6b35,#ff3e00)}.aqw-toast-levelup{background:linear-gradient(135deg,#ec4899,#f43f5e)}.aqw-toast-chapter{background:linear-gradient(135deg,var(--aqw-mint-dark),#10b981)}.aqw-toast-icon{margin-right:4px}.aqw-screen{min-height:100%;padding:0 12px 12px}.aqw-home-screen{padding:0}.aqw-home-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;gap:6px}.aqw-level-badge{background:linear-gradient(135deg,var(--aqw-lavender),var(--aqw-lavender-dark));color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;white-space:nowrap}.aqw-streak-badge{background:linear-gradient(135deg,#ff6b35,#ff3e00);color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;display:flex;align-items:center;gap:3px;white-space:nowrap}.aqw-coin-badge{background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;display:flex;align-items:center;gap:3px;white-space:nowrap}.aqw-xp-bar-container{padding:0 14px 6px}.aqw-xp-bar{height:8px;background:var(--aqw-lavender-light);border-radius:4px;overflow:hidden;position:relative}.aqw-xp-fill{height:100%;background:linear-gradient(90deg,var(--aqw-lavender),var(--aqw-lavender-dark));border-radius:4px;transition:width .6s var(--aqw-ease)}.aqw-xp-text{font-size:10px;color:var(--aqw-text-light);text-align:right;margin-top:2px}.aqw-character-container{padding:0 12px}.aqw-character-stage{height:200px;border-radius:var(--aqw-radius);position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(180deg,#e8ddf5,#fce4f0)}.aqw-character-body{position:relative;z-index:2;display:flex;align-items:center;justify-content:center}.aqw-char-canvas{width:120px;height:120px;object-fit:contain;image-rendering:pixelated;transition:transform .3s var(--aqw-ease)}.aqw-character-shadow{position:absolute;bottom:20px;left:50%;transform:translate(-50%);width:80px;height:12px;background:radial-gradient(ellipse,rgba(0,0,0,.15),transparent);border-radius:50%;z-index:1}.aqw-character-name-tag{position:absolute;bottom:8px;left:50%;transform:translate(-50%);background:#ffffffd9;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);padding:3px 12px;border-radius:12px;font-size:11px;font-weight:700;color:var(--aqw-text);white-space:nowrap;z-index:3}.aqw-bg-meadow{background:linear-gradient(180deg,#a7f3d0,#dcfce7,#86efac)}.aqw-bg-night{background:linear-gradient(180deg,#1e1b4b,#312e81,#4338ca)}.aqw-bg-ocean{background:linear-gradient(180deg,#93c5fd,#bfdbfe,#60a5fa)}.aqw-bg-sakura{background:linear-gradient(180deg,#fce4f0,#fdf2f8,#f8a4c8)}.aqw-character-sparkles{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:4}.aqw-sparkle{position:absolute;width:6px;height:6px;background:#fff;border-radius:50%;animation:aqw-sparkle 2s ease-in-out infinite}.aqw-sparkle:nth-child(1){top:20%;left:15%;animation-delay:0s}.aqw-sparkle:nth-child(2){top:30%;right:20%;animation-delay:.5s}.aqw-sparkle:nth-child(3){bottom:35%;left:25%;animation-delay:1s}.aqw-sparkle:nth-child(4){top:15%;right:30%;animation-delay:1.5s}@keyframes aqw-sparkle{0%,to{opacity:0;transform:scale(0)}50%{opacity:1;transform:scale(1)}}.aqw-floating-emoji{position:absolute;font-size:20px;animation:aqw-floatUp 2s ease-out forwards;pointer-events:none;z-index:5}@keyframes aqw-floatUp{0%{opacity:1;transform:translateY(0) scale(1)}to{opacity:0;transform:translateY(-60px) scale(.5)}}.aqw-char-happy .aqw-char-canvas{animation:aqw-charHappy .6s var(--aqw-bounce-ease)}@keyframes aqw-charHappy{0%{transform:translateY(0)}30%{transform:translateY(-12px) rotate(-5deg)}60%{transform:translateY(-8px) rotate(5deg)}to{transform:translateY(0) rotate(0)}}.aqw-char-sad .aqw-char-canvas{animation:aqw-charSad .8s var(--aqw-ease)}@keyframes aqw-charSad{0%,to{transform:translateY(0)}50%{transform:translateY(4px) scale(.95)}}.aqw-char-evolve .aqw-char-canvas{animation:aqw-charEvolve 1.2s var(--aqw-ease)}@keyframes aqw-charEvolve{0%{transform:scale(1);filter:brightness(1)}30%{transform:scale(1.3);filter:brightness(2)}60%{transform:scale(.9);filter:brightness(1.5)}to{transform:scale(1);filter:brightness(1)}}.aqw-evolution-hint{margin:6px 12px;padding:8px 12px;background:linear-gradient(135deg,var(--aqw-lavender-light),var(--aqw-pink-light));border-radius:var(--aqw-radius-sm);font-size:11px;color:var(--aqw-lavender-dark);font-weight:600;text-align:center}.aqw-home-actions{display:flex;gap:8px;padding:8px 12px}.aqw-action-btn{flex:1;padding:10px 8px;border:none;border-radius:var(--aqw-radius-sm);font-family:inherit;font-size:12px;font-weight:700;cursor:pointer;transition:transform .15s,box-shadow .15s;color:#fff;text-align:center}.aqw-action-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px var(--aqw-shadow-strong)}.aqw-action-btn:active{transform:translateY(0)}.aqw-home-message{padding:0 12px 8px}.aqw-message-bubble{background:var(--aqw-bg-card);border:1px solid var(--aqw-border);border-radius:var(--aqw-radius-sm);padding:10px 14px;font-size:12px;color:var(--aqw-text);line-height:1.6;box-shadow:0 2px 8px var(--aqw-shadow)}.aqw-daily-quick-btn{margin:4px 12px 8px;padding:10px 16px;background:linear-gradient(135deg,#ff6b35,#ff3e00);color:#fff;border:none;border-radius:var(--aqw-radius-sm);font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;width:calc(100% - 24px);transition:transform .15s,box-shadow .15s}.aqw-daily-quick-btn:hover{transform:translateY(-1px);box-shadow:0 4px 16px #ff3e004d}.aqw-streak-display{display:flex;align-items:center;gap:6px;padding:6px 12px;margin:0 12px 6px;background:linear-gradient(135deg,#ff6b351a,#ff3e000d);border-radius:var(--aqw-radius-sm);font-size:11px;color:var(--aqw-text);font-weight:600}.aqw-bottom-nav{display:flex;justify-content:space-around;background:var(--aqw-bg-card);border-top:1px solid var(--aqw-border);padding:6px 2px}.aqw-nav-btn{display:flex;flex-direction:column;align-items:center;gap:1px;background:none;border:none;cursor:pointer;padding:4px 2px;border-radius:8px;color:var(--aqw-text-muted);font-family:inherit;font-size:9px;font-weight:600;transition:color .2s;position:relative;min-width:0}.aqw-nav-btn.aqw-active{color:var(--aqw-lavender-dark)}.aqw-nav-icon-img{height:20px;mix-blend-mode:multiply}.aqw-nav-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:48px}.aqw-nav-dot{position:absolute;top:0;right:4px;width:8px;height:8px;background:#ef4444;border-radius:50%}.aqw-quest-screen{padding:0 12px 12px}.aqw-screen-header{display:flex;align-items:center;gap:8px;padding:12px 0 8px}.aqw-back-btn{background:none;border:none;font-size:18px;cursor:pointer;padding:4px;color:var(--aqw-text);border-radius:8px;transition:background .2s}.aqw-back-btn:hover{background:var(--aqw-lavender-light)}.aqw-screen-title{font-size:16px;font-weight:700;color:var(--aqw-text)}.aqw-quest-intro{text-align:center;padding:8px 0 12px;font-size:13px;color:var(--aqw-text-light)}.aqw-category-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:4px 0}.aqw-category-card{background:var(--aqw-bg-card);border:1px solid var(--aqw-border);border-radius:var(--aqw-radius);padding:16px 12px;text-align:center;cursor:pointer;transition:transform .15s,box-shadow .15s,border-color .15s;display:flex;flex-direction:column;align-items:center;gap:6px}.aqw-category-card:hover{transform:translateY(-2px);box-shadow:0 4px 16px var(--aqw-shadow-strong);border-color:var(--aqw-lavender)}.aqw-category-card .aqw-cat-icon{font-size:28px}.aqw-category-card .aqw-cat-name{font-size:12px;font-weight:700;color:var(--aqw-text)}.aqw-category-card .aqw-cat-desc{font-size:10px;color:var(--aqw-text-light)}.aqw-quiz-active{padding:0}.aqw-quiz-header{padding:12px 14px 8px;display:flex;align-items:center;justify-content:space-between}.aqw-quiz-progress{flex:1;margin:0 12px}.aqw-quiz-progress-bar{height:6px;background:var(--aqw-lavender-light);border-radius:3px;overflow:hidden}.aqw-quiz-progress-fill{height:100%;background:linear-gradient(90deg,var(--aqw-lavender),var(--aqw-lavender-dark));border-radius:3px;transition:width .4s var(--aqw-ease)}.aqw-quiz-content{padding:8px 14px}.aqw-question-card{background:var(--aqw-bg-card);border-radius:var(--aqw-radius);padding:20px 16px;box-shadow:0 2px 12px var(--aqw-shadow);margin-bottom:12px}.aqw-question-text{font-size:14px;font-weight:700;color:var(--aqw-text);line-height:1.6;margin-bottom:16px}.aqw-choices-container{display:flex;flex-direction:column;gap:8px}.aqw-choice-btn{padding:12px 14px;background:var(--aqw-bg);border:2px solid var(--aqw-border);border-radius:var(--aqw-radius-sm);font-family:inherit;font-size:13px;font-weight:500;color:var(--aqw-text);cursor:pointer;text-align:left;transition:border-color .2s,background .2s,transform .15s}.aqw-choice-btn:hover{border-color:var(--aqw-lavender);background:var(--aqw-lavender-light);transform:translate(4px)}.aqw-choice-btn.aqw-correct{border-color:var(--aqw-mint-dark);background:var(--aqw-mint-light);color:#166534;animation:aqw-correctPop .4s var(--aqw-bounce-ease)}@keyframes aqw-correctPop{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}.aqw-choice-btn.aqw-wrong{border-color:#fca5a5;background:#fef2f2;color:#991b1b;animation:aqw-wrongShake .4s var(--aqw-ease)}@keyframes aqw-wrongShake{0%,to{transform:translate(0)}25%{transform:translate(-6px)}50%{transform:translate(6px)}75%{transform:translate(-4px)}}.aqw-result-screen{text-align:center;padding:20px 14px;animation:aqw-screenFadeIn .3s var(--aqw-ease)}.aqw-result-content{display:flex;flex-direction:column;align-items:center;gap:12px}.aqw-result-icon{font-size:48px}.aqw-result-title{font-size:18px;font-weight:900;color:var(--aqw-text)}.aqw-result-rewards{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}.aqw-result-rewards span{padding:4px 12px;background:var(--aqw-lavender-light);border-radius:16px;font-size:12px;font-weight:700;color:var(--aqw-lavender-dark)}.aqw-explanation-box{background:var(--aqw-cream);border:1px solid var(--aqw-cream-dark);border-radius:var(--aqw-radius-sm);padding:12px 14px;font-size:12px;color:var(--aqw-text);text-align:left;line-height:1.7;margin-top:8px}.aqw-summary-screen{text-align:center;padding:16px 14px}.aqw-summary-content{display:flex;flex-direction:column;align-items:center;gap:16px}.aqw-summary-score{display:flex;flex-direction:column;align-items:center;gap:8px}.aqw-score-circle{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--aqw-lavender-light),var(--aqw-pink-light));display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:900;color:var(--aqw-lavender-dark);box-shadow:0 4px 16px var(--aqw-shadow)}.aqw-summary-rewards{display:flex;gap:16px;justify-content:center}.aqw-summary-rewards>div{display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 16px;background:var(--aqw-bg-card);border-radius:var(--aqw-radius-sm);box-shadow:0 2px 8px var(--aqw-shadow)}.aqw-summary-rewards .aqw-reward-value{font-size:18px;font-weight:900;color:var(--aqw-lavender-dark)}.aqw-summary-rewards .aqw-reward-label{font-size:10px;color:var(--aqw-text-light);font-weight:600}.aqw-evolution-announcement{padding:16px;background:linear-gradient(135deg,var(--aqw-lavender-light),var(--aqw-pink-light));border-radius:var(--aqw-radius);text-align:center;animation:aqw-glow 2s ease-in-out infinite}@keyframes aqw-glow{0%,to{box-shadow:0 0 10px #7c6ef033}50%{box-shadow:0 0 24px #7c6ef066}}.aqw-evolution-announcement .aqw-evo-title{font-size:16px;font-weight:900;color:var(--aqw-lavender-dark)}.aqw-evolution-announcement .aqw-evo-text{font-size:12px;color:var(--aqw-text);margin-top:4px}.aqw-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:none;border-radius:var(--aqw-radius-sm);font-family:inherit;font-weight:700;cursor:pointer;transition:transform .15s,box-shadow .15s,opacity .15s}.aqw-btn:hover{transform:translateY(-1px);box-shadow:0 4px 12px var(--aqw-shadow-strong)}.aqw-btn:active{transform:translateY(0)}.aqw-btn-primary{background:linear-gradient(135deg,var(--aqw-lavender-dark),var(--aqw-pink-dark));color:#fff}.aqw-btn-secondary{background:var(--aqw-bg-card);border:2px solid var(--aqw-border);color:var(--aqw-text)}.aqw-btn-lg{padding:14px 28px;font-size:15px;border-radius:var(--aqw-radius)}.aqw-btn-md{padding:10px 20px;font-size:13px}.aqw-shop-screen{padding:0 12px 12px}.aqw-shop-preview{height:120px;border-radius:var(--aqw-radius);background:linear-gradient(180deg,var(--aqw-lavender-light),var(--aqw-pink-light));display:flex;align-items:center;justify-content:center;margin-bottom:12px;overflow:hidden;position:relative}.aqw-shop-tabs{display:flex;gap:4px;margin-bottom:12px;background:var(--aqw-bg-card);border-radius:var(--aqw-radius-sm);padding:3px;border:1px solid var(--aqw-border)}.aqw-shop-tab{flex:1;padding:8px 4px;border:none;border-radius:8px;background:transparent;font-family:inherit;font-size:11px;font-weight:700;color:var(--aqw-text-muted);cursor:pointer;transition:all .2s;text-align:center}.aqw-shop-tab.aqw-active{background:var(--aqw-lavender);color:#fff}.aqw-shop-items{display:flex;flex-direction:column;gap:8px}.aqw-shop-item{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--aqw-bg-card);border:1px solid var(--aqw-border);border-radius:var(--aqw-radius-sm);transition:border-color .2s,box-shadow .2s}.aqw-shop-item:hover{border-color:var(--aqw-lavender);box-shadow:0 2px 12px var(--aqw-shadow)}.aqw-item-icon-img{width:36px;height:36px;object-fit:contain;image-rendering:pixelated}.aqw-item-name{flex:1;font-size:12px;font-weight:700;color:var(--aqw-text)}.aqw-item-action{padding:6px 14px;border:none;border-radius:16px;font-family:inherit;font-size:11px;font-weight:700;cursor:pointer;transition:transform .15s,opacity .15s}.aqw-item-action:hover{transform:scale(1.05)}.aqw-item-action.aqw-buy{background:linear-gradient(135deg,#f59e0b,#fbbf24);color:#fff}.aqw-item-action.aqw-equip{background:linear-gradient(135deg,var(--aqw-lavender),var(--aqw-lavender-dark));color:#fff}.aqw-item-action.aqw-unequip{background:var(--aqw-bg);color:var(--aqw-text-light);border:1px solid var(--aqw-border)}.aqw-item-action.aqw-disabled{background:#e5e7eb;color:#9ca3af;cursor:not-allowed;opacity:.7}.aqw-book-screen{padding:0 12px 12px}.aqw-book-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px}.aqw-stat-card{background:var(--aqw-bg-card);border:1px solid var(--aqw-border);border-radius:var(--aqw-radius-sm);padding:12px 8px;text-align:center}.aqw-stat-value{font-size:20px;font-weight:900;color:var(--aqw-lavender-dark)}.aqw-stat-label{font-size:10px;color:var(--aqw-text-light);font-weight:600;margin-top:2px}.aqw-book-section{margin-bottom:16px}.aqw-section-title{font-size:14px;font-weight:700;color:var(--aqw-text);margin-bottom:10px;display:flex;align-items:center;gap:6px}.aqw-evolution-gallery{display:flex;gap:10px;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}.aqw-evolution-gallery::-webkit-scrollbar{height:3px}.aqw-evolution-gallery::-webkit-scrollbar-thumb{background:var(--aqw-lavender);border-radius:3px}.aqw-evolution-card{flex-shrink:0;width:80px;background:var(--aqw-bg-card);border:1px solid var(--aqw-border);border-radius:var(--aqw-radius-sm);padding:10px 8px;text-align:center}.aqw-evolution-card img{width:48px;height:48px;object-fit:contain;image-rendering:pixelated}.aqw-evolution-card .aqw-evo-name{font-size:9px;font-weight:700;color:var(--aqw-text);margin-top:4px}.aqw-badge-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.aqw-badge-card{background:var(--aqw-bg-card);border:1px solid var(--aqw-border);border-radius:var(--aqw-radius-sm);padding:10px 6px;text-align:center;transition:transform .15s}.aqw-badge-card:hover{transform:translateY(-2px)}.aqw-badge-card .aqw-badge-icon{font-size:24px;margin-bottom:4px}.aqw-badge-card .aqw-badge-name{font-size:9px;font-weight:600;color:var(--aqw-text);line-height:1.3}.aqw-badge-card.aqw-earned{border-color:var(--aqw-lavender);background:var(--aqw-lavender-light)}.aqw-badge-card.aqw-locked{opacity:.4;filter:grayscale(1)}.aqw-category-progress{display:flex;flex-direction:column;gap:8px}.aqw-cat-progress-item{display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--aqw-bg-card);border:1px solid var(--aqw-border);border-radius:var(--aqw-radius-sm)}.aqw-cat-progress-item .aqw-cp-icon{font-size:20px}.aqw-cat-progress-item .aqw-cp-info{flex:1}.aqw-cat-progress-item .aqw-cp-name{font-size:12px;font-weight:700;color:var(--aqw-text)}.aqw-cat-progress-item .aqw-cp-bar{height:4px;background:var(--aqw-lavender-light);border-radius:2px;margin-top:4px;overflow:hidden}.aqw-cat-progress-item .aqw-cp-fill{height:100%;background:var(--aqw-lavender);border-radius:2px;transition:width .4s var(--aqw-ease)}.aqw-cat-progress-item .aqw-cp-text{font-size:10px;color:var(--aqw-text-light);font-weight:600;white-space:nowrap}.aqw-map-screen{padding:0;display:flex;flex-direction:column;height:100%}.aqw-map-altitude{padding:10px 16px 8px;background:#ffffffe6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);z-index:5;flex-shrink:0}.aqw-map-altitude-bar{height:8px;background:var(--aqw-lavender-light);border-radius:4px;overflow:hidden;margin-bottom:4px;position:relative}.aqw-map-altitude-fill{height:100%;background:linear-gradient(90deg,var(--aqw-mint),var(--aqw-lavender),var(--aqw-pink));border-radius:4px;transition:width .8s var(--aqw-ease)}.aqw-map-altitude-text{font-size:12px;color:var(--aqw-text-light);font-weight:700;text-align:center;display:block}.aqw-map-mountain{flex:1;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;background:linear-gradient(180deg,#c8e0ff,#e0f2fe 8%,#f0f4ff 15%,#e8e0d8 30%,#d4c5a9 50%,#b8c8a0 65%,#a8d8a0 78%,#dcfce7 90%,#e8f5e9);padding:0 12px;position:relative}.aqw-map-summit{text-align:center;padding:24px 16px 16px;position:relative}.aqw-map-summit-icon{font-size:40px;margin-bottom:4px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.15))}.aqw-map-summit-text{font-size:14px;font-weight:900;color:#5b4a6f;text-shadow:0 1px 2px rgba(255,255,255,.8)}.aqw-map-summit-done .aqw-map-summit-icon{animation:aqw-summitGlow 2s ease-in-out infinite}.aqw-map-summit-done .aqw-map-summit-text{background:linear-gradient(135deg,#f59e0b,#fbbf24);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}@keyframes aqw-summitGlow{0%,to{transform:scale(1);filter:drop-shadow(0 2px 4px rgba(0,0,0,.15))}50%{transform:scale(1.1);filter:drop-shadow(0 4px 12px rgba(251,191,36,.5))}}.aqw-map-trail{display:flex;flex-direction:column;align-items:center;padding:0 8px;min-height:100px}.aqw-trail-connector{width:3px;height:28px;background:repeating-linear-gradient(180deg,rgba(139,124,160,.3) 0px,rgba(139,124,160,.3) 4px,transparent 4px,transparent 8px);position:relative}.aqw-trail-node{display:flex;align-items:center;gap:10px;width:100%;padding:6px 0;position:relative}.aqw-trail-left{flex-direction:row;padding-left:16px}.aqw-trail-right{flex-direction:row-reverse;padding-right:16px;text-align:right}.aqw-trail-circle{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:3px solid rgba(255,255,255,.6);background:#ffffffb3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);box-shadow:0 2px 8px #0000001a;transition:all .3s var(--aqw-ease);z-index:2}.aqw-trail-done .aqw-trail-circle{background:linear-gradient(135deg,var(--aqw-mint),var(--aqw-mint-dark));border-color:var(--aqw-mint-dark);box-shadow:0 2px 8px #22c55e4d}.aqw-trail-current .aqw-trail-circle{width:52px;height:52px;background:linear-gradient(135deg,var(--aqw-lavender),var(--aqw-lavender-dark));border-color:var(--aqw-lavender-dark);box-shadow:0 0 0 4px #7c6ef033,0 4px 12px #7c6ef04d;animation:aqw-trailPulse 2s ease-in-out infinite}@keyframes aqw-trailPulse{0%,to{box-shadow:0 0 0 4px #7c6ef033,0 4px 12px #7c6ef04d}50%{box-shadow:0 0 0 8px #7c6ef01a,0 4px 16px #7c6ef066}}.aqw-trail-locked .aqw-trail-circle{background:#c8c8d280;border-color:#b4b4be66;box-shadow:none}.aqw-trail-icon{width:22px;height:22px;object-fit:contain}.aqw-trail-lock-icon{opacity:.35}.aqw-trail-avatar{width:30px;height:30px;object-fit:contain}.aqw-trail-info{flex:1;min-width:0}.aqw-trail-station{font-size:10px;font-weight:700;color:#5b4a6f80;text-transform:uppercase;letter-spacing:.5px}.aqw-trail-done .aqw-trail-station{color:var(--aqw-mint-dark)}.aqw-trail-current .aqw-trail-station{color:var(--aqw-lavender-dark)}.aqw-trail-title{font-size:13px;font-weight:700;color:var(--aqw-text);text-shadow:0 1px 2px rgba(255,255,255,.6)}.aqw-trail-items{font-size:10px;color:var(--aqw-text-light)}.aqw-trail-locked .aqw-trail-title,.aqw-trail-locked .aqw-trail-items,.aqw-trail-locked .aqw-trail-station{color:#a0a0aa99}.aqw-map-base{text-align:center;padding:16px 16px 24px}.aqw-map-base-text{font-size:13px;font-weight:700;color:var(--aqw-mint-dark);text-shadow:0 1px 2px rgba(255,255,255,.8)}.aqw-map-empty{display:flex;align-items:center;justify-content:center;min-height:200px;color:var(--aqw-text-muted);font-size:14px;text-align:center;padding:24px}.aqw-daily-screen{padding:0 12px 12px}.aqw-daily-header{text-align:center;padding:16px 0 12px}.aqw-daily-title{font-size:18px;font-weight:900;color:var(--aqw-text);margin-bottom:4px}.aqw-daily-streak{font-size:12px;font-weight:700;color:#ff6b35;display:flex;align-items:center;justify-content:center;gap:4px}.aqw-daily-question{background:var(--aqw-bg-card);border-radius:var(--aqw-radius);padding:20px 16px;box-shadow:0 2px 12px var(--aqw-shadow);margin-bottom:12px}.aqw-daily-q-text{font-size:14px;font-weight:700;color:var(--aqw-text);line-height:1.6;margin-bottom:16px}.aqw-daily-choices{display:flex;flex-direction:column;gap:8px}.aqw-daily-choice{padding:12px 14px;background:var(--aqw-bg);border:2px solid var(--aqw-border);border-radius:var(--aqw-radius-sm);font-family:inherit;font-size:13px;font-weight:500;color:var(--aqw-text);cursor:pointer;text-align:left;transition:border-color .2s,background .2s,transform .15s}.aqw-daily-choice:hover{border-color:var(--aqw-lavender);background:var(--aqw-lavender-light);transform:translate(4px)}.aqw-daily-choice.aqw-correct{border-color:var(--aqw-mint-dark);background:var(--aqw-mint-light);color:#166534;animation:aqw-correctPop .4s var(--aqw-bounce-ease)}.aqw-daily-choice.aqw-wrong{border-color:#fca5a5;background:#fef2f2;color:#991b1b;animation:aqw-wrongShake .4s var(--aqw-ease)}.aqw-daily-result{text-align:center;padding:16px 0;animation:aqw-screenFadeIn .3s var(--aqw-ease)}.aqw-daily-result-icon{font-size:48px;margin-bottom:8px}.aqw-daily-rewards{display:flex;gap:12px;justify-content:center;margin:12px 0;flex-wrap:wrap}.aqw-daily-rewards span{padding:4px 12px;background:var(--aqw-lavender-light);border-radius:16px;font-size:12px;font-weight:700;color:var(--aqw-lavender-dark)}.aqw-daily-explanation{background:var(--aqw-cream);border:1px solid var(--aqw-cream-dark);border-radius:var(--aqw-radius-sm);padding:12px 14px;font-size:12px;color:var(--aqw-text);text-align:left;line-height:1.7;margin-top:12px}.aqw-daily-done{text-align:center;padding:40px 16px}.aqw-daily-done-icon{font-size:48px;margin-bottom:12px}.aqw-daily-comeback{font-size:13px;color:var(--aqw-text-light);margin-top:8px}.aqw-daily-streak-info{display:flex;align-items:center;gap:8px;padding:10px 14px;background:linear-gradient(135deg,#ff6b351a,#ff3e000d);border-radius:var(--aqw-radius-sm);margin-bottom:12px;font-size:12px;font-weight:600;color:var(--aqw-text)}.aqw-inline-icon{height:16px;vertical-align:middle;mix-blend-mode:multiply}.aqw-spacer{flex:1}.aqw-hidden{display:none!important}.aqw-text-center{text-align:center}.aqw-text-muted{color:var(--aqw-text-muted)}.aqw-flex-center{display:flex;align-items:center;justify-content:center}.aqw-loading{display:flex;align-items:center;justify-content:center;padding:40px}.aqw-spinner{width:32px;height:32px;border:3px solid var(--aqw-lavender-light);border-top-color:var(--aqw-lavender-dark);border-radius:50%;animation:aqw-spin .8s linear infinite}@keyframes aqw-spin{to{transform:rotate(360deg)}}',V="ai-quest-widget-save",T={name:"AIペット",level:1,xp:0,coins:0,totalQuests:0,totalCorrect:0,streak:0,lastPlayDate:null,categoriesPlayed:[],badges:[],ownedItems:[],equippedItems:[],equippedBackground:null,soundEnabled:!1,initialized:!1,dailyChallengeDate:null,dailyChallengeStreak:0,chaptersCompleted:[],adventureMapProgress:{},totalVideos:0,totalTexts:0,lastStreakDate:null};class oe{constructor(){this.state=this.load(),this.listeners=[]}load(){try{const e=localStorage.getItem(V);if(e){const a=JSON.parse(e);return{...T,...a}}}catch(e){console.warn("Failed to load save:",e)}return{...T}}save(){try{localStorage.setItem(V,JSON.stringify(this.state))}catch(e){console.warn("Failed to save:",e)}}get(e){return this.state[e]}set(e,a){this.state[e]=a,this.save(),this.notify()}update(e){Object.assign(this.state,e),this.save(),this.notify()}reset(){this.state={...T},this.save(),this.notify()}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(a=>a!==e)}}notify(){this.listeners.forEach(e=>e(this.state))}isNewDay(){const e=new Date().toDateString();return this.state.lastPlayDate!==e}updateStreak(){const e=new Date().toDateString(),a=this.state.lastPlayDate;if(!a)this.state.streak=1;else{const t=new Date(a),s=Math.floor((new Date-t)/(1e3*60*60*24));s===1?this.state.streak++:s>1&&(this.state.streak=1)}this.state.lastPlayDate=e,this.save()}getStreakMultiplier(){const e=this.state.streak||0;return e>=30?2.5:e>=14?2:e>=7?1.5:e>=3?1.2:1}addBadge(e){return this.state.badges.includes(e)?!1:(this.state.badges.push(e),this.save(),!0)}addCategory(e){this.state.categoriesPlayed.includes(e)||(this.state.categoriesPlayed.push(e),this.save())}buyItem(e,a){return this.state.coins>=a&&!this.state.ownedItems.includes(e)?(this.state.coins-=a,this.state.ownedItems.push(e),this.save(),!0):!1}equipItem(e,a){a==="background"?this.state.equippedBackground=e:this.state.equippedItems.includes(e)?this.state.equippedItems=this.state.equippedItems.filter(t=>t!==e):(this.state.equippedItems.length>=3&&this.state.equippedItems.shift(),this.state.equippedItems.push(e)),this.save()}hasData(){return this.state.initialized}}class ce{constructor(e,a){if(this.bgms={},this.currentBgm=null,this.currentTrack=null,this.isMuted=!0,this.base=e||"/ai-quest-widget/",this.tracks={title:`${this.base}audio/title-bgm.mp3`,home:`${this.base}audio/selection-bgm.mp3`,quest_select:`${this.base}audio/quest-bgm.mp3?v=3`,quiz:`${this.base}audio/quest-bgm.mp3?v=3`,result:`${this.base}audio/results-bgm.mp3`,shop:`${this.base}audio/dress-up-bgm.mp3`,book:`${this.base}audio/item-bgm.mp3`},a){const t=()=>{this.currentBgm&&this.currentBgm.paused&&!this.isMuted&&this.currentBgm.play().catch(i=>console.warn("Still can't play audio:",i)),a.removeEventListener("click",t),a.removeEventListener("touchstart",t)};a.addEventListener("click",t),a.addEventListener("touchstart",t)}}_getOrCreateAudio(e){if(!this.bgms[e]){const a=this.tracks[e];if(!a)return null;const t=new Audio(a);t.loop=!0,t.volume=.3,this.bgms[e]=t}return this.bgms[e]}playBgm(e){if(this.isMuted||this.currentTrack===e)return;this.currentBgm&&(this.currentBgm.pause(),this.currentBgm.currentTime=0);const a=this._getOrCreateAudio(e);a&&(this.currentBgm=a,this.currentTrack=e,this.currentBgm.play().catch(t=>{console.warn("Autoplay prevented. Audio will play on first interaction.",t)}))}stopBgm(){this.currentBgm&&(this.currentBgm.pause(),this.currentBgm.currentTime=0,this.currentBgm=null,this.currentTrack=null)}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.currentBgm?this.currentBgm.pause():!this.isMuted&&this.currentBgm&&this.currentBgm.play().catch(e=>console.warn(e)),this.isMuted}}const B="/ai-quest-widget/assets/item_ribbon-BMZKFSTK.png",j="/ai-quest-widget/assets/item_hat-RepAZ3TA.png",K="/ai-quest-widget/assets/item_glasses-DhlnUddV.png",F="/ai-quest-widget/assets/item_crown-D7nBL-uq.png",Z="/ai-quest-widget/assets/item_flower-C5GeFQpf.png",P="/ai-quest-widget/assets/item_star-D1ddShNG.png",N="/ai-quest-widget/assets/char_egg-BoDC-TF2.png",Q="/ai-quest-widget/assets/char_chick-yL5Opkl4.png",R="/ai-quest-widget/assets/char_kitten-DFnxpDmk.png",O="/ai-quest-widget/assets/char_rabbit-DPpJQA6S.png",H="/ai-quest-widget/assets/char_unicorn-CjkCX6ss.png",J="/ai-quest-widget/assets/icon_badge-hDjo5qP0.png",D="/ai-quest-widget/assets/icon_check-CTb3SxQy.png",y="/ai-quest-widget/assets/icon_streak-jh4Dxp9H.png",C="/ai-quest-widget/assets/icon_effort-B0u8WC7m.png",x="/ai-quest-widget/assets/icon_sparkle-ih75G-Eo.png",A="/ai-quest-widget/assets/icon_trophy-BunS3ekP.png",ee="/ai-quest-widget/assets/icon_box-3bsgxuRk.png",ae="/ai-quest-widget/assets/item_bg_meadow-DQnthNCr.png",le="/ai-quest-widget/assets/item_bg_night-CThEXUPv.png",de="/ai-quest-widget/assets/item_bg_ocean-Bp5PdreA.png",pe="/ai-quest-widget/assets/item_bg_sakura-BW27chJD.png",m=[{id:"egg",name:"たまごちゃん",emoji:"🥚",img:N,minLevel:1,maxLevel:5,description:"まだ生まれたばかり…やさしく育ててね",bodyColor:"#fef3e2",accentColor:"#f5d6a8"},{id:"chick",name:"ひよこちゃん",emoji:"🐣",img:Q,minLevel:6,maxLevel:10,description:"ぴよぴよ！好奇心いっぱいだよ",bodyColor:"#fff9c4",accentColor:"#ffd54f"},{id:"kitten",name:"こねこちゃん",emoji:"🐱",img:R,minLevel:11,maxLevel:20,description:"にゃ〜ん♪ 一緒に学ぼう！",bodyColor:"#ffe0e6",accentColor:"#f48fb1"},{id:"bunny",name:"うさぎちゃん",emoji:"🐰",img:O,minLevel:21,maxLevel:35,description:"ぴょんぴょん！どんどん賢くなってるね",bodyColor:"#e8f5e9",accentColor:"#81c784"},{id:"unicorn",name:"ユニコーン",emoji:"🦄",img:H,minLevel:36,maxLevel:999,description:"すごい！AIマスターに近づいてるよ✨",bodyColor:"#ede7f6",accentColor:"#b39ddb"}],G=[{id:"ribbon",name:"リボン",icon:"🎀",iconImg:B,price:50,type:"accessory"},{id:"hat",name:"ぼうし",icon:"🎩",iconImg:j,price:80,type:"accessory"},{id:"glasses",name:"メガネ",icon:"👓",iconImg:K,price:60,type:"accessory"},{id:"crown",name:"おうかん",icon:"👑",iconImg:F,price:150,type:"accessory"},{id:"flower",name:"おはな",icon:"🌸",iconImg:Z,price:40,type:"accessory"},{id:"star",name:"ほし",icon:"⭐",iconImg:P,price:100,type:"accessory"},{id:"heart",name:"ハート",icon:"💖",iconImg:P,price:70,type:"accessory"},{id:"bow",name:"ちょうネクタイ",icon:"🎀",iconImg:B,price:90,type:"accessory"},{id:"bg_meadow",name:"おはな畑",icon:"🌷",iconImg:ae,price:120,type:"background"},{id:"bg_night",name:"ほしぞら",icon:"🌙",iconImg:le,price:120,type:"background"},{id:"bg_ocean",name:"うみ",icon:"🌊",iconImg:de,price:120,type:"background"},{id:"bg_sakura",name:"さくら",icon:"🌸",iconImg:pe,price:150,type:"background"}],ge=[{id:"first_quest",name:"はじめてのクエスト",icon:"🏅",iconImg:J,condition:"Complete first quest"},{id:"perfect",name:"パーフェクト！",icon:"💯",iconImg:D,condition:"Get all 3 correct"},{id:"streak_3",name:"3日連続！",icon:"🔥",iconImg:y,condition:"3 day streak"},{id:"streak_7",name:"7日連続！",icon:"💪",iconImg:C,condition:"7 day streak"},{id:"streak_14",name:"14日連続！",icon:"🔥",iconImg:y,condition:"14 day streak"},{id:"streak_30",name:"学びの達人ママ",icon:"👑",iconImg:A,condition:"30 day streak"},{id:"daily_7",name:"デイリー7日",icon:"📅",iconImg:C,condition:"7 daily challenges"},{id:"map_complete",name:"冒険マップ完了",icon:"🗺️",iconImg:A,condition:"Complete adventure map"},{id:"level_10",name:"レベル10到達",icon:"⭐",iconImg:x,condition:"Reach level 10"},{id:"level_20",name:"レベル20到達",icon:"🌟",iconImg:x,condition:"Reach level 20"},{id:"all_categories",name:"全カテゴリ制覇",icon:"🏆",iconImg:A,condition:"Try all categories"},{id:"collector",name:"コレクター",icon:"👗",iconImg:ee,condition:"Buy 5 items"},{id:"evolution",name:"はじめての進化",icon:"🦋",iconImg:x,condition:"First evolution"}];class X{constructor(e){this.state=e}getStage(){return m.find(e=>this.state.level>=e.minLevel&&this.state.level<=e.maxLevel)||m[0]}getNextStage(){const e=m.findIndex(a=>this.state.level>=a.minLevel&&this.state.level<=a.maxLevel);return m[e+1]||null}addXP(e){const a=this.getStage();this.state.xp+=e;const t=this.getXPForLevel(this.state.level+1);let i=!1;for(;this.state.xp>=t;)this.state.xp-=t,this.state.level++;const s=this.getStage();return a.id!==s.id&&(i=!0),{evolved:i,newStage:this.getStage()}}getXPForLevel(e){return Math.floor(30+e*10)}getXPProgress(){const e=this.getXPForLevel(this.state.level+1);return{current:this.state.xp,needed:e}}}const he={egg:N,chick:Q,kitten:R,bunny:O,unicorn:H};class we{constructor(e,a,t){this.container=e,this.gameState=a,this.onClick=t,this.unsubscribe=a.subscribe(()=>this.render()),this.render()}render(){const e=this.gameState.get("level"),a=m.find(o=>e>=o.minLevel&&e<=o.maxLevel)||m[0],t=he[a.id],i=this.gameState.get("dailyChallengeDate"),s=new Date().toDateString(),n=i!==s;this.container.innerHTML=`
      <button class="aqw-floating-btn aqw-bounce" title="AI Quest を開く">
        <img src="${t}" class="aqw-floating-img" alt="${a.name}" />
        ${n?'<span class="aqw-floating-dot"></span>':""}
      </button>
    `,this.container.querySelector(".aqw-floating-btn").addEventListener("click",this.onClick)}playReaction(){const e=this.container.querySelector(".aqw-floating-btn");e&&(e.classList.add("aqw-reaction"),setTimeout(()=>e.classList.remove("aqw-reaction"),600))}destroy(){this.unsubscribe&&this.unsubscribe()}}const me="/ai-quest-widget/assets/icon_heart-mcaKCwqz.png",ue="/ai-quest-widget/assets/icon_sweat-EQBrJB2Y.png",qe="/ai-quest-widget/assets/icon_cake-D4NUElC0.png",I="/ai-quest-widget/assets/icon_success-TFetVvgr.png",xe={egg:N,chick:Q,kitten:R,bunny:O,unicorn:H},fe={ribbon:B,hat:j,glasses:K,crown:F,flower:Z,star:P,heart:P,bow:B},U=200,W=220,ve=20,be=40,ye=160,ke=160,Se={egg:{hat:{x:52,y:5,w:90,h:60},crown:{x:48,y:0,w:100,h:58},ribbon:{x:138,y:28,w:52,h:52},glasses:{x:46,y:98,w:105,h:46},flower:{x:5,y:32,w:48,h:48},star:{x:148,y:2,w:42,h:42},heart:{x:2,y:100,w:42,h:42},bow:{x:68,y:172,w:58,h:42}},chick:{hat:{x:55,y:8,w:85,h:55},crown:{x:50,y:2,w:95,h:55},ribbon:{x:135,y:22,w:50,h:50},glasses:{x:48,y:90,w:100,h:44},flower:{x:8,y:28,w:46,h:46},star:{x:146,y:0,w:42,h:42},heart:{x:2,y:92,w:42,h:42},bow:{x:68,y:168,w:58,h:42}},kitten:{hat:{x:52,y:5,w:90,h:58},crown:{x:48,y:0,w:100,h:56},ribbon:{x:136,y:20,w:52,h:52},glasses:{x:46,y:92,w:104,h:44},flower:{x:6,y:25,w:46,h:46},star:{x:148,y:0,w:42,h:42},heart:{x:2,y:95,w:42,h:42},bow:{x:68,y:170,w:58,h:42}},bunny:{hat:{x:55,y:10,w:85,h:55},crown:{x:50,y:5,w:95,h:55},ribbon:{x:132,y:18,w:52,h:52},glasses:{x:48,y:95,w:100,h:44},flower:{x:8,y:22,w:46,h:46},star:{x:146,y:0,w:42,h:42},heart:{x:2,y:98,w:42,h:42},bow:{x:68,y:168,w:58,h:42}},unicorn:{hat:{x:52,y:8,w:88,h:56},crown:{x:48,y:2,w:98,h:56},ribbon:{x:136,y:22,w:52,h:52},glasses:{x:46,y:90,w:104,h:44},flower:{x:5,y:28,w:46,h:46},star:{x:148,y:0,w:42,h:42},heart:{x:2,y:92,w:42,h:42},bow:{x:68,y:172,w:58,h:42}}},M={};class te{constructor(e,a){this.container=e,this.gameState=a,this.animFrame=null}render(){const e=this.gameState.get("level"),a=m.find(s=>e>=s.minLevel&&e<=s.maxLevel)||m[0],t=this.gameState.get("equippedBackground");let i="";t==="bg_meadow"?i="aqw-bg-meadow":t==="bg_night"?i="aqw-bg-night":t==="bg_ocean"?i="aqw-bg-ocean":t==="bg_sakura"&&(i="aqw-bg-sakura"),this.container.innerHTML=`
      <div class="aqw-character-stage ${i}">
        <div class="aqw-character-sparkles aqw-sparkles-container"></div>
        <div class="aqw-character-body">
          <canvas class="aqw-char-canvas" width="${U}" height="${W}"></canvas>
        </div>
        <div class="aqw-character-shadow"></div>
        <div class="aqw-character-name-tag">
          <img src="${a.img}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" />
          <span class="aqw-character-name">${a.name}</span>
        </div>
      </div>
    `,this.loadAndDraw(a),this.startAnimation(a)}async loadAndDraw(e){const a=this.gameState.get("equippedItems")||[],t={[e.id]:xe[e.id]};a.forEach(i=>{const s=this.getImageKey(i);t[s]=fe[s]}),await Promise.all(Object.entries(t).map(([i,s])=>this.loadImage(i,s))),this.drawCanvas(e)}getImageKey(e){return e==="bow"?"ribbon":e==="heart"?"star":e}loadImage(e,a){return M[e]?Promise.resolve():new Promise(t=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{M[e]=this.removeWhiteBg(i),t()},i.onerror=()=>t(),i.src=a})}removeWhiteBg(e){const a=document.createElement("canvas");a.width=e.naturalWidth||e.width,a.height=e.naturalHeight||e.height;const t=a.getContext("2d");t.drawImage(e,0,0);try{const i=t.getImageData(0,0,a.width,a.height),s=i.data;for(let n=0;n<s.length;n+=4){const o=s[n],p=s[n+1],l=s[n+2],r=(o+p+l)/3;if(r>250)s[n+3]=0;else if(r>230){const h=(250-r)/20;s[n+3]=Math.round(h*s[n+3])}}t.putImageData(i,0,0)}catch(i){console.warn("Could not process image pixels:",i)}return a}drawCanvas(e){const a=this.container.querySelector(".aqw-char-canvas");if(!a)return;const t=a.getContext("2d");t.clearRect(0,0,U,W);const i=M[e.id];i&&t.drawImage(i,ve,be,ye,ke);const s=this.gameState.get("equippedItems")||[],n=Se[e.id]||{};s.forEach(o=>{const p=this.getImageKey(o),l=M[p],r=n[o];l&&r&&t.drawImage(l,r.x,r.y,r.w,r.h)})}startAnimation(e){const a=this.container.querySelector(".aqw-character-body");if(!a)return;let t=0;const i=()=>{t++;const s=e.id==="chick"?.08:.04,n=e.id==="chick"?8:e.id==="egg"?3:5,o=Math.sin(t*s)*n,p=Math.sin(t*s*.7)*2;a.style.transform=`translateY(${o}px) rotate(${p}deg)`,e.id==="unicorn"&&t%20===0&&this.addSparkle(),this.animFrame=requestAnimationFrame(i)};i()}addSparkle(){const e=this.container.querySelector(".aqw-sparkles-container");if(!e)return;const a=document.createElement("img");a.src=x,a.className="aqw-sparkle",a.style.mixBlendMode="multiply",a.style.left=Math.random()*100+"%",a.style.top=Math.random()*100+"%",a.style.animationDuration=1+Math.random()+"s",e.appendChild(a),setTimeout(()=>a.remove(),2e3)}playReaction(e){const a=this.container.querySelector(".aqw-character-body");a&&(e==="happy"?(a.classList.add("aqw-char-happy"),this.showEmoji(me),setTimeout(()=>a.classList.remove("aqw-char-happy"),800)):e==="sad"?(a.classList.add("aqw-char-sad"),this.showEmoji(ue),setTimeout(()=>a.classList.remove("aqw-char-sad"),800)):e==="evolve"?(a.classList.add("aqw-char-evolve"),this.showEmoji(I),setTimeout(()=>a.classList.remove("aqw-char-evolve"),1500)):e==="eat"&&(a.classList.add("aqw-char-happy"),this.showEmoji(qe),setTimeout(()=>a.classList.remove("aqw-char-happy"),800)))}showEmoji(e){const a=this.container.querySelector(".aqw-character-stage");if(!a)return;const t=document.createElement("img");t.src=e,t.className="aqw-floating-emoji",t.style.mixBlendMode="multiply",t.style.left=40+Math.random()*20+"%",a.appendChild(t),setTimeout(()=>t.remove(),1200)}destroy(){this.animFrame&&cancelAnimationFrame(this.animFrame)}}function $e(c){const e=new Date().toDateString(),a=c.get("lastPlayDate");let t=c.get("streak")||0,i=!1,s=null;if(!a)t=1,i=!0;else if(a===e)i=!1;else{const n=new Date(a);Math.floor((new Date-n)/(1e3*60*60*24))===1?t++:t=1,i=!0}return i&&(s=ie(t),c.update({streak:t,lastPlayDate:e,lastStreakDate:e})),{streak:t,isNewDay:i,milestone:s}}function L(c){return c>=30?2.5:c>=14?2:c>=7?1.5:c>=3?1.2:1}function ie(c){return c===30?"30日連続達成！学びの達人ママ！":c===14?"14日連続！すごい継続力！":c===7?"7日連続達成！1週間がんばったね！":c===3?"3日連続！いい調子！":null}const k="/ai-quest-widget/assets/icon_coin-DARQy9Un.png",S="/ai-quest-widget/assets/icon_book-DjZLZIiy.png";class Ie{constructor(e,a,t){this.container=e,this.gameState=a,this.onNavigate=t,this.charView=null}render(){var d,u;const e=this.gameState.get("level");this.gameState.get("xp");const a=this.gameState.get("coins"),t=this.gameState.get("streak")||0,i=new X(this.gameState.state),s=i.getStage(),n=i.getNextStage(),o=i.getXPProgress(),p=Math.round(o.current/o.needed*100),l=L(t),r=this.gameState.get("dailyChallengeDate")===new Date().toISOString().slice(0,10);this.container.innerHTML=`
      <div class="aqw-screen aqw-home-screen">
        <header class="aqw-home-header">
          <div class="aqw-header-left">
            <div class="aqw-level-badge">
              <span class="aqw-level-label">Lv.</span>
              <span class="aqw-level-number">${e}</span>
            </div>
          </div>
          <div class="aqw-header-center">
            <div class="aqw-streak-badge ${t>0?"aqw-active":""}">
              <img src="${y}" style="height:16px; mix-blend-mode:multiply;" class="aqw-streak-icon-img" />
              <span class="aqw-streak-count">${t}日</span>
              ${l>1?`<span class="aqw-streak-multiplier">x${l}</span>`:""}
            </div>
          </div>
          <div class="aqw-header-right">
            <div class="aqw-coin-badge">
              <img src="${k}" style="height:16px; mix-blend-mode:multiply;" class="aqw-coin-icon-img" />
              <span class="aqw-coin-count">${a}</span>
            </div>
          </div>
        </header>

        <div class="aqw-xp-bar-container">
          <div class="aqw-xp-bar">
            <div class="aqw-xp-fill" style="width: ${p}%"></div>
          </div>
          <span class="aqw-xp-text">${o.current} / ${o.needed} XP</span>
        </div>

        <div class="aqw-character-container aqw-home-character"></div>

        ${n?`
          <div class="aqw-evolution-hint">
            <img src="${x}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" />
            <span class="aqw-hint-text">Lv.${n.minLevel}で <strong>${n.name}</strong><img src="${n.img}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply; margin-left:4px;" /> に進化！</span>
          </div>
        `:`
          <div class="aqw-evolution-hint aqw-max-evolution">
            <img src="${F}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" />
            <span class="aqw-hint-text">最終進化おめでとう！</span>
          </div>
        `}

        <div class="aqw-home-actions">
          <button class="aqw-action-btn aqw-quest-btn aqw-btn-go-quest">
            <img src="${S}" style="height:22px; margin-bottom:2px;" class="aqw-action-icon-img" />
            <span class="aqw-action-text">クエストに出発！</span>
            <span class="aqw-action-sub">3問チャレンジ</span>
          </button>
          ${r?"":`
            <button class="aqw-action-btn aqw-daily-btn aqw-btn-go-daily">
              <img src="${x}" style="height:22px; margin-bottom:2px;" class="aqw-action-icon-img" />
              <span class="aqw-action-text">今日の1問</span>
              <span class="aqw-action-sub">デイリーチャレンジ</span>
            </button>
          `}
        </div>

        <div class="aqw-home-message">
          <span class="aqw-message-bubble">${this.getMessage(s)}</span>
        </div>
      </div>
    `;const h=this.container.querySelector(".aqw-home-character");this.charView=new te(h,this.gameState),this.charView.render(),(d=this.container.querySelector(".aqw-btn-go-quest"))==null||d.addEventListener("click",()=>{this.onNavigate("quest")}),(u=this.container.querySelector(".aqw-btn-go-daily"))==null||u.addEventListener("click",()=>{this.onNavigate("daily")})}getMessage(e){const a={egg:["わくわく…なかからコンコンしてるよ！","ぬくぬく…あたたかいね♪"],chick:["ぴよぴよ！今日もがんばろう♪","AIってすごいね！もっと知りたい！"],kitten:["にゃ〜ん♪ 一緒に学ぶの楽しいにゃ！","AIマスターに近づいてるにゃ"],bunny:["ぴょん！今日もAI博士に一歩近づいたね！","すごいすごい！どんどん賢くなってるよ"],unicorn:["キラキラ あなたはAIマスターの素質があるわ！","一緒にもっと上を目指しましょう"]},t=a[e.id]||a.egg;return t[Math.floor(Math.random()*t.length)]}destroy(){this.charView&&this.charView.destroy()}}const Ce="/ai-quest-widget/assets/icon_ai_basic-B7_2kz61.png",Ae="/ai-quest-widget/assets/icon_gen_ai-Dyj-mEB5.png",Le="/ai-quest-widget/assets/icon_prompt-jTZ-wNbM.png",ze="/ai-quest-widget/assets/icon_ai_use-BEF11WpI.png",_=[{id:"basics",name:"AI基礎",icon:"🤖",iconImg:Ce,color:"#7c6ef0"},{id:"genai",name:"生成AI",icon:"✨",iconImg:Ae,color:"#e06090"},{id:"prompt",name:"プロンプト術",icon:"💬",iconImg:Le,color:"#50b0a0"},{id:"usage",name:"AI活用術",icon:"🚀",iconImg:ze,color:"#e0a030"}],se={basics:[{q:"「AI」は何の略でしょう？",choices:["Artificial Intelligence","Auto Information","Advanced Internet","Applied Idea"],answer:0,explanation:"AIは「Artificial Intelligence（人工知能）」の略です。人間のように考えたり学んだりするコンピュータの技術のことです🧠"},{q:"「機械学習」とはどんな技術？",choices:["コンピュータがデータから学ぶ技術","機械を自動で修理する技術","ロボットを歩かせる技術","パソコンを速くする技術"],answer:0,explanation:"機械学習は、コンピュータがたくさんのデータを見てパターンを見つけ、自分で判断できるようになる技術です📊"},{q:"ディープラーニングの「ディープ」とは？",choices:["層が深いニューラルネットワーク","深海で動くAI","深い考えをするAI","深夜に学習するAI"],answer:0,explanation:"「deep（深い）」は、人間の脳を模したネットワーク（ニューラルネットワーク）の層が何層も深く重なっていることを表します🧬"},{q:"チャットボットとは何でしょう？",choices:["自動で会話するプログラム","チャットが好きなロボット","AIが製造した機械","通話アプリの一種"],answer:0,explanation:"チャットボットは、人間の代わりにテキストや音声で自動応答するプログラムです。カスタマーサポートなどでよく使われています💬"},{q:"画像認識AIの身近な活用例は？",choices:["スマホの顔認証","電卓アプリ","メモ帳","目覚まし時計"],answer:0,explanation:"スマホの顔認証（Face ID等）は画像認識AIの代表例です！他にも自動運転やレジの商品認識などに使われています📱"}],genai:[{q:"ChatGPTを開発した会社は？",choices:["OpenAI","Google","Apple","Amazon"],answer:0,explanation:"ChatGPTはOpenAI社が2022年に公開した対話型AIです。世界中で話題になり、AI時代の幕開けとも言われています🌟"},{q:"「プロンプト」とは何のこと？",choices:["AIへの指示・質問文","AIのプログラム言語","AIの電源ボタン","AIの記憶容量"],answer:0,explanation:"プロンプトは、AIに何をしてほしいか伝える「お願い文」のことです。上手な指示を出すとAIからより良い回答が返ってきます✍️"},{q:"画像を自動生成できるAIは？",choices:["Midjourney","Excel","WordPress","LINE"],answer:0,explanation:"MidjourneyやDALL-E、Stable Diffusionなどが画像生成AIとして有名です。テキストから絵を描いてくれます🎨"},{q:"「ハルシネーション」とは？",choices:["AIが事実でない情報を作ること","AIが幻覚を見ること","AIが眠ること","AIが怒ること"],answer:0,explanation:"ハルシネーション（幻覚）とは、AIがもっともらしいけど実は間違った情報を自信満々に答えてしまう現象です⚠️ 必ずファクトチェックしましょう！"},{q:"LLMの正式名称は？",choices:["Large Language Model","Long Learning Machine","Light Logic Memory","Link Library Manager"],answer:0,explanation:"LLM = Large Language Model（大規模言語モデル）。膨大なテキストデータで学習し、自然な文章を生成できるAIのことです📚"}],prompt:[{q:"良いプロンプトに一番大切なのは？",choices:["具体的で明確な指示","できるだけ短い文","敬語を使うこと","英語で書くこと"],answer:0,explanation:"AIは具体的な指示ほど正確に答えられます。「何を・どんな形式で・誰向けに」を明確にするのがコツです🎯"},{q:"「ロール設定」とはどんなテクニック？",choices:["AIに役割を与えること","AIにパスワードを設定すること","AIの声を変えること","AIの画面を回転させること"],answer:0,explanation:"「あなたは料理研究家です」のようにAIに役割（ロール）を与えると、その専門家らしい回答が得やすくなります👩‍🍳"},{q:"Few-shotプロンプトとは？",choices:["例を示して指示する方法","少ない文字で指示する方法","写真で指示する方法","何回も繰り返す方法"],answer:0,explanation:"「例：入力→出力」のように具体例を数個（few）見せてから指示すると、AIが意図を理解しやすくなります📝"},{q:"出力形式を指定するメリットは？",choices:["欲しい形で回答が得られる","AIが速くなる","AIが賢くなる","料金が安くなる"],answer:0,explanation:"「箇条書きで」「表形式で」「〇文字以内で」と指定すると、すぐ使える形で回答がもらえて効率的です📋"},{q:"プロンプトを改善する方法は？",choices:["結果を見て指示を修正する","AIを再インストールする","パソコンを買い替える","何もせず待つ"],answer:0,explanation:"プロンプトは一発で完璧にならなくてOK！結果を見て「もっと詳しく」「別の切り口で」と修正を重ねるのが上達のコツです🔄"}],usage:[{q:"ママのAI活用で人気なのは？",choices:["献立作成・レシピ提案","ゲーム開発","ロケット設計","株のデイトレード"],answer:0,explanation:"「冷蔵庫の残り物で作れるレシピ教えて」など、毎日の食事づくりをAIにサポートしてもらうママが増えています🍳"},{q:"AIで時短できることは？",choices:["メール作成・文章要約","洗濯物を畳む","お風呂を沸かす","布団を干す"],answer:0,explanation:"メールの下書き、長い文章の要約、翻訳など、テキスト作業はAIの得意分野！空いた時間を家族との時間に使えます⏰"},{q:"AIを安全に使うコツは？",choices:["個人情報を入力しない","Wi-Fiを切って使う","夜だけ使う","毎日パスワードを変える"],answer:0,explanation:"AIチャットに本名・住所・クレジットカード番号などの個人情報を入れないようにしましょう。データが学習に使われる可能性があります🔒"},{q:"AI活用で特に注意すべきことは？",choices:["情報の正確性を確認する","AIの言うことを100%信じる","なるべく多く質問する","英語だけで使う"],answer:0,explanation:"AIは間違えることもあります（ハルシネーション）。大事なことは必ず自分でも調べて確認するクセをつけましょう✅"},{q:"AIにできないことは？",choices:["人間のように感情を持つこと","文章を書くこと","翻訳すること","画像を認識すること"],answer:0,explanation:"AIは膨大なデータ処理が得意ですが、本当の意味での感情や共感は持ちません。人間だからこそできる温かさがあります💕"}]};class Me{constructor(){this.currentCategory=null,this.currentQuestions=[],this.currentIndex=0,this.results=[]}startQuest(e){this.currentCategory=e;const a=[...se[e]];for(let t=a.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[a[t],a[i]]=[a[i],a[t]]}this.currentQuestions=a.slice(0,3),this.currentQuestions=this.currentQuestions.map(t=>{const i=t.choices.map((s,n)=>n);for(let s=i.length-1;s>0;s--){const n=Math.floor(Math.random()*(s+1));[i[s],i[n]]=[i[n],i[s]]}return{...t,choices:i.map(s=>t.choices[s]),answer:i.indexOf(t.answer)}}),this.currentIndex=0,this.results=[]}getCurrentQuestion(){return this.currentQuestions[this.currentIndex]}answerQuestion(e){const a=this.currentQuestions[this.currentIndex],t=e===a.answer;return this.results.push({correct:t,question:a}),this.currentIndex++,{correct:t,explanation:a.explanation}}isFinished(){return this.currentIndex>=this.currentQuestions.length}getResults(){const e=this.results.filter(a=>a.correct).length;return{total:this.results.length,correct:e,results:this.results,category:this.currentCategory}}}const _e="/ai-quest-widget/assets/icon_next-CNn2Lfg4.png",ne="/ai-quest-widget/assets/icon_nav_home-FXoak6sx.png",Y="/ai-quest-widget/assets/icon_back-CidsW44X.png";class Be{constructor(e,a,t,i){this.container=e,this.gameState=a,this.onNavigate=t,this.audioManager=i,this.quiz=new Me,this.phase="select",this.answerResult=null,this.answered=!1}render(){switch(this.phase){case"select":this.renderCategorySelect();break;case"quiz":this.renderQuestion();break;case"result":this.renderAnswerResult();break;case"summary":this.renderSummary();break}}renderCategorySelect(){var e;this.container.innerHTML=`
      <div class="aqw-screen aqw-quest-screen">
        <header class="aqw-screen-header">
          <button class="aqw-back-btn aqw-btn-back-home">
            <img src="${Y}" style="height:16px; mix-blend-mode:multiply;" />
          </button>
          <h2 class="aqw-screen-title"><img src="${S}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> クエスト選択</h2>
          <div class="aqw-spacer"></div>
        </header>

        <div class="aqw-quest-intro">
          <p class="aqw-quest-intro-text">どのカテゴリに挑戦する？<br>3問のクイズに答えてXPをゲットしよう！</p>
        </div>

        <div class="aqw-category-grid">
          ${_.map(a=>`
            <button class="aqw-category-card" data-category="${a.id}" style="--cat-color: ${a.color}">
              <img src="${a.iconImg}" class="aqw-cat-icon-img" style="height:48px; margin-bottom:8px; mix-blend-mode:multiply;" />
              <span class="aqw-cat-name">${a.name}</span>
              <span class="aqw-cat-badge">3問</span>
            </button>
          `).join("")}
        </div>
      </div>
    `,(e=this.container.querySelector(".aqw-btn-back-home"))==null||e.addEventListener("click",()=>this.onNavigate("home")),this.container.querySelectorAll(".aqw-category-card").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.category;this.quiz.startQuest(t),this.gameState.addCategory(t),this.phase="quiz",this.audioManager&&this.audioManager.playBgm("quiz"),this.answered=!1,this.render()})})}renderQuestion(){const e=this.quiz.getCurrentQuestion(),a=this.quiz.currentIndex+1,t=this.quiz.currentQuestions.length,i=_.find(s=>s.id===this.quiz.currentCategory);this.container.innerHTML=`
      <div class="aqw-screen aqw-quest-screen aqw-quiz-active">
        <header class="aqw-quiz-header" style="--cat-color: ${i.color}">
          <div class="aqw-quiz-progress">
            <div class="aqw-quiz-progress-bar">
              <div class="aqw-quiz-progress-fill" style="width: ${a/t*100}%"></div>
            </div>
            <span class="aqw-quiz-progress-text">${a} / ${t}</span>
          </div>
          <div class="aqw-quiz-category-badge">
            <img src="${i.iconImg}" style="height:20px; mix-blend-mode:multiply; vertical-align:middle; margin-right:4px;" /> ${i.name}
          </div>
        </header>

        <div class="aqw-quiz-content">
          <div class="aqw-question-card">
            <p class="aqw-question-text">${e.q}</p>
          </div>

          <div class="aqw-choices-container">
            ${e.choices.map((s,n)=>`
              <button class="aqw-choice-btn" data-index="${n}">
                <span class="aqw-choice-letter">${["A","B","C","D"][n]}</span>
                <span class="aqw-choice-text">${s}</span>
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `,this.container.querySelectorAll(".aqw-choice-btn").forEach(s=>{s.addEventListener("click",()=>{var p;if(this.answered)return;this.answered=!0;const n=parseInt(s.dataset.index);this.answerResult=this.quiz.answerQuestion(n);const o=this.quiz.currentQuestions[this.quiz.currentIndex-1].answer;s.classList.add(this.answerResult.correct?"aqw-correct":"aqw-wrong"),this.answerResult.correct||(p=this.container.querySelector(`[data-index="${o}"]`))==null||p.classList.add("aqw-correct"),setTimeout(()=>{this.phase="result",this.render()},800)})})}renderAnswerResult(){var t;const e=this.answerResult,a=this.quiz.isFinished();this.container.innerHTML=`
      <div class="aqw-screen aqw-quest-screen aqw-result-screen">
        <div class="aqw-result-content">
          <div class="aqw-result-icon ${e.correct?"aqw-correct":"aqw-wrong"}">
            <img src="${e.correct?I:C}" style="height:64px; mix-blend-mode:multiply;" />
          </div>
          <h3 class="aqw-result-title ${e.correct?"aqw-correct":"aqw-wrong"}">
            ${e.correct?"せいかい！":"おしい！"}
          </h3>

          ${e.correct?`
            <div class="aqw-result-rewards">
              <span class="aqw-reward-item">+15 XP</span>
              <span class="aqw-reward-item">+10 <img src="${k}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /></span>
            </div>
          `:`
            <div class="aqw-result-rewards">
              <span class="aqw-reward-item">+5 XP</span>
            </div>
          `}

          <div class="aqw-explanation-box">
            <p class="aqw-explanation-text">${e.explanation}</p>
          </div>

          <button class="aqw-btn aqw-btn-primary aqw-btn-lg aqw-btn-next">
            ${a?`<img src="${A}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> 結果を見る`:`<img src="${_e}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> つぎの問題へ`}
          </button>
        </div>
      </div>
    `,(t=this.container.querySelector(".aqw-btn-next"))==null||t.addEventListener("click",()=>{a?(this.phase="summary",this.audioManager&&this.audioManager.playBgm("result"),this.applyRewards(),this.render()):(this.phase="quiz",this.answered=!1,this.render())})}applyRewards(){const e=this.quiz.getResults(),a=new X(this.gameState.state);let t=0,i=0;e.results.forEach(o=>{o.correct?(t+=15,i+=10):t+=5}),e.correct===e.total&&(t+=10,i+=15,this.gameState.addBadge("perfect"));const s=this.gameState.getStreakMultiplier();i=Math.floor(i*s);const n=a.addXP(t);this.gameState.update({level:a.state.level,xp:a.state.xp,coins:this.gameState.get("coins")+i,totalQuests:this.gameState.get("totalQuests")+1,totalCorrect:this.gameState.get("totalCorrect")+e.correct}),this.gameState.updateStreak(),this.gameState.get("totalQuests")===1&&this.gameState.addBadge("first_quest"),this.gameState.get("streak")>=3&&this.gameState.addBadge("streak_3"),this.gameState.get("streak")>=7&&this.gameState.addBadge("streak_7"),this.gameState.get("streak")>=14&&this.gameState.addBadge("streak_14"),this.gameState.get("streak")>=30&&this.gameState.addBadge("streak_30"),this.gameState.get("level")>=10&&this.gameState.addBadge("level_10"),this.gameState.get("level")>=20&&this.gameState.addBadge("level_20"),this.gameState.get("categoriesPlayed").length>=4&&this.gameState.addBadge("all_categories"),n.evolved&&this.gameState.addBadge("evolution"),this._questResults={...e,totalXP:t,totalCoins:i,evolved:n.evolved,newStage:n.newStage}}renderSummary(){var i,s;const e=this._questResults,a=_.find(n=>n.id===e.category),t=this.gameState.getStreakMultiplier();this.container.innerHTML=`
      <div class="aqw-screen aqw-quest-screen aqw-summary-screen">
        <div class="aqw-summary-content">
          <h2 class="aqw-summary-title"><img src="${A}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> クエスト完了！</h2>

          <div class="aqw-summary-category">
            <img src="${a.iconImg}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> ${a.name}
          </div>

          <div class="aqw-summary-score">
            <div class="aqw-score-circle">
              <span class="aqw-score-number">${e.correct}</span>
              <span class="aqw-score-total">/ ${e.total}</span>
            </div>
            <p class="aqw-score-label">${e.correct===e.total?`パーフェクト！<img src="${I}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" />`:e.correct>=2?`すごい！<img src="${C}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" />`:"つぎはがんばろう！"}</p>
          </div>

          <div class="aqw-summary-rewards">
            <div class="aqw-reward-row">
              <span class="aqw-reward-label">獲得XP</span>
              <span class="aqw-reward-value">+${e.totalXP} XP</span>
            </div>
            <div class="aqw-reward-row">
              <span class="aqw-reward-label">獲得コイン</span>
              <span class="aqw-reward-value">+${e.totalCoins} <img src="${k}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /></span>
            </div>
            ${t>1?`
              <div class="aqw-reward-row aqw-bonus">
                <span class="aqw-reward-label">ストリークボーナス</span>
                <span class="aqw-reward-value">x${t}</span>
              </div>
            `:""}
            ${e.correct===e.total?`
              <div class="aqw-reward-row aqw-bonus">
                <span class="aqw-reward-label">パーフェクトボーナス</span>
                <span class="aqw-reward-value">+10 XP +15 <img src="${k}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /></span>
              </div>
            `:""}
          </div>

          ${e.evolved?`
            <div class="aqw-evolution-announcement">
              <div class="aqw-evolution-sparkles">
                <img src="${x}" style="height:24px; mix-blend-mode:multiply;" />
                <img src="${x}" style="height:32px; mix-blend-mode:multiply;" />
                <img src="${x}" style="height:24px; mix-blend-mode:multiply;" />
              </div>
              <h3 class="aqw-evolution-title"><img src="${I}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> 進化しました！</h3>
              <p class="aqw-evolution-name"><img src="${e.newStage.img}" style="height:48px; vertical-align:middle; mix-blend-mode:multiply;" /> ${e.newStage.name}</p>
              <p class="aqw-evolution-desc">${e.newStage.description}</p>
            </div>
          `:""}

          <div class="aqw-summary-actions">
            <button class="aqw-btn aqw-btn-primary aqw-btn-lg aqw-btn-back-home-summary">
              <img src="${ne}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> ホームに戻る
            </button>
            <button class="aqw-btn aqw-btn-secondary aqw-btn-md aqw-btn-another-quest">
              <img src="${S}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> もう一回チャレンジ
            </button>
          </div>
        </div>
      </div>
    `,(i=this.container.querySelector(".aqw-btn-back-home-summary"))==null||i.addEventListener("click",()=>{this.onNavigate("home")}),(s=this.container.querySelector(".aqw-btn-another-quest"))==null||s.addEventListener("click",()=>{this.phase="select",this.audioManager&&this.audioManager.playBgm("quest_select"),this.render()})}destroy(){}}class Pe{constructor(e,a,t){this.container=e,this.gameState=a,this.onNavigate=t,this.charView=null,this.selectedTab="accessory"}render(){var l;const e=this.gameState.get("coins"),a=this.gameState.get("ownedItems")||[],t=this.gameState.get("equippedItems")||[],i=this.gameState.get("equippedBackground"),s=G.filter(r=>r.type==="accessory"),n=G.filter(r=>r.type==="background"),o=this.selectedTab==="accessory"?s:n;this.container.innerHTML=`
      <div class="aqw-screen aqw-shop-screen">
        <header class="aqw-screen-header">
          <button class="aqw-back-btn aqw-btn-back-shop">
            <img src="${Y}" style="height:16px; mix-blend-mode:multiply;" />
          </button>
          <h2 class="aqw-screen-title"><img src="${ee}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> ショップ</h2>
          <div class="aqw-coin-badge aqw-small">
            <img src="${k}" style="height:16px; mix-blend-mode:multiply;" />
            <span class="aqw-coin-count">${e}</span>
          </div>
        </header>

        <div class="aqw-shop-preview aqw-shop-character"></div>

        <div class="aqw-shop-tabs">
          <button class="aqw-shop-tab ${this.selectedTab==="accessory"?"aqw-active":""}" data-tab="accessory">
            <img src="${j}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> アクセサリー
          </button>
          <button class="aqw-shop-tab ${this.selectedTab==="background"?"aqw-active":""}" data-tab="background">
            <img src="${ae}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply; border-radius:4px;" /> 背景
          </button>
        </div>

        <div class="aqw-shop-items">
          ${o.map(r=>{const h=a.includes(r.id),d=r.type==="background"?i===r.id:t.includes(r.id);return`
              <div class="aqw-shop-item ${h?"aqw-owned":""} ${d?"aqw-equipped":""}" data-id="${r.id}">
                ${r.iconImg?`<img src="${r.iconImg}" class="aqw-item-icon-img" style="width:32px; height:32px; mix-blend-mode:multiply;" />`:`<span class="aqw-item-icon">${r.icon}</span>`}
                <span class="aqw-item-name">${r.name}</span>
                ${h?`
                  <button class="aqw-item-action ${d?"aqw-unequip":"aqw-equip"}" data-id="${r.id}" data-type="${r.type}">
                    ${d?"はずす":"つける"}
                  </button>
                `:`
                  <button class="aqw-item-action aqw-buy ${e<r.price?"aqw-disabled":""}" data-id="${r.id}" data-price="${r.price}" data-type="${r.type}">
                    <img src="${k}" style="height:16px; vertical-align:middle; mix-blend-mode:multiply;" /> ${r.price}
                  </button>
                `}
              </div>
            `}).join("")}
        </div>
      </div>
    `;const p=this.container.querySelector(".aqw-shop-character");this.charView=new te(p,this.gameState),this.charView.render(),(l=this.container.querySelector(".aqw-btn-back-shop"))==null||l.addEventListener("click",()=>this.onNavigate("home")),this.container.querySelectorAll(".aqw-shop-tab").forEach(r=>{r.addEventListener("click",()=>{this.selectedTab=r.dataset.tab,this.render()})}),this.container.querySelectorAll(".aqw-item-action.aqw-buy:not(.aqw-disabled)").forEach(r=>{r.addEventListener("click",h=>{h.stopPropagation();const d=r.dataset.id,u=parseInt(r.dataset.price);this.gameState.buyItem(d,u)&&(this.gameState.get("ownedItems").length>=5&&this.gameState.addBadge("collector"),this.render())})}),this.container.querySelectorAll(".aqw-item-action.aqw-equip, .aqw-item-action.aqw-unequip").forEach(r=>{r.addEventListener("click",h=>{h.stopPropagation();const d=r.dataset.id,u=r.dataset.type;this.gameState.equipItem(d,u),this.render()})})}destroy(){this.charView&&this.charView.destroy()}}const E="/ai-quest-widget/assets/icon_locked-DT5gfMob.png";class De{constructor(e,a,t,i){this.container=e,this.gameState=a,this.onNavigate=t,this.config=i}render(){var v,z;const e=this.gameState.get("level"),a=this.gameState.get("totalQuests"),t=this.gameState.get("totalCorrect"),i=this.gameState.get("streak")||0,s=this.gameState.get("badges")||[],n=this.gameState.get("categoriesPlayed")||[],o=this.gameState.get("totalVideos")||0,p=this.gameState.get("totalTexts")||0,l=this.gameState.get("dailyChallengeStreak")||0,r=((v=this.config)==null?void 0:v.chapters)||[],h=this.gameState.get("chaptersCompleted")||[],d=r.length,u=h.length,$=d>0?Math.round(u/d*100):0;m.find(g=>e>=g.minLevel&&e<=g.maxLevel)||m[0];const f=a>0?Math.round(t/(a*3)*100):0;this.container.innerHTML=`
      <div class="aqw-screen aqw-book-screen">
        <header class="aqw-screen-header">
          <button class="aqw-back-btn aqw-btn-back-book">
            <img src="${Y}" style="height:16px; mix-blend-mode:multiply;" />
          </button>
          <h2 class="aqw-screen-title"><img src="${S}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" /> 学習きろく</h2>
          <div class="aqw-spacer"></div>
        </header>

        <div class="aqw-book-stats">
          <div class="aqw-stat-card">
            <img src="${S}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${a}</span>
            <span class="aqw-stat-label">クエスト数</span>
          </div>
          <div class="aqw-stat-card">
            <img src="${D}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${t}</span>
            <span class="aqw-stat-label">正解数</span>
          </div>
          <div class="aqw-stat-card">
            <img src="${C}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${f}%</span>
            <span class="aqw-stat-label">正答率</span>
          </div>
          <div class="aqw-stat-card">
            <img src="${y}" style="height:24px; margin-bottom:4px; mix-blend-mode:multiply;" />
            <span class="aqw-stat-value">${i}</span>
            <span class="aqw-stat-label">連続日数</span>
          </div>
        </div>

        <div class="aqw-book-stats aqw-book-stats-extra">
          <div class="aqw-stat-card">
            <span class="aqw-stat-value">${o}</span>
            <span class="aqw-stat-label">動画視聴</span>
          </div>
          <div class="aqw-stat-card">
            <span class="aqw-stat-value">${p}</span>
            <span class="aqw-stat-label">テキスト読了</span>
          </div>
          <div class="aqw-stat-card">
            <span class="aqw-stat-value">${l}</span>
            <span class="aqw-stat-label">デイリー連続</span>
          </div>
          ${d>0?`
            <div class="aqw-stat-card">
              <span class="aqw-stat-value">${$}%</span>
              <span class="aqw-stat-label">マップ進捗</span>
            </div>
          `:""}
        </div>

        <div class="aqw-book-section">
          <h3 class="aqw-section-title">進化ずかん</h3>
          <div class="aqw-evolution-gallery">
            ${m.map((g,q)=>{const b=e>=g.minLevel;return`
                <div class="aqw-evolution-card ${b?"aqw-unlocked":"aqw-locked"}">
                  ${b?`<img src="${g.img}" class="aqw-evo-img" style="height:60px; object-fit:contain; mix-blend-mode:multiply; margin-bottom:8px;" />`:'<span class="aqw-evo-emoji">?</span>'}
                  <span class="aqw-evo-name">${b?g.name:"???"}</span>
                  <span class="aqw-evo-level">${b?`Lv.${g.minLevel}`:`Lv.${g.minLevel}で解放`}</span>
                </div>
              `}).join("")}
          </div>
        </div>

        <div class="aqw-book-section">
          <h3 class="aqw-section-title"><img src="${J}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> バッジコレクション</h3>
          <div class="aqw-badge-grid">
            ${ge.map(g=>{const q=s.includes(g.id);return`
                <div class="aqw-badge-card ${q?"aqw-earned":"aqw-locked"}" title="${g.condition}">
                  ${q?`<img src="${g.iconImg}" style="height:32px; mix-blend-mode:multiply;" />`:`<img src="${E}" style="height:32px; mix-blend-mode:multiply; opacity:0.5;" />`}
                  <span class="aqw-badge-name">${q?g.name:"???"}</span>
                </div>
              `}).join("")}
          </div>
        </div>

        <div class="aqw-book-section">
          <h3 class="aqw-section-title"><img src="${S}" style="height:20px; vertical-align:middle; mix-blend-mode:multiply;" /> カテゴリ</h3>
          <div class="aqw-category-progress">
            ${_.map(g=>{const q=n.includes(g.id);return`
                <div class="aqw-cat-progress-item ${q?"aqw-played":""}">
                  <img src="${g.iconImg}" style="height:24px; vertical-align:middle; mix-blend-mode:multiply;" class="aqw-cat-progress-icon-img" />
                  <span class="aqw-cat-progress-name">${g.name}</span>
                  <img src="${q?D:E}" style="height:16px; mix-blend-mode:multiply; opacity:${q?1:.5}" />
                </div>
              `}).join("")}
          </div>
        </div>
      </div>
    `,(z=this.container.querySelector(".aqw-btn-back-book"))==null||z.addEventListener("click",()=>this.onNavigate("home"))}destroy(){}}class Te{constructor(e,a,t,i){this.container=e,this.gameState=a,this.onNavigate=t,this.config=i}render(){var h;const e=((h=this.config)==null?void 0:h.chapters)||[],a=this.gameState.get("chaptersCompleted")||[],t=e.length,i=a.length,s=t>0?Math.round(i/t*100):0,n=t>0&&i>=t;if(e.length===0){this.container.innerHTML=`
        <div class="aqw-screen aqw-map-screen">
          <div class="aqw-map-empty">
            <p>冒険マップの章データが設定されていません</p>
          </div>
        </div>
      `;return}const o=this.gameState.get("level"),p=m.find(d=>o>=d.minLevel&&o<=d.maxLevel)||m[0],l=[...e].reverse();this.container.innerHTML=`
      <div class="aqw-screen aqw-map-screen">
        <div class="aqw-map-altitude">
          <div class="aqw-map-altitude-bar">
            <div class="aqw-map-altitude-fill" style="height:${s}%"></div>
          </div>
          <span class="aqw-map-altitude-text">🏔 標高 ${s}%（${i}/${t} 合目）</span>
        </div>

        <div class="aqw-map-mountain" id="aqw-map-scroll">
          <!-- Summit (top) -->
          <div class="aqw-map-summit ${n?"aqw-map-summit-done":""}">
            <div class="aqw-map-summit-icon">${n?"👑":"🚩"}</div>
            <div class="aqw-map-summit-text">${n?"AI秘書マスター達成！":"AI秘書マスター"}</div>
          </div>

          <!-- Trail nodes (reversed: top=last chapter, bottom=first) -->
          <div class="aqw-map-trail">
            ${l.map((d,u)=>{var b;const $=e.length-1-u,f=a.includes(d.id),v=!f&&($===0||a.includes((b=e[$-1])==null?void 0:b.id)),z=!f&&!v,g=$%2===0?"left":"right",q=$+1;return`
                <div class="aqw-trail-connector"></div>
                <div class="aqw-trail-node aqw-trail-${g} ${f?"aqw-trail-done":""} ${v?"aqw-trail-current":""} ${z?"aqw-trail-locked":""}">
                  <div class="aqw-trail-circle">
                    ${f?`<img src="${D}" class="aqw-trail-icon" />`:v?`<img src="${p.img}" class="aqw-trail-avatar" />`:`<img src="${E}" class="aqw-trail-icon aqw-trail-lock-icon" />`}
                  </div>
                  <div class="aqw-trail-info">
                    <div class="aqw-trail-station">${q}合目</div>
                    <div class="aqw-trail-title">${f||v?d.title:"???"}</div>
                    ${d.items?`<div class="aqw-trail-items">${d.items}項目</div>`:""}
                  </div>
                </div>
              `}).join("")}
          </div>

          <!-- Base (bottom) -->
          <div class="aqw-map-base">
            <div class="aqw-map-base-text">🌱 スタート地点</div>
          </div>
        </div>
      </div>
    `;const r=this.container.querySelector("#aqw-map-scroll");r&&requestAnimationFrame(()=>{r.scrollTop=r.scrollHeight})}destroy(){}}class Ee{isAvailableToday(e){const a=new Date().toISOString().slice(0,10);return e.get("dailyChallengeDate")!==a}getQuestion(e){const a=[];for(const[l,r]of Object.entries(se))for(const h of r)a.push({...h,category:l});const t=new Date,i=t.getFullYear()*1e4+(t.getMonth()+1)*100+t.getDate(),s=i%a.length,n={...a[s]},o=n.choices.map((l,r)=>r);let p=i;for(let l=o.length-1;l>0;l--){p=p*1103515245+12345&2147483647;const r=p%(l+1);[o[l],o[r]]=[o[r],o[l]]}return{...n,choices:o.map(l=>n.choices[l]),answer:o.indexOf(n.answer)}}submitAnswer(e,a){return{correct:e===a.answer,explanation:a.explanation}}applyRewards(e,a){const t=L(e.get("streak")||0);let i=Math.floor(10*t),s=Math.floor(5*t);a&&(i+=Math.floor(5*t),s+=Math.floor(5*t));const n=new Date().toISOString().slice(0,10),o=(e.get("dailyChallengeStreak")||0)+1;return e.update({xp:(e.get("xp")||0)+i,coins:(e.get("coins")||0)+s,dailyChallengeDate:n,dailyChallengeStreak:o}),e.updateStreak(),{xpGain:i,coinGain:s,multiplier:t,dailyChallengeStreak:o}}}class je{constructor(e,a,t){this.container=e,this.gameState=a,this.onNavigate=t,this.daily=new Ee,this.answered=!1,this.answerResult=null}render(){this.daily.isAvailableToday(this.gameState)?this.renderChallenge():this.renderCompleted()}renderChallenge(){const e=this.daily.getQuestion(this.gameState),a=this.gameState.get("streak")||0,t=L(a);this.container.innerHTML=`
      <div class="aqw-screen aqw-daily-screen">
        <div class="aqw-daily-header">
          <h2 class="aqw-daily-title">今日の1問</h2>
          ${a>0?`<div class="aqw-daily-streak"><img src="${y}" class="aqw-inline-icon" /> ${a}日連続 コインx${t}</div>`:""}
        </div>
        <div class="aqw-daily-question">
          <p class="aqw-daily-q-text">${e.q}</p>
        </div>
        <div class="aqw-daily-choices">
          ${e.choices.map((i,s)=>`
            <button class="aqw-daily-choice" data-index="${s}">
              <span class="aqw-choice-letter">${["A","B","C","D"][s]}</span>
              <span class="aqw-choice-text">${i}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `,this.container.querySelectorAll(".aqw-daily-choice").forEach(i=>{i.addEventListener("click",()=>{var o;if(this.answered)return;this.answered=!0;const s=parseInt(i.dataset.index),n=this.daily.submitAnswer(s,e);this.answerResult=n,i.classList.add(n.correct?"aqw-correct":"aqw-wrong"),n.correct||(o=this.container.querySelector(`[data-index="${e.answer}"]`))==null||o.classList.add("aqw-correct"),this.daily.applyRewards(this.gameState,n.correct),setTimeout(()=>this.renderResult(n,e),1e3)})})}renderResult(e,a){var o;const t=this.gameState.get("streak")||0,i=L(t),s=e.correct?15:10,n=Math.floor((e.correct?10:5)*i);this.container.innerHTML=`
      <div class="aqw-screen aqw-daily-screen">
        <div class="aqw-daily-result">
          <img src="${e.correct?I:C}" class="aqw-daily-result-icon" />
          <h3 class="aqw-daily-result-title ${e.correct?"aqw-correct":""}">${e.correct?"せいかい！":"おしい！"}</h3>
          <div class="aqw-daily-rewards">
            <span>+${s} XP</span>
            <span>+${n} <img src="${k}" class="aqw-inline-icon" /></span>
          </div>
          <div class="aqw-daily-explanation">${e.explanation}</div>
          <div class="aqw-daily-streak-info">
            <img src="${y}" class="aqw-inline-icon" />
            <span>${t}日連続！ コインx${i}</span>
          </div>
          <button class="aqw-btn aqw-btn-primary aqw-daily-done">ホームに戻る</button>
        </div>
      </div>
    `,(o=this.container.querySelector(".aqw-daily-done"))==null||o.addEventListener("click",()=>this.onNavigate("home"))}renderCompleted(){var t;const e=this.gameState.get("streak")||0,a=L(e);this.container.innerHTML=`
      <div class="aqw-screen aqw-daily-screen">
        <div class="aqw-daily-done-wrap">
          <div class="aqw-daily-done-icon">
            <img src="${I}" class="aqw-inline-icon" style="height:48px;" />
          </div>
          <h3 class="aqw-daily-done-title">今日のチャレンジ完了！</h3>
          <div class="aqw-daily-streak-info">
            <img src="${y}" class="aqw-inline-icon" />
            <span>${e}日連続！ コインx${a}</span>
          </div>
          <p class="aqw-daily-comeback">明日もチャレンジしよう！</p>
          <button class="aqw-btn aqw-btn-primary aqw-daily-home">ホームに戻る</button>
        </div>
      </div>
    `,(t=this.container.querySelector(".aqw-daily-home"))==null||t.addEventListener("click",()=>this.onNavigate("home"))}destroy(){}}const Fe="/ai-quest-widget/assets/icon_nav_quest-CX3VbK5Y.png",Ne="/ai-quest-widget/assets/icon_nav_shop-BUbXv-2s.png",Qe="/ai-quest-widget/assets/icon_nav_book-CHBu2RXz.png";class Re{constructor(e,a,t){this.container=e,this.onNavigate=a,this.gameState=t,this.activeTab="home"}render(e){this.activeTab=e||this.activeTab;const a=this.gameState.get("dailyChallengeDate")===new Date().toISOString().slice(0,10);this.container.innerHTML=`
      <nav class="aqw-bottom-nav">
        <button class="aqw-nav-btn ${this.activeTab==="home"?"aqw-active":""}" data-screen="home">
          <img src="${ne}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">ホーム</span>
        </button>
        <button class="aqw-nav-btn ${this.activeTab==="map"?"aqw-active":""}" data-screen="map">
          <img src="${Fe}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">マップ</span>
        </button>
        <button class="aqw-nav-btn ${this.activeTab==="quest"?"aqw-active":""}" data-screen="quest">
          <img src="${S}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">クエスト</span>
        </button>
        <button class="aqw-nav-btn ${this.activeTab==="daily"?"aqw-active":""}" data-screen="daily">
          <img src="${x}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">今日の1問</span>
          ${a?"":'<span class="aqw-nav-dot"></span>'}
        </button>
        <button class="aqw-nav-btn ${this.activeTab==="shop"?"aqw-active":""}" data-screen="shop">
          <img src="${Ne}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">ショップ</span>
        </button>
        <button class="aqw-nav-btn ${this.activeTab==="book"?"aqw-active":""}" data-screen="book">
          <img src="${Qe}" class="aqw-nav-icon-img" /> <span class="aqw-nav-label">ずかん</span>
        </button>
      </nav>
    `,this.container.querySelectorAll(".aqw-nav-btn").forEach(t=>{t.addEventListener("click",()=>this.onNavigate(t.dataset.screen))})}}class Oe{constructor(e,a,t,i,s){this.screenContainer=e,this.navContainer=a,this.gameState=t,this.audioManager=i,this.config=s,this.currentScreen=null,this.currentScreenName="",this.nav=new Re(a,n=>this.navigate(n),t)}navigate(e){var t;(t=this.currentScreen)!=null&&t.destroy&&this.currentScreen.destroy(),this.currentScreenName=e,this.screenContainer.innerHTML="",this.screenContainer.classList.add("aqw-screen-enter"),setTimeout(()=>this.screenContainer.classList.remove("aqw-screen-enter"),300),this.nav.render(e);const a=i=>this.navigate(i);switch(e){case"home":this.audioManager.playBgm("home"),this.currentScreen=new Ie(this.screenContainer,this.gameState,a);break;case"map":this.audioManager.playBgm("home"),this.currentScreen=new Te(this.screenContainer,this.gameState,a,this.config);break;case"quest":this.audioManager.playBgm("quest_select"),this.currentScreen=new Be(this.screenContainer,this.gameState,a,this.audioManager);break;case"daily":this.audioManager.playBgm("quiz"),this.currentScreen=new je(this.screenContainer,this.gameState,a);break;case"shop":this.audioManager.playBgm("shop"),this.currentScreen=new Pe(this.screenContainer,this.gameState,a);break;case"book":this.audioManager.playBgm("book"),this.currentScreen=new De(this.screenContainer,this.gameState,a,this.config);break}this.currentScreen&&this.currentScreen.render()}}class He{constructor(e){this.root=e,this.queue=[],this.isShowing=!1,this.container=document.createElement("div"),this.container.className="aqw-notification-container",this.root.appendChild(this.container)}show(e,a="xp"){this.queue.push({message:e,type:a}),this.isShowing||this._processQueue()}_processQueue(){if(this.queue.length===0){this.isShowing=!1;return}this.isShowing=!0;const{message:e,type:a}=this.queue.shift(),t=document.createElement("div");t.className=`aqw-toast aqw-toast-${a}`;const i={xp:"✨",coin:"🪙",streak:"🔥",levelup:"🎉",chapter:"🚩"};t.innerHTML=`<span class="aqw-toast-icon">${i[a]||"✨"}</span> ${e}`,this.container.appendChild(t),requestAnimationFrame(()=>t.classList.add("aqw-toast-show")),setTimeout(()=>{t.classList.add("aqw-toast-hide"),setTimeout(()=>{t.remove(),this._processQueue()},400)},2e3)}}class Xe{constructor(e){this.app=e}onVideoComplete(){this.app.awardXP(20);const e=this.app.awardCoins(5);this.app.gameState.update({totalVideos:this.app.gameState.get("totalVideos")+1}),this.app.notification.show(`+20 XP, +${e} コイン`,"xp"),this.app.floatingChar.playReaction(),this._checkStreak()}onTextComplete(){this.app.awardXP(10);const e=this.app.awardCoins(3);this.app.gameState.update({totalTexts:this.app.gameState.get("totalTexts")+1}),this.app.notification.show(`+10 XP, +${e} コイン`,"xp"),this.app.floatingChar.playReaction(),this._checkStreak()}onQuizPass(e=!1){const a=e?50:30,t=e?25:15;this.app.awardXP(a);const i=this.app.awardCoins(t);this.app.notification.show(`+${a} XP, +${i} コイン${e?" パーフェクト！":""}`,"xp"),this.app.floatingChar.playReaction(),this._checkStreak()}onChapterComplete(e){const a=this.app.gameState.get("chaptersCompleted")||[];a.includes(e)||(a.push(e),this.app.gameState.update({chaptersCompleted:a})),this.app.awardXP(100);const t=this.app.awardCoins(50);this.app.notification.show(`章クリア！+100 XP, +${t} コイン`,"chapter"),this.app.floatingChar.playReaction();const i=this.app.config.chapters||[];i.length>0&&a.length>=i.length&&(this.app.gameState.addBadge("map_complete"),this.app.notification.show("冒険マップ完了！","levelup")),this._checkStreak()}_checkStreak(){const e=$e(this.app.gameState);if(e.isNewDay){const a=ie(e.streak);a&&this.app.notification.show(a,"streak")}}}class Ye{constructor(e,a,t){this.root=e,this.shadowRoot=a,this.config=t,this.gameState=new oe,this.audioManager=new ce("/ai-quest-widget/",a),this.isPanelOpen=!1,this.gameState.hasData()||this.gameState.update({initialized:!0}),this.setupDOM(),this.notification=new He(this.root),this.floatingChar=new we(this.floatingContainer,this.gameState,()=>this.togglePanel()),this.panelRouter=new Oe(this.screenContainer,this.navContainer,this.gameState,this.audioManager,this.config),this.hostIntegration=new Xe(this)}setupDOM(){this.root.innerHTML=`
      <div class="aqw-floating-container"></div>
      <div class="aqw-panel">
        <div class="aqw-panel-header">
          <span class="aqw-panel-title">AI Quest</span>
          <button class="aqw-panel-close">✕</button>
        </div>
        <div class="aqw-screen-container"></div>
        <div class="aqw-nav-container"></div>
      </div>
    `,this.floatingContainer=this.root.querySelector(".aqw-floating-container"),this.panelEl=this.root.querySelector(".aqw-panel"),this.screenContainer=this.root.querySelector(".aqw-screen-container"),this.navContainer=this.root.querySelector(".aqw-nav-container"),this.root.querySelector(".aqw-panel-close").addEventListener("click",()=>this.closePanel())}openPanel(){this.isPanelOpen=!0,this.panelEl.classList.add("aqw-open"),this.floatingContainer.style.display="none",this.panelRouter.navigate("home")}closePanel(){var e;this.isPanelOpen=!1,this.panelEl.classList.remove("aqw-open"),this.floatingContainer.style.display="",this.audioManager.stopBgm(),(e=this.panelRouter.currentScreen)!=null&&e.destroy&&this.panelRouter.currentScreen.destroy()}togglePanel(){this.isPanelOpen?this.closePanel():this.openPanel()}awardXP(e){const a=new X(this.gameState.state),t=a.addXP(e);return this.gameState.update({level:a.state.level,xp:a.state.xp}),t.evolved&&(this.gameState.addBadge("evolution"),this.notification.show(`進化！${t.newStage.name}になりました！`,"levelup")),t}awardCoins(e){const a=this.gameState.getStreakMultiplier(),t=Math.floor(e*a);return this.gameState.update({coins:this.gameState.get("coins")+t}),t}configure(e){Object.assign(this.config,e),this.panelRouter&&(this.panelRouter.config=this.config)}}class Ve{constructor(){this.app=null,this.init()}init(){const e=document.createElement("div");e.id="aqw-root",document.body.appendChild(e);const a=e.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=re,a.appendChild(t);const i=document.createElement("div");i.className="aqw-widget-root",a.appendChild(i);const s=window.AIQuestConfig||{};this.app=new Ye(i,a,s)}}const w=new Ve;window.AIQuest={init(c){w.app&&w.app.configure(c)},onVideoComplete(){w.app&&w.app.hostIntegration.onVideoComplete()},onTextComplete(){w.app&&w.app.hostIntegration.onTextComplete()},onQuizPass(c=!1){w.app&&w.app.hostIntegration.onQuizPass(c)},onChapterComplete(c){w.app&&w.app.hostIntegration.onChapterComplete(c)},open(){w.app&&w.app.openPanel()},close(){w.app&&w.app.closePanel()},getState(){return w.app?{...w.app.gameState.state}:null}};
