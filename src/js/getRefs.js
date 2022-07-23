export default getRefs = () => {
  return {
    modal: document.querySelector('.modal'),
    containerListRef: document.querySelector('.container__list'),
    modalCloseBtnRef: document.querySelector('.modal__close'),
    modalFilm: document.querySelector('.modal__film'),
    div: document.querySelector('.container__list'),
    body: document.querySelector('body'),
  };
};
