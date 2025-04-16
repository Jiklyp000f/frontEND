"use strict";
// preloader.ts
class Preloader {
    constructor() {
        this.preloaderElement = document.createElement('div');
        this.preloaderElement.id = 'preloader';
        this.preloaderElement.style.position = 'fixed';
        this.preloaderElement.style.top = '0';
        this.preloaderElement.style.left = '0';
        this.preloaderElement.style.width = '100%';
        this.preloaderElement.style.height = '100%';
        this.preloaderElement.style.backgroundColor = '#fff';
        this.preloaderElement.style.display = 'flex';
        this.preloaderElement.style.justifyContent = 'center';
        this.preloaderElement.style.alignItems = 'center';
        this.preloaderElement.style.zIndex = '9999';
        const spinner = document.createElement('div');
        spinner.style.border = '5px solid #f3f3f3';
        spinner.style.borderTop = '5px solid #3498db';
        spinner.style.borderRadius = '50%';
        spinner.style.width = '50px';
        spinner.style.height = '50px';
        spinner.style.animation = 'spin 2s linear infinite';
        const style = document.createElement('style');
        style.innerHTML = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
        this.preloaderElement.appendChild(spinner);
        this.preloaderElement.appendChild(style);
    }
    show() {
        document.body.appendChild(this.preloaderElement);
    }
    hide() {
        if (this.preloaderElement.parentNode) {
            this.preloaderElement.parentNode.removeChild(this.preloaderElement);
        }
    }
}
const preloader = new Preloader();
preloader.show();
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.hide();
    }, 500); // задержка для демонстрации
});
