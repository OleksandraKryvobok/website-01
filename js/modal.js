(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openModalMap: document.querySelector('[data-modal-map-open]'),
    closeModalMap: document.querySelector('[data-modal-map-close]'),
    modalMap: document.querySelector('[data-modal-map]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.openModalMap.addEventListener('click', toggleModalMap);
  refs.closeModalMap.addEventListener('click', toggleModalMap);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function toggleModalMap() {
    refs.modalMap.classList.toggle('is-hidden');
  }
})();