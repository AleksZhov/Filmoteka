!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,r.call(c.exports,c,c.exports),c.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("ghnK3"),r("4smAb");var c=function(){return{containerListRef:document.querySelector(".container__list"),watchedBthRef:document.querySelector(".js-btn-watched"),queueBtnRef:document.querySelector(".js-btn-queue")}};var i=new(0,r("lHIzZ").MovieAPI),a="WATCHED";localStorage.getItem(a);var o=JSON.parse(localStorage.getItem(a));c().watchedBthRef.addEventListener("click",(function(){c().containerListRef.innerHTML="",o.forEach((function(e){i.getFilms(e).then((function(e){var t,n,r,i,a,o,l,s,f=(n=(t=e).id,r=t.genres,i=t.title,a=t.vote_average,o=t.release_date,l=t.poster_path,s=(s=r.map((function(e){return e.name}))).length>2?s.slice(0,2).join(", ")+", Other":s.join(", "),'\n    <li class="film-card__item" data-id='.concat(n,'>\n      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/').concat(l,' " alt="film poster"  />\n    <h2 class="film-card__title">').concat(i,'</h2>\n    <div class="film-card__flex">\n    <p class="film-card__flex__text">').concat(s,' |\n    </p>\n    <p class="film-card__flex__text">').concat(o.slice(0,-6),'</p>\n    <p class="film-card__flex__rating">').concat(a,"</p>\n    </div>\n    </li>\n"));c().containerListRef.insertAdjacentHTML("beforeend",f)})).catch((function(e){return console.log(e)}))}))}))}();
//# sourceMappingURL=mylibrary.72c9b717.js.map
