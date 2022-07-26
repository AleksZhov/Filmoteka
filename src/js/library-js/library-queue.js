import libraryGetRefs from './libraryGetRefs.js';
import { MovieAPI } from '../movieAPI.js';
import { libraryRenderMarkup } from './libraryRenderMarkup.js';
import Notiflix, { Notify } from 'notiflix';

const movieAPI = new MovieAPI();

const LOCAL_STORAGE_QUEUE_KEY = 'QUEUE';

libraryGetRefs().queueBtnRef.addEventListener('click', onQueueBtnHandle);

function onQueueBtnHandle() {
  const receivedDataWatched = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_QUEUE_KEY)
  );
  if (receivedDataWatched === null || receivedDataWatched.length === 0) {
    Notify.warning('Please go to home page and add movie to "Watched" list');
    libraryGetRefs().emptyListContainer.classList.remove('is-hidden');
    libraryGetRefs().containerListRef.innerHTML = '';
    return;
  } else if (
    !libraryGetRefs().emptyListContainer.classList.contains('is-hidden')
  ) {
    libraryGetRefs().emptyListContainer.classList.add('is-hidden');
  }
  libraryGetRefs().containerListRef.innerHTML = '';
  const markup = receivedDataWatched
    .map(element => {
      return libraryRenderMarkup(element);
    })
    .join('');
  libraryGetRefs().containerListRef.insertAdjacentHTML('beforeend', markup);
}
