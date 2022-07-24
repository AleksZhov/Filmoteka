const libraryGetRefs = () => {
  return {
    containerListRef: document.querySelector('.container__list'),
    watchedBthRef: document.querySelector('.js-btn-watched'),
    queueBtnRef: document.querySelector('.js-btn-queue'),
  };
};
export default libraryGetRefs;
