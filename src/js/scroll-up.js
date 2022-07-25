(function () {
  'use strict';

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  }

  let goTopBtn = document.querySelector('.back_to_top');
  // -----------------------
  let btnPage = document.querySelectorAll('.btnPages');
  // for (index = 0; index < btnPage.length; index++) {
  //   button = btnPage[index];
  //   // console.log(button);
  //   button.addEventListener('click', backToTop);
  // }
  // console.log(btnPage);
  for (let page of btnPage) {
    page.addEventListener('click', (e) => {e.preventDefault()
      backToTop()});
  }

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
  
  // btnPage.addEventListener('click', backToTop)
})();

