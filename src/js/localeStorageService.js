import Notiflix from 'notiflix';

// -----------------------------------------------------------------
let watchedMoviesArr = [];
const LOCAL_STORAGE_WATCHED = 'WATCHED';
let queueMoviesArr = [];
const LOCAL_STORAGE_QUEUE = 'QUEUE';

const onAddToWatchedHandle = evt => {
  let id = evt.target.dataset.id;
  if (localStorage.getItem(LOCAL_STORAGE_WATCHED) !== null) {
    watchedMoviesArr = [
      ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_WATCHED)),
    ];
  }
  // check for unique value(id)
  if (!watchedMoviesArr.includes(id)) {
    watchedMoviesArr.push(id);
    Notify.success('Фільм додано');
    evt.target.textContent = 'Remove from watched';
  } else {
    watchedMoviesArr = watchedMoviesArr.filter(film => Number(film) !== id);
    Notify.warning('Цей фільм вже було додано раніше');
    let index = watchedMoviesArr.indexOf(id);
    watchedMoviesArr.splice(index, 1);
    evt.target.textContent = 'Add to watched';
  }

  try {
    const serializedState = JSON.stringify(watchedMoviesArr);
    localStorage.setItem(LOCAL_STORAGE_WATCHED, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
// --------------onAddToQueueHandle
const onAddToQueueHandle = evt => {
  let id = evt.target.dataset.id;
  if (localStorage.getItem(LOCAL_STORAGE_QUEUE) !== null) {
    queueMoviesArr = [...JSON.parse(localStorage.getItem(LOCAL_STORAGE_QUEUE))];
  }
  // check for unique value(id)
  if (!queueMoviesArr.includes(id)) {
    queueMoviesArr.push(id);
    Notify.success('Фільм додано');
    evt.target.textContent = 'Remove from queue';
  } else {
    queueMoviesArr = queueMoviesArr.filter(film => Number(film) !== id);
    Notify.warning('Цей фільм вже було додано раніше');
    let index = queueMoviesArr.indexOf(id);
    queueMoviesArr.splice(index, 1);
    evt.target.textContent = 'Add to queue';
  }
  try {
    const serializedState = JSON.stringify(queueMoviesArr);
    localStorage.setItem(LOCAL_STORAGE_QUEUE, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export { onAddToWatchedHandle, onAddToQueueHandle };

// -------------------------------------------------

// const checkItemInLocalStorage = evt => {
//   const watchedMoviesArr = localStorage.getItem(LOCAL_STORAGE_WATCHED)
//     ? [...JSON.parse(localStorage.getItem(LOCAL_STORAGE_WATCHED))]
//     : [];
//   return watchedMoviesArr.filter(evt => evt.id === id).length;
// };

// const removeFromLocalStorage = evt => {
//   let watchedMoviesArr = [];

//   if (localStorage.getItem(LOCAL_STORAGE_WATCHED) !== null) {
//     watchedMoviesArr = [
//       ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_WATCHED)),
//     ];
//   }

//   // check for existance
//   if (watchedMoviesArr.filter(evt => evt.id === value.id).length) {
//     const item = watchedMoviesArr.findIndex(evt => evt.id === value.id);
//     currArray.splice(item, 1);
//   }

//   try {
//     const serializedState = JSON.stringify(watchedMoviesArr);
//     localStorage.setItem(LOCAL_STORAGE_WATCHED, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// const getItemsInLocalStorage = LOCAL_STORAGE_WATCHED => {
//   try {
//     return localStorage.getItem(LOCAL_STORAGE_WATCHED)
//       ? [...JSON.parse(localStorage.getItem(LOCAL_STORAGE_WATCHED))]
//       : [];
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// export {
//   // save,
//   // load,
//   // remove,
//   onAddToWatchedHandle,
//   onAddToQueueHandle,
//   // btnTextChange,
//   // addToLocalStorage,
//   // checkItemInLocalStorage,
//   // removeFromLocalStorage,
//   // getItemsInLocalStorage,
// };

// 1111111111111111111111111111111111111111111111111111111

// /---функція яка записує в локалсторедж------------------------//
// const save = (key, value) => {
//   const data = JSON.stringify(value);
//   localStorage.setItem(key, data);
// };
// //---функція яка грузить з локалстореджу-----------------------//

// const load = key => {
//   try {
//     const data = localStorage.getItem(key);
//     return data === null ? undefined : JSON.parse(data);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };
// //---функція яка видаляє з локалстореджу-----------------------//

// const remove = key => {
//   return localStorage.removeItem(key);
// };

// // // ----------------------------------------------------------------------------
// // // Перевіряє чи є фільм в черзі чи в переглянутих коли відкрили модалку і міняє тексt кнопки
// function btnTextChange(currentFilmId) {
//   console.log(currentFilmId);

//   if (currentFilmId !== load('WATCHED')) {
//     return;
//   }
//   if (currentFilmId === load('WATCHED')) {
//     load('WATCHED').forEach(element => {
//       console.log(element);
//       if (element.id === currentFilmId) {
//         watchedBtn.textContent = 'Remove from watched';
//       }
//     });
//   }
//   if (!load('QUEUE')) {
//     return;
//   } else {
//     load('QUEUE').forEach(element => {
//       if (element.id === currentFilmId) {
//         queueBtn.textContent = 'Remove from queue';
//       }
//     });
//   }
// }

//-------------Для роботи з localStorage------------------
// let watchedKey = [];
// let queueKey = [];

// // Функция адд в переглянуті

// function addToWatched(e) {
//   if (localStorage.getItem('watchedKey') !== null) {
//     watchedKey = load('watchedKey');
//   }
//   const clickedFilm = load('DetailsFilmsCurrentPage').find(
//     film => film.id === Number(e.target.dataset.id)
//   );
//   if (watchedKey.find(film => film.id === clickedFilm.id)) {
//     watchedKey = watchedKey.filter(film => film.id !== clickedFilm.id);
//     save('watchedKey', watchedKey);
//     const btNwatch = e.target;
//     console.log(watchedKey);
//     btNwatch.textContent = 'Add to watched';
//   } else {
//     watchedKey.push(clickedFilm);
//     save('watchedKey', watchedKey);
//     const btNwatch = e.target;
//     btNwatch.textContent = 'Remove from watched';
//   }
// }

// // Функция адд в чергу
// function addToQueue(e) {
//   if (localStorage.getItem('queueKey') !== null) {
//     queueKey = load('queueKey');
//   }
//   const clickedFilm = load('DetailsFilmsCurrentPage').find(
//     film => film.id === Number(e.target.dataset.id)
//   );
//   if (queueKey.find(film => film.id === clickedFilm.id)) {
//     queueKey = queueKey.filter(film => film.id !== clickedFilm.id);

//     save('queueKey', queueKey);
//     const btNwatch = e.target;
//     btNwatch.textContent = 'Add to queue';
//   } else {
//     queueKey.push(clickedFilm);
//     save('queueKey', queueKey);
//     const btNwatch = e.target;
//     btNwatch.textContent = 'Remove from queue';
//   }
// }

//--------------EXPORT------------------------------------
// export default {
//   save,
//   load,
//   remove,
//   addToQueue,
//   addToWatched,
//   btnTextChange,
// };
// -------------сторінка---Library------------------
// const galleryEl = document.querySelector('.film-card__list');
// const errorImgEl = document.querySelector('.errorImg__container');
// const emptyLibEl = document.querySelector('.errorImg__container--Library');
// const paginationContainer = document.querySelector('.tui-pagination');

// const watchedBtn = document.querySelector('.js-btn-watched');
// const queueBtn = document.querySelector('.js-btn-queue');
// watchedBtn.addEventListener('click', onWatchedClick);
// queueBtn.addEventListener('click', onQueueClick);

// function onWatchedClick(e) {
//   galleryReset();
//   if (localStorage.getItem('watchedKey') === null) {
//     onEmptyLibraryError();
//     return;
//   }

//   const lengthArrWatchedLS = JSON.parse(
//     localStorage.getItem('watchedKey')
//   ).length;
//   if (lengthArrWatchedLS === 0) onEmptyLibraryError();
//   Notiflix.Loading.init({ svgColor: '#ff6b08' });
//   Notiflix.Loading.dots('Loading...');
//   const watchedFilms = localeStorageServices.load('watchedKey');
//   pag.l(watchedFilms);
//   localeStorageServices.save('DetailsFilmsCurrentPage', watchedFilms);
//   Notiflix.Loading.remove(350);
// }

// function onQueueClick(e) {
//   galleryReset();
//   if (localStorage.getItem('queueKey') === null) {
//     onEmptyLibraryError();
//     return;
//   }
//   const lengthArrQueueLS = JSON.parse(localStorage.getItem('queueKey')).length;
//   if (lengthArrQueueLS === 0) onEmptyLibraryError();
//   Notiflix.Loading.init({ svgColor: '#ff6b08' });
//   Notiflix.Loading.dots('Loading...');
//   const queueFilms = localeStorageServices.load('queueKey');
//   pag.libraryPagination(queueFilms);
//   let voteEl = document.querySelectorAll('.vote');
//   console.log(voteEl);
//   for (let i = 0; i < voteEl.length; i += 1) {
//     voteEl[i].classList.remove('errorImg-hidden');
//   }
//   localeStorageServices.save('DetailsFilmsCurrentPage', queueFilms);
//   Notiflix.Loading.remove(350);
// }

// function onEmptyLibraryError() {
//   Notiflix.Loading.remove(350);
//   emptyLibEl.classList.remove('errorImg-hidden');
//   galleryEl.classList.add('errorImg-hidden');
//   paginationContainer.classList.add('errorImg-hidden');
// }

// // перезавантаження галереї
// function galleryReset() {
//   galleryEl.innerHTML = '';
//   errorEl.innerHTML = '';
//   paginationContainer.innerHTML = '';
//   errorEl.classList.add('search-error--hidden');
//   errorImgEl.classList.add('visually-hidden');
//   galleryEl.classList.remove('visually-hidden');
//   paginationContainer.classList.remove('visually-hidden');
//   emptyLibEl.classList.add('visually-hidden');
// }

// export { onWatchedClick, onQueueClick };
