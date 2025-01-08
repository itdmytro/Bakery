const modal = document.querySelector('.backdrop');
const ModalOpen = document.querySelector('.js-modal-open');
const ModalOpenMobile = document.querySelector('.js-modal-open-mobile');
const ModalClose = document.querySelector('.js-modal-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

ModalOpen.addEventListener('click', toggleModal);
ModalOpenMobile.addEventListener('click', toggleModal);
ModalClose.addEventListener('click', toggleModal);