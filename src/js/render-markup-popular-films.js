export function renderMarkupPopular(film) {
  return film
    .map(({ genre_ids, title, release_date, poster_path }) => {
      return `
  <ul class="film-card__list">
    <li class="film-card__item">
      <img class="film-card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt=""  />
    </li>
    <li class="film-card__item">
    <h2 class="film-card__title">${title}</h2>
    </li>
    <div class="film-card__item--flex">
    <li class="film-card__item">
    <p class="film-card__text">CHANGE, CHANGE, CHANGE
    </p></li>
    <li class="film-card__item">
    <p class="film-card__text"></p>3000
    </li></div>
  </ul>
`;
    })
    .join('');
}
