var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("baGT8");var r=()=>({modal:document.querySelector(".modal"),containerListRef:document.querySelector(".container__list"),modalCloseBtnRef:document.querySelector(".modal__close"),modalFilm:document.querySelector(".modal__film"),modalContainer:document.querySelector(".modal__conteiner"),watchedBthRef:document.querySelector(".js-btn-watched-render"),queueBtnRef:document.querySelector(".js-btn-queue-render"),emptyListContainer:document.querySelector(".js-empty-list-container")}),i=o("9Bkxl");function a({id:e,genres:t,title:n,vote_average:o,release_date:r,poster_path:i}){let a=t.map((({name:e})=>e));return a=a.length>2?a.slice(0,2).join(", ")+", Other":a.join(", "),`\n    <li class="film-card__item" data-id=${e}>\n      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/${i} " alt="film poster"  />\n    <h2 class="film-card__title">${n}</h2>\n    <div class="film-card__flex">\n    <p class="film-card__flex__text">${a} |\n    </p>\n    <p class="film-card__flex__text">${r.slice(0,-6)}</p>\n    <p class="film-card__flex__rating">${o}</p>\n    </div>\n    </li>\n`}var l=o("eWCmQ");const c=new(0,i.MovieAPI);localStorage.getItem("WATCHED");const s=JSON.parse(localStorage.getItem("WATCHED"));r().watchedBthRef.addEventListener("click",(function(){if(null===s)return l.Notify.warning('Please go to home page and add movie to "Watched" list'),void r().emptyListContainer.classList.remove("is-hidden");r().containerListRef.innerHTML="",s.forEach((e=>{c.getFilms(e).then((e=>{const t=a(e);r().containerListRef.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e)))}))}));i=o("9Bkxl"),l=o("eWCmQ");const d=new(0,i.MovieAPI);localStorage.getItem("QUEUE");const m=JSON.parse(localStorage.getItem("QUEUE"));r().queueBtnRef.addEventListener("click",(function(){if(null===m)return l.Notify.warning('Please go to home page and add movie to "Watched" list'),void r().emptyListContainer.classList.remove("is-hidden");r().containerListRef.innerHTML="",m.forEach((e=>{d.getFilms(e).then((e=>{const t=a(e);r().containerListRef.insertAdjacentHTML("beforeend",t)})).catch((e=>console.log(e)))}))}));i=o("9Bkxl");var u=o("2zc8m");l=o("eWCmQ");const f=new(0,i.MovieAPI);function g(){r().modal.classList.add("is-hidden"),document.removeEventListener("keydown",p),r().modalContainer.removeEventListener("click",h)}function h(e){e.target===e.currentTarget&&g()}function p(e){"Escape"===e.key&&g()}r().containerListRef.addEventListener("click",(function(e){let t=e.target.closest(".film-card__item").dataset.id;if(e.target===e.currentTarget)return;r().modal.classList.remove("is-hidden"),document.addEventListener("keydown",p),r().modalContainer.addEventListener("click",h),f.getFilms(t).then((e=>{const t=(0,u.renderModalMarkup)(e);r().modalFilm.innerHTML=t})).then((()=>{!function(){document.querySelector(".js-btn-watched").addEventListener("click",y);document.querySelector(".js-btn-queue").addEventListener("click",E)}()})).catch((e=>console.log(e)))})),r().modalCloseBtnRef.addEventListener("click",g);let v=[];let _=[];const y=e=>{let t=e.target.dataset.id;const n=document.querySelector(".js-btn-watched");if(null!==localStorage.getItem("WATCHED")&&(v=[...JSON.parse(localStorage.getItem("WATCHED"))]),v.includes(t)){v=v.filter((e=>Number(e)!==t)),l.Notify.warning("Film Remove from watched");let e=v.indexOf(t);v.splice(e,1),n.textContent="Add to watched"}else v.push(t),l.Notify.success("Film add to watched"),n.textContent="Remove from watched";try{const e=JSON.stringify(v);localStorage.setItem("WATCHED",e)}catch(e){console.error("Set state error: ",e.message)}},E=e=>{let t=e.target.dataset.id;if(null!==localStorage.getItem("QUEUE")&&(_=[...JSON.parse(localStorage.getItem("QUEUE"))]),_.includes(t)){_=_.filter((e=>Number(e)!==t)),l.Notify.warning("Film Remove from queue");let n=_.indexOf(t);_.splice(n,1),e.target.textContent="Add to queue"}else _.push(t),l.Notify.success("Фільм додано"),e.target.textContent="Remove from queue";try{const e=JSON.stringify(_);localStorage.setItem("QUEUE",e)}catch(e){console.error("Set state error: ",e.message)}};o("74Aiq");
//# sourceMappingURL=mylibrary.de674bf5.js.map
