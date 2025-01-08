const burgerMenu = document.querySelector('.burger-menu');
const menuOpen = document.querySelector('.js-burger-open');
const menuClose = document.querySelector('.js-burger-close');

const toggleMenu = () => burgerMenu.classList.toggle('is-open');

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);