import { filmApi, filmotekaAPI } from '../js/film-api';
import { renderMarkupPopular } from './render-markup';
import { pagination } from './pagination-library';
import { genres } from './genres.js';

const div = document.querySelector('.container__list');

const jsonApi = new filmotekaAPI();

let genresValues = null;

jsonApi
  .getFilmotekaCard()
  .then(film => (div.innerHTML = renderMarkupPopular(film.results)));

jsonApi.getFilmotekaCard().then(film => {
  console.log(film.results);
});
