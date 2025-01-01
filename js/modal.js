const modal = document.querySelector('.backdrop');
const ModalOpen = document.querySelector('.modal-open');
const ModalClose = document.querySelector('.modal-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

ModalOpen.addEventListener('click', toggleModal);
ModalClose.addEventListener('click', toggleModal);