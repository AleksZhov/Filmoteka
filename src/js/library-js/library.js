import libraryGetRefs from './libraryGetRefs.js';
import { MovieAPI } from '../movieAPI.js';
import { libraryRenderMarkup } from './libraryRenderMarkup.js';
import Notiflix, { Notify } from 'notiflix';

const movieAPI = new MovieAPI();

const watchedMovies = [];
const LOCAL_STORAGE_WATCHED_KEY = 'WATCHED';
localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY);
const receivedDataWatched = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_WATCHED_KEY)
);
libraryGetRefs().watchedBthRef.addEventListener('click', onWatchBtnHandle);

function onWatchBtnHandle() {
  if (receivedDataWatched === null) {
    Notify.warning('Please go to home page and add movie to "Watched" list');
    libraryGetRefs().emptyListContainer.classList.remove('is-hidden');
    return;
  }
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
