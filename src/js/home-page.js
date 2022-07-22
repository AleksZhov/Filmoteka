import { filmApi, filmotekaAPI } from '../js/film-api';
import { renderMarkupPopular } from './render-markup';
import { pagination } from './pagination-library';

import { genres } from './genres.js';

const div = document.querySelector('.container__list');

// const jsonApi = new filmotekaAPI();

// jsonApi
//   .getFilmotekaCard()
//   .then(data => (div.innerHTML = renderMarkupPopular(data.results)));

filmApi().then(data => {
  div.innerHTML = console.log('ФИЛЬМЫ', data.results);
});

filmApi().then(data => {
  div.innerHTML = renderMarkupPopular(data.results);
});

genres.map(el => {
  console.log(el.name);
});
