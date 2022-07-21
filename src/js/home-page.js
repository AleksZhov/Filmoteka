import { filmApi } from '../js/film-api';
import { renderMarkupPopular } from './render-markup';
import { pagination } from './pagination-library';

const div = document.querySelector('.js-container');
// const container = document.getElementById('pagination');
// const pagination = new Pagination(container);

filmApi().then(data => (div.innerHTML = renderMarkupPopular(data.results)));

filmApi().then(data => console.log('DATA RESULT', data.results));
// filmApi().then(data => console.log('DATA GENRE', data.genres[0].name));
