import { filmApi } from '../src/js/film-api';
import { renderMarkupPopular } from '../src/js/render-markup-popular-films';

const div = document.querySelector('.js-container');

filmApi().then(data => (div.innerHTML = renderMarkupPopular(data.results)));

filmApi().then(data => console.log('DATA RESULT', data.results));

// const markup = renderMarkupPopular();

// div.insertAdjacentElement('beforeend', markup);
