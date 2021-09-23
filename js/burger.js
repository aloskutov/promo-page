'use strict';

const burgerButton = document.querySelector('.humburger-menu');
const burgerMenu = document.querySelector('.menu');
const burgerMenuLinks = document.querySelectorAll('.menu-list__link');


burgerButton.addEventListener('click', burgerToggle);
burgerMenuLinks.forEach((item) => {
  item.addEventListener('click', burgerToggle);
});

/**
 * Toggle burger menu & button
 */
function burgerToggle() {
  burgerMenu.classList.toggle('menu-active');
  burgerButton.classList.toggle('humburger-menu-active');
};
