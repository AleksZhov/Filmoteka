import debounce from 'lodash.debounce';
import { renderMarkupPopular } from './render-markup.js';
import { pagination } from './pagination-library.js';
import {paginationPopul} from './home-page.js'
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('.header_input');
const debounceInput = debounce(serchValue, DEBOUNCE_DELAY);
const value = inputEl.addEventListener('input', debounceInput);
const domEl = document.querySelector('.container__list');
const noName = document.querySelector('#noName');
const noGiv = document.querySelector('#noGiv');

function serchValue(evt) {
  let { value } = evt.target;
  objApi.value = value;
  if (objApi.value === '') {
      noName.classList.add('is-hidden-text');
      }

  pagination.off('beforeMove', paginationData)
  pagination.off('afterMove', paginationPopul)
  pagination.on('beforeMove',paginationData)

  pagination.movePageTo(1);
}

function chekFunc(film) {
  if(film.results.length === 0){
    noName.classList.remove('is-hidden-text') 
    noGiv.classList.remove('is-hidden-giv')
  }else{
    noName.classList.add('is-hidden-text')
    noGiv.classList.add('is-hidden-giv');
  }
      
  const markup = renderMarkupPopular(film.results);
  domEl.innerHTML = markup;
}

const objApi = {
  value: '',
  page: 1,
  ApiSearch() {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bdc0e4e9aaa7667ff59f8bdca91622c0&language=en-US&query=${this.value}&page=${this.page}&include_adult=false&year=2001`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
  },
};

 function paginationData(eventData) {
  objApi.page = eventData.page;
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
  if (objApi.value) {
    objApi
      .ApiSearch()
      .then(chekFunc)
      .catch(error => {
        console.log('error', error);
       });
  }
};
