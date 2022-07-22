// import localeStorageServices from './localeStorageServices';
import Notiflix from 'notiflix';
// import pag from './pagination';
// import { galleryReset } from './galleryFetch';

//---функція яка записує в локалсторедж------------------------//
const save = (key, value) => {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
};
//---функція яка грузить з локалстореджу-----------------------//
const load = key => {
  try {
    const data = localStorage.getItem(key);
    return data === null ? undefined : JSON.parse(data);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
//---функція яка видаляє з локалстореджу-----------------------//
const remove = key => {
  return localStorage.removeItem(key);
};
// Перевіряє чи є фільм в черзі чи в переглянутих коли відкрили модалку і міняє тексt кнопки
function btnTextChange(currentFilmId) {
  //-----шукаємо кнопки--------------------------------------------------
  const watchedBtn = document.querySelector('.js-btn-watched');
  const queueBtn = document.querySelector('.js-btn-queue');
  //---Перевіряємо чи є цей фільм в ЛС в масиві Watched------------------
  if (!load('watchedKey')) {
    return;
  } else {
    load('watchedKey').forEach(element => {
      if (element.id === currentFilmId) {
        watchedBtn.textContent = 'Remove from watched';
      }
    });
  }
  if (!load('queueKey')) {
    return;
  } else {
    load('queueKey').forEach(element => {
      if (element.id === currentFilmId) {
        queueBtn.textContent = 'Remove from queue';
      }
    });
  }
}
//-------------Для роботи з localStorage------------------
let watchedKey = [];
let queueKey = [];

// Функция адд в переглянуті

function addToWatched(e) {
  if (localStorage.getItem('watchedKey') !== null) {
    watchedKey = load('watchedKey');
  }
  const clickedFilm = load('DetailsFilmsCurrentPage').find(
    film => film.id === Number(e.target.dataset.id)
  );
  if (watchedKey.find(film => film.id === clickedFilm.id)) {
    watchedKey = watchedKey.filter(film => film.id !== clickedFilm.id);
    save('watchedKey', watchedKey);
    const btNwatch = e.target;
    console.log(watchedKey);
    btNwatch.textContent = 'Add to watched';
  } else {
    watchedKey.push(clickedFilm);
    save('watchedKey', watchedKey);
    const btNwatch = e.target;
    btNwatch.textContent = 'Remove from watched';
  }
}

// Функция адд в чергу
function addToQueue(e) {
  if (localStorage.getItem('queueKey') !== null) {
    queueKey = load('queueKey');
  }
  const clickedFilm = load('DetailsFilmsCurrentPage').find(
    film => film.id === Number(e.target.dataset.id)
  );
  if (queueKey.find(film => film.id === clickedFilm.id)) {
    queueKey = queueKey.filter(film => film.id !== clickedFilm.id);

    save('queueKey', queueKey);
    const btNwatch = e.target;
    btNwatch.textContent = 'Add to queue';
  } else {
    queueKey.push(clickedFilm);
    save('queueKey', queueKey);
    const btNwatch = e.target;
    btNwatch.textContent = 'Remove from queue';
  }
}
//--------------EXPORT------------------------------------
export default {
  save,
  load,
  remove,
  addToQueue,
  addToWatched,
  btnTextChange,
};
// -------------сторінка---Library------------------
const galleryEl = document.querySelector('.film-card__list');
const errorImgEl = document.querySelector('.errorImg__container');
const emptyLibEl = document.querySelector('.errorImg__container--Library');
const paginationContainer = document.querySelector('.tui-pagination');

const watchedBtn = document.querySelector('.js-btn-watched');
const queueBtn = document.querySelector('.js-btn-queue');
watchedBtn.addEventListener('click', onWatchedClick);
queueBtn.addEventListener('click', onQueueClick);

function onWatchedClick(e) {
  galleryReset();
  if (localStorage.getItem('watchedKey') === null) {
    onEmptyLibraryError();
    return;
  }

  const lengthArrWatchedLS = JSON.parse(
    localStorage.getItem('watchedKey')
  ).length;
  if (lengthArrWatchedLS === 0) onEmptyLibraryError();
  Notiflix.Loading.init({ svgColor: '#ff6b08' });
  Notiflix.Loading.dots('Loading...');
  const watchedFilms = localeStorageServices.load('watchedKey');
  pag.l(watchedFilms);
  localeStorageServices.save('DetailsFilmsCurrentPage', watchedFilms);
  Notiflix.Loading.remove(350);
}

function onQueueClick(e) {
  galleryReset();
  if (localStorage.getItem('queueKey') === null) {
    onEmptyLibraryError();
    return;
  }
  const lengthArrQueueLS = JSON.parse(localStorage.getItem('queueKey')).length;
  if (lengthArrQueueLS === 0) onEmptyLibraryError();
  Notiflix.Loading.init({ svgColor: '#ff6b08' });
  Notiflix.Loading.dots('Loading...');
  const queueFilms = localeStorageServices.load('queueKey');
  pag.libraryPagination(queueFilms);
  let voteEl = document.querySelectorAll('.vote');
  console.log(voteEl);
  for (let i = 0; i < voteEl.length; i += 1) {
    voteEl[i].classList.remove('errorImg-hidden');
  }
  localeStorageServices.save('DetailsFilmsCurrentPage', queueFilms);
  Notiflix.Loading.remove(350);
}

function onEmptyLibraryError() {
  Notiflix.Loading.remove(350);
  emptyLibEl.classList.remove('errorImg-hidden');
  galleryEl.classList.add('errorImg-hidden');
  paginationContainer.classList.add('errorImg-hidden');
}

export { onWatchedClick, onQueueClick };
