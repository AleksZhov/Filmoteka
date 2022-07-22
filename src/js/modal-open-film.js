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
  let id = evt.target.closest('.film-card__item').dataset.id;

  movieAPI.getFilms(id).then(result => {
    const markup = renderModalMarkup(result);
    getRefs().modalFilm.innerHTML = markup;
  });
}

getRefs().modalCloseBtnRef.addEventListener('click', onModalCloseBtnHandle);

function onModalCloseBtnHandle() {
  getRefs().modal.classList.add('is-hidden');
}
