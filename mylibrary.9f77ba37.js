!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o("ghnK3"),o("4smAb");var a=function(){return{modal:document.querySelector(".modal"),containerListRef:document.querySelector(".container__list"),modalCloseBtnRef:document.querySelector(".modal__close"),modalFilm:document.querySelector(".modal__film"),modalContainer:document.querySelector(".modal__conteiner"),watchedBthRef:document.querySelector(".js-btn-watched-render"),queueBtnRef:document.querySelector(".js-btn-queue-render")}};function c(e){var t=e.id,n=e.genres,r=e.title,o=e.vote_average,a=e.release_date,c=e.poster_path,i=n.map((function(e){return e.name}));return i=i.length>2?i.slice(0,2).join(", ")+", Other":i.join(", "),'\n    <li class="film-card__item" data-id='.concat(t,'>\n      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/').concat(c,' " alt="film poster"  />\n    <h2 class="film-card__title">').concat(r,'</h2>\n    <div class="film-card__flex">\n    <p class="film-card__flex__text">').concat(i,' |\n    </p>\n    <p class="film-card__flex__text">').concat(a.slice(0,-6),'</p>\n    <p class="film-card__flex__rating">').concat(o,"</p>\n    </div>\n    </li>\n")}var i=new(0,(g=o("lHIzZ")).MovieAPI),l="WATCHED";localStorage.getItem(l);var d=JSON.parse(localStorage.getItem(l));a().watchedBthRef.addEventListener("click",(function(){a().containerListRef.innerHTML="",d.forEach((function(e){i.getFilms(e).then((function(e){var t=c(e);a().containerListRef.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e)}))}))}));var s=new(0,(g=o("lHIzZ")).MovieAPI),u="QUEUE";localStorage.getItem(u);var f=JSON.parse(localStorage.getItem(u));a().queueBtnRef.addEventListener("click",(function(){a().containerListRef.innerHTML="",f.forEach((function(e){s.getFilms(e).then((function(e){var t=c(e);a().containerListRef.insertAdjacentHTML("beforeend",t)})).catch((function(e){return console.log(e)}))}))}));var m=o("8nrFW"),g=o("lHIzZ"),v=o("k5SnF"),_=o("iU1Pc"),h=new(0,g.MovieAPI);function p(){a().modal.classList.add("is-hidden"),document.removeEventListener("keydown",y),a().modalContainer.removeEventListener("click",S)}function S(e){e.target===e.currentTarget&&p()}function y(e){"Escape"===e.key&&p()}a().containerListRef.addEventListener("click",(function(e){var t=e.target.closest(".film-card__item").dataset.id;if(e.target===e.currentTarget)return;a().modal.classList.remove("is-hidden"),document.addEventListener("keydown",y),a().modalContainer.addEventListener("click",S),h.getFilms(t).then((function(e){var t=(0,v.renderModalMarkup)(e);a().modalFilm.innerHTML=t})).then((function(){document.querySelector(".js-btn-watched").addEventListener("click",R),document.querySelector(".js-btn-queue").addEventListener("click",x)})).catch((function(e){return console.log(e)}))})),a().modalCloseBtnRef.addEventListener("click",p);var L=[],w="WATCHED",E=[],q="QUEUE",R=function(t){var n=t.target.dataset.id,r=document.querySelector(".js-btn-watched");if(null!==localStorage.getItem(w)&&(L=e(m)(JSON.parse(localStorage.getItem(w)))),L.includes(n)){L=L.filter((function(e){return Number(e)!==n})),_.Notify.warning("Film Remove from watched");var o=L.indexOf(n);L.splice(o,1),r.textContent="Add to watched"}else L.push(n),_.Notify.success("Film add to watched"),r.textContent="Remove from watched";try{var a=JSON.stringify(L);localStorage.setItem(w,a)}catch(e){console.error("Set state error: ",e.message)}},x=function(t){var n=t.target.dataset.id;if(null!==localStorage.getItem(q)&&(E=e(m)(JSON.parse(localStorage.getItem(q)))),E.includes(n)){E=E.filter((function(e){return Number(e)!==n})),_.Notify.warning("Film Remove from queue");var r=E.indexOf(n);E.splice(r,1),t.target.textContent="Add to queue"}else E.push(n),_.Notify.success("Фільм додано"),t.target.textContent="Remove from queue";try{var o=JSON.stringify(E);localStorage.setItem(q,o)}catch(e){console.error("Set state error: ",e.message)}}}();
//# sourceMappingURL=mylibrary.9f77ba37.js.map
