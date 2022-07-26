const getRefs = () => {
  return {
    modal: document.querySelector('.modal'),
    containerListRef: document.querySelector('.container__list'),
    modalCloseBtnRef: document.querySelector('.modal__close'),
    modalFilm: document.querySelector('.modal__film'),
    modalContainer: document.querySelector('.modal__conteiner'),
    div: document.querySelector('.container__list'),
    body: document.querySelector('body'),
    loader: document.getElementById('preloader'),
    loaderModal: document.getElementById('preloader--modal'),
    modal: document.querySelector('.modal'),
    html: document.querySelector('html'),
    backToTop: document.querySelector('.back_to_top'),
  };
};
export default getRefs;
