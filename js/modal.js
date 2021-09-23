'use strict';

const modalButton = document.querySelectorAll('.more');
const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.overlay');

modalButton.forEach((item, index) => {
  item.addEventListener('click', modalWindowToggle);
});

modalWindow.addEventListener('click', (event) => {
  if (event.target == modalClose || event.target == modalOverlay) {
    modalWindowToggle();
  }
});
// modalClose.addEventListener('click', modalWindowToggle);
// modalOverlay.addEventListener('click', modalWindowToggle);

/**
 * Toggle modal window visibility
 */
function modalWindowToggle() {
  modalWindow.classList.toggle('hidden');
};
