'use strict';

/**
 * Smooth Scroll class
 */
class SmoothScroll {
  /**
   * Constructor
   * @param {string} selector class selector
   */
  constructor(selector) {
    this.links = document.querySelectorAll(selector);

    this.links.forEach((item) => {
      item.addEventListener('click', (event) => {
        const linkId = event.target.getAttribute('href').replace('#', '');

        window.scrollTo({
          top: document.getElementById(linkId).offsetTop,
          behavior: 'smooth',
        });

        event.preventDefault();
      });
    });
  }
}

new SmoothScroll('.menu-list__link');
new SmoothScroll('.main__scroll');
