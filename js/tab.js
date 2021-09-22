'use strict';

const tabContainer = document.querySelector('.design-block');
const tabButtons = tabContainer.querySelectorAll('.design-list__item');

tabButtons.forEach((element, index) => {
  const tabHeaders = tabContainer.querySelectorAll('.design__title');
  const tabImages = tabContainer.querySelectorAll('.design-block__img');
  const tabDescription = tabContainer.querySelectorAll('.design__descr');
  const tabItems = [tabHeaders, tabImages, tabDescription];

  element.addEventListener('click', (event) => {
    tabButtons.forEach((item) => {
      if (item.classList.contains('design-list__item_active')) {
        item.classList.remove('design-list__item_active');
      }
    });

    event.target.classList.add('design-list__item_active');

    tabItems.forEach((tabItem) => {
      tabItem.forEach((item) => {
        if (!item.classList.contains('hidden')) {
          item.classList.add('hidden');
        }
      });
      tabItem[index].classList.remove('hidden');
    });
  });
});
