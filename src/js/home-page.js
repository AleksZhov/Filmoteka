import { filmApi, filmotekaAPI } from '../js/film-api';
import { renderMarkupPopular } from './render-markup';
import { pagination } from './pagination-library';
import { genres } from './genres.js';
import getRefs from './getRefs.js';

const jsonApi = new filmotekaAPI();

let genresValues = null;

jsonApi
  .getFilmotekaCard()
  .then(film => (getRefs().div.innerHTML = renderMarkupPopular(film.results)));

jsonApi.getFilmotekaCard().then(film => {});

pagination.on('afterMove', function (eventData) {
  jsonApi.page = eventData.page;
  jsonApi
    .getFilmotekaCard()
    .then(
      film => (getRefs().div.innerHTML = renderMarkupPopular(film.results))
    );
});
