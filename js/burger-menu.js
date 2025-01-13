const burgerMenu = document.querySelector('.burger-menu');
const menuOpen = document.querySelector('.js-burger-open');
const menuClose = document.querySelector('.js-burger-close');
const body = document.querySelector('body');

const toggleMenu = () => burgerMenu.classList.toggle('is-open');
const toggleBody = () =>  body.classList.toggle('scroll-blocked');

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
menuOpen.addEventListener('click', toggleBody);
menuClose.addEventListener('click', toggleBody);