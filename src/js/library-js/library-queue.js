import libraryGetRefs from './libraryGetRefs.js';
import { MovieAPI } from '../movieAPI.js';
import { libraryRenderMarkup } from './libraryRenderMarkup.js';

const movieAPI = new MovieAPI();

const watchedMovies = [];
const LOCAL_STORAGE_WATCHED_KEY = 'QUEUE';

localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY);
const receivedDataWatched = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY)
);

libraryGetRefs().queueBtnRef.addEventListener('click', onQueueBtnHandle);

function onQueueBtnHandle() {
  libraryGetRefs().containerListRef.innerHTML = '';
  receivedDataWatched.forEach(element => {
    movieAPI
      .getFilms(element)
      .then(result => {
        const markup = libraryRenderMarkup(result);

        libraryGetRefs().containerListRef.insertAdjacentHTML(
          'beforeend',
          markup
        );
      })
      .catch(error => console.log(error));
  });
}
