'use strict';

const linksHead = document.querySelectorAll('.menu-list__link');

linksHead.forEach((item) => {
  item.addEventListener('click', (event) => {
    const linkId = event.target.getAttribute('href').replace('#', '');

    window.scrollTo({
      top: document.getElementById(linkId).offsetTop,
      behavior: 'smooth',
    });

    event.preventDefault();
  });
});
