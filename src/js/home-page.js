import { filmApi, filmotekaAPI } from '../js/film-api';
import { renderMarkupPopular } from './render-markup';
import { pagination } from './pagination-library';
import { genres } from './genres.js';
import getRefs from './getRefs.js';

const jsonApi = new filmotekaAPI();

jsonApi
  .getFilmotekaCard()
  .then(film => (getRefs().div.innerHTML = renderMarkupPopular(film.results)))
  .finally(() => {
    getRefs().loader.classList.add('visually-hidden');
  });

export function paginationPopul(eventData) {
  getRefs().loader.classList.remove('visually-hidden');
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  jsonApi.page = eventData.page;
  jsonApi
    .getFilmotekaCard()
    .then(film => (getRefs().div.innerHTML = renderMarkupPopular(film.results)))
    .then(() => {})
    .finally(() => {
      getRefs().loader.classList.add('visually-hidden');
    });
}

getRefs().body.classList.add('overflow');
pagination.on('afterMove', paginationPopul);
