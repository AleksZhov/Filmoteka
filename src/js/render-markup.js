export function renderMarkupPopular(film) {
  return film
    .map(({ genre_ids, title, release_date, poster_path }) => {
      return `
  <ul class="film-card__list">
    <li class="film-card__item">
      <img class="film-card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="film poster"  />
    </li>
    <li class="film-card__item">
    <h2 class="film-card__title">${title}</h2>
    </li>
    <div class="film-card__flex">
    <li class="film-card__flex__item">
    <p class="film-card__flex__text">Change, Change, Change |
    </p></li>
    <li class="film-card__flex__item">
    <p class="film-card__flex__text">${release_date.slice(0, -6)}</p>
    </li></div>
  </ul>
`;
    })
    .join('');
}

// export function renderMarkupPopular(film) {
//   return film.map(film => {
//     return film;
//   });
// }
