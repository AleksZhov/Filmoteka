const libraryGetRefs = () => {
  return {
    modal: document.querySelector('.modal'),
    containerListRef: document.querySelector('.container__list'),
    modalCloseBtnRef: document.querySelector('.modal__close'),
    modalFilm: document.querySelector('.modal__film'),
    modalContainer: document.querySelector('.modal__conteiner'),
    watchedBthRef: document.querySelector('.js-btn-watched-render'),
    queueBtnRef: document.querySelector('.js-btn-queue-render'),
    emptyListContainer: document.querySelector('.js-empty-list-container'),
  };
};
export default libraryGetRefs;
