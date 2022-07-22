import { genres } from './genres.js';
export function renderMarkupPopular(film) {
  return film
    .map(({ id, genre_ids, title, release_date, poster_path }) => {
      let genresCreate = Object.values(genre_ids).map(id => genres[id]);
      if (genresCreate.length > 2) {
        genresCreate.slice(0, 2).join(' , ');
        genresCreate = genresCreate.slice(0, 2).join(' , ') + `, Other`;
      }
      return `
    <li class="film-card__item" data-id=${id}>
      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/${poster_path} " alt="film poster"  />
    <h2 class="film-card__title">${title}</h2>
    <div class="film-card__flex">
    <p class="film-card__flex__text">${genresCreate} |
    </p>
    <p class="film-card__flex__text">${release_date.slice(0, -6)}</p>
    </div>
    </li>
`;
    })
    .join('');
}
