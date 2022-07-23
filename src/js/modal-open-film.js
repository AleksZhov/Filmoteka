import getRefs from './getRefs.js';
import { MovieAPI } from './movieAPI';
import { renderModalMarkup } from './renderModalMarkup';
const movieAPI = new MovieAPI();

getRefs().containerListRef.addEventListener('click', onFilmCardClickHandle);
function onFilmCardClickHandle(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  getRefs().modal.classList.remove('is-hidden');
  document.addEventListener('keydown', onEscapeCloseHandle);
  getRefs().modalContainer.addEventListener(
    'click',
    onModalContainerClickHandle
  );
  let id = evt.target.closest('.film-card__item').dataset.id;

  movieAPI
    .getFilms(id)
    .then(result => {
      const markup = renderModalMarkup(result);
      getRefs().modalFilm.innerHTML = markup;
    })
    .catch(error => console.log(error));
}

getRefs().modalCloseBtnRef.addEventListener('click', onModalCloseBtnHandle);

function onModalCloseBtnHandle() {
  getRefs().modal.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscapeCloseHandle);
  getRefs().modalContainer.removeEventListener(
    'click',
    onModalContainerClickHandle
  );
}

function onModalContainerClickHandle(evt) {
  if (evt.target === evt.currentTarget) {
    onModalCloseBtnHandle();
  }
}

function onEscapeCloseHandle(evt) {
  if (evt.key === 'Escape') {
    onModalCloseBtnHandle();
  }
}
