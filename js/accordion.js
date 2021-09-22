const accordion = document.querySelector('.feature-list');
const accordionButtons = document.querySelectorAll('.feature__link');

accordionButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    const targetElement = event.target;
    const targetItem = targetElement.closest('.feature__item');
    const targetLink = targetItem.querySelector('.feature__link');
    const targetSub = targetItem.querySelector('.feature-sub');
    const activeLink = accordion.querySelector('.feature__link_active');

    if (targetLink.classList.contains('feature__link_active')) {
      targetLink.classList.remove('feature__link_active');
      targetSub.classList.add('hidden');
    } else {
      if (activeLink) {
        activeLink.classList.remove('feature__link_active');
        activeLink.closest('.feature__item').querySelector('.feature-sub')
            .classList.add('hidden');
      }
      targetLink.classList.add('feature__link_active');
      targetSub.classList.remove('hidden');
    }
  });
});
