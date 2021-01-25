const navToggleButton = document.querySelector('.main-nav');
const mainNavOpened = 'main-nav--opened';
const mainNavClosed = 'main-nav--closed';

navToggleButton.classList.remove('main-nav--nojs');
navToggleButton.classList.remove(mainNavOpened);
navToggleButton.classList.add(mainNavClosed);

navToggleButton.addEventListener('click', function (evt) {
  if (!navToggleButton.classList.contains(mainNavClosed)) {
    navToggleButton.classList.remove(mainNavOpened);
    return navToggleButton.classList.add(mainNavClosed);
  }

  navToggleButton.classList.remove(mainNavClosed);
  navToggleButton.classList.add(mainNavOpened);
});
