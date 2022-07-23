const getRefs = () => {
  return {
    modal: document.querySelector('.modal'),
    containerListRef: document.querySelector('.container__list'),
    modalCloseBtnRef: document.querySelector('.modal__close'),
    modalFilm: document.querySelector('.modal__film'),
    modalContainer: document.querySelector('.modal__conteiner'),
  };
};
export default getRefs;
