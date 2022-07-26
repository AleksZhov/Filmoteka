!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o("ghnK3");var r=function(){return{modal:document.querySelector(".modal"),containerListRef:document.querySelector(".container__list"),modalCloseBtnRef:document.querySelector(".modal__close"),modalFilm:document.querySelector(".modal__film"),modalContainer:document.querySelector(".modal__conteiner"),watchedBthRef:document.querySelector(".js-btn-watched-render"),queueBtnRef:document.querySelector(".js-btn-queue-render"),emptyListContainer:document.querySelector(".js-empty-list-container")}},i=o("lHIzZ");function l(e){var t=e.id,n=e.genres,a=e.title,o=e.vote_average,r=e.release_date,i=e.poster_path,l=n.map((function(e){return e.name}));return l=l.length>2?l.slice(0,2).join(", ")+", Other":l.join(", "),'\n    <li class="film-card__item" data-id='.concat(t,'>\n      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/').concat(i,' " alt="film poster"  />\n    <h2 class="film-card__title">').concat(a,'</h2>\n    <div class="film-card__flex">\n    <p class="film-card__flex__text">').concat(l,' |\n    </p>\n    <p class="film-card__flex__text">').concat(r.slice(0,-6),'</p>\n    <p class="film-card__flex__rating">').concat(o.toFixed(1),"</p>\n    </div>\n    </li>\n")}var c=o("iU1Pc"),d=(new(0,i.MovieAPI),"WATCHED");localStorage.getItem(d);var s=JSON.parse(localStorage.getItem(d));r().watchedBthRef.addEventListener("click",(function(){if(null===s||0===s.length)return c.Notify.warning('Please go to home page and add movie to "Watched" list'),r().emptyListContainer.classList.remove("is-hidden"),void(r().containerListRef.innerHTML="");r().emptyListContainer.classList.contains("is-hidden")||r().emptyListContainer.classList.add("is-hidden");r().containerListRef.innerHTML="";var e=s.map((function(e){return l(e)})).join("");r().containerListRef.insertAdjacentHTML("beforeend",e)}));i=o("lHIzZ"),c=o("iU1Pc"),new(0,i.MovieAPI);var u="QUEUE";localStorage.getItem(u);var f=JSON.parse(localStorage.getItem(u));r().queueBtnRef.addEventListener("click",(function(){if(null===f||0===f.length)return c.Notify.warning('Please go to home page and add movie to "Watched" list'),r().emptyListContainer.classList.remove("is-hidden"),void(r().containerListRef.innerHTML="");r().emptyListContainer.classList.contains("is-hidden")||r().emptyListContainer.classList.add("is-hidden");r().containerListRef.innerHTML="";var e=f.map((function(e){return l(e)})).join("");r().containerListRef.insertAdjacentHTML("beforeend",e)}));var m=o("8nrFW"),g=(i=o("lHIzZ"),o("k5SnF")),v=(c=o("iU1Pc"),o("l1RgP")),p=new(0,i.MovieAPI);function h(){r().modal.classList.add("is-hidden"),document.removeEventListener("keydown",L),r().modalContainer.removeEventListener("click",y)}function y(e){e.target===e.currentTarget&&(h(),(0,v.default)().html.style.overflow="visible",(0,v.default)().backToTop.style.display="block")}function L(e){"Escape"===e.key&&(h(),(0,v.default)().html.style.overflow="visible",(0,v.default)().backToTop.style.display="block")}r().containerListRef.addEventListener("click",(function(e){var t=e.target.closest(".film-card__item").dataset.id;if(e.target===e.currentTarget)return;r().modal.classList.remove("is-hidden"),document.addEventListener("keydown",L),r().modalContainer.addEventListener("click",y),p.getFilms(t).then((function(e){var t=(0,g.renderModalMarkup)(e);(0,v.default)().modal.style.backgroundImage="linear-gradient(to right, rgba(47, 48, 58, 0.9), rgba(47, 48, 58, 0.9)),\n\t\turl(https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path,")"),(0,v.default)().modal.style.backgroundSize="cover",(0,v.default)().html.style.overflow="hidden",(0,v.default)().backToTop.style.display="none",r().modalFilm.innerHTML=t})).then((function(){document.querySelector(".js-btn-watched").addEventListener("click",k),document.querySelector(".js-btn-queue").addEventListener("click",R)})).catch((function(e){return console.log(e)})).finally((function(){(0,v.default)().loaderModal.classList.add("visually-hidden")}))})),r().modalCloseBtnRef.addEventListener("click",h);var _=[],S="WATCHED",w=[],b="QUEUE",k=function(t){var n=t.target.dataset.id,a=document.querySelector(".js-btn-watched");if(null!==localStorage.getItem(S)&&(_=e(m)(JSON.parse(localStorage.getItem(S)))),_.includes(n)){_=_.filter((function(e){return Number(e)!==n})),c.Notify.warning("Film Remove from watched");var o=_.indexOf(n);_.splice(o,1),a.textContent="Add to watched"}else _.push(n),c.Notify.success("Film add to watched"),a.textContent="Remove from watched";try{var r=JSON.stringify(_);localStorage.setItem(S,r)}catch(e){console.error("Set state error: ",e.message)}},R=function(t){var n=t.target.dataset.id;if(null!==localStorage.getItem(b)&&(w=e(m)(JSON.parse(localStorage.getItem(b)))),w.includes(n)){w=w.filter((function(e){return Number(e)!==n})),c.Notify.warning("Film Remove from queue");var a=w.indexOf(n);w.splice(a,1),t.target.textContent="Add to queue"}else w.push(n),c.Notify.success("Фільм додано"),t.target.textContent="Remove from queue";try{var o=JSON.stringify(w);localStorage.setItem(b,o)}catch(e){console.error("Set state error: ",e.message)}};o("23Ajj")}();
//# sourceMappingURL=mylibrary.2fd6303e.js.map
