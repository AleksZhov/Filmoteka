import { filmApi, filmotekaAPI } from '../js/film-api';
import { renderMarkupPopular } from './render-markup';
import { pagination } from './pagination-library';
import { genres } from './genres.js';
import getRefs from './getRefs.js';

const jsonApi = new filmotekaAPI();

jsonApi
  .getFilmotekaCard()
  .then(film => (getRefs().div.innerHTML = renderMarkupPopular(film.results)));

getRefs().body.classList.add('overflow');
