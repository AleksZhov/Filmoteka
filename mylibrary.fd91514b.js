var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),n("baGT8");var l=()=>({modal:document.querySelector(".modal"),containerListRef:document.querySelector(".container__list"),modalCloseBtnRef:document.querySelector(".modal__close"),modalFilm:document.querySelector(".modal__film"),modalContainer:document.querySelector(".modal__conteiner"),watchedBthRef:document.querySelector(".js-btn-watched-render"),queueBtnRef:document.querySelector(".js-btn-queue-render"),emptyListContainer:document.querySelector(".js-empty-list-container")}),r=n("9Bkxl");function i({id:e,genres:t,title:o,vote_average:n,release_date:l,poster_path:r}){let i=t.map((({name:e})=>e));return i=i.length>2?i.slice(0,2).join(", ")+", Other":i.join(", "),`\n    <li class="film-card__item" data-id=${e}>\n      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/${r} " alt="film poster"  />\n    <h2 class="film-card__title">${o}</h2>\n    <div class="film-card__flex">\n    <p class="film-card__flex__text">${i} |\n    </p>\n    <p class="film-card__flex__text">${l.slice(0,-6)}</p>\n    <p class="film-card__flex__rating">${n}</p>\n    </div>\n    </li>\n`}var a=n("eWCmQ");new(0,r.MovieAPI);localStorage.getItem("WATCHED");const c=JSON.parse(localStorage.getItem("WATCHED"));l().watchedBthRef.addEventListener("click",(function(){if(null===c)return a.Notify.warning('Please go to home page and add movie to "Watched" list'),void l().emptyListContainer.classList.remove("is-hidden");l().containerListRef.innerHTML="";const e=c.map((e=>i(e))).join("");l().containerListRef.insertAdjacentHTML("beforeend",e)}));r=n("9Bkxl"),a=n("eWCmQ");new(0,r.MovieAPI);localStorage.getItem("QUEUE");const s=JSON.parse(localStorage.getItem("QUEUE"));l().queueBtnRef.addEventListener("click",(function(){if(null===s)return a.Notify.warning('Please go to home page and add movie to "Watched" list'),void l().emptyListContainer.classList.remove("is-hidden");l().containerListRef.innerHTML="";const e=s.map((e=>i(e))).join("");l().containerListRef.insertAdjacentHTML("beforeend",e)}));r=n("9Bkxl");var d=n("2zc8m");a=n("eWCmQ");const m=new(0,r.MovieAPI);let u=[];let f=[];function g(){l().modal.classList.add("is-hidden"),document.removeEventListener("keydown",h),l().modalContainer.removeEventListener("click",p)}function p(e){e.target===e.currentTarget&&g()}function h(e){"Escape"===e.key&&g()}l().containerListRef.addEventListener("click",(function(e){let t=e.target.closest(".film-card__item").dataset.id;if(e.target===e.currentTarget)return;l().modal.classList.remove("is-hidden"),document.addEventListener("keydown",h),l().modalContainer.addEventListener("click",p),m.getFilms(t).then((e=>{console.log(e);const t=(0,d.renderModalMarkup)(e);l().modalFilm.innerHTML=t,function(e){currentResult=e;const t=document.querySelector(".js-btn-watched");t.addEventListener("click",v),null!==localStorage.getItem("WATCHED")&&(u=[...JSON.parse(localStorage.getItem("WATCHED"))]);console.log(u.some((({id:t})=>t===e.id))),u.some((({id:t})=>t===e.id))&&(console.log("Check"),t.textContent="Remove from watched");null!==localStorage.getItem("QUEUE")&&(f=[...JSON.parse(localStorage.getItem("QUEUE"))]);const o=document.querySelector(".js-btn-queue");o.addEventListener("click",S),f.some((({id:t})=>t===e.id))&&(console.log("Check"),o.textContent="Remove from queue")}(e)})).catch((e=>console.log(e)))})),l().modalCloseBtnRef.addEventListener("click",g);const v=e=>{let t=currentResult;const o=document.querySelector(".js-btn-watched");if(null!==localStorage.getItem("WATCHED")&&(u=[...JSON.parse(localStorage.getItem("WATCHED"))]),console.log(t),0===u.lenght)u.push(t),a.Notify.success("Film add to watched"),o.textContent="Remove from watched";else if(u.some((({id:e})=>e===t.id))){u=u.filter((e=>Number(e)!==t.id)),a.Notify.warning("Film Remove from watched");let e=u.findIndex((({id:e})=>e===t.id));u.splice(e,1),o.textContent="Add to watched"}else u.push(t),a.Notify.success("Film add to watched"),o.textContent="Remove from watched";try{const e=JSON.stringify(u);localStorage.setItem("WATCHED",e)}catch(e){console.error("Set state error: ",e.message)}},S=e=>{let t=currentResult;const o=document.querySelector(".js-btn-queue");if(null!==localStorage.getItem("QUEUE")&&(f=[...JSON.parse(localStorage.getItem("QUEUE"))]),0===f.lenght)f.push(t),a.Notify.success("Film added to queue"),o.textContent="Remove from queue";else if(f.some((({id:e})=>e===t.id))){f=f.filter((e=>Number(e)!==t.id)),a.Notify.warning("Film Removed from queue");let e=f.findIndex((({id:e})=>e===t.id));console.log(e),f.splice(e,1),o.textContent="Add to queue"}else f.push(t),a.Notify.success("Film added to queue"),o.textContent="Remove from queue";try{const e=JSON.stringify(f);localStorage.setItem("QUEUE",e)}catch(e){console.error("Set state error: ",e.message)}};n("74Aiq");
//# sourceMappingURL=mylibrary.fd91514b.js.map
