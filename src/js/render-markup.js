export function renderMarkupPopular(film) {
  return film
    .map(({ id, genre_ids, title, release_date, poster_path }) => {
      return `
  
    <li class="film-card__item">
      <img class="film-card__img" data-id=${id} src="https://image.tmdb.org/t/p/w500/${poster_path} " alt="film poster"  />
    <h2 class="film-card__title">${title}</h2>
    <div class="film-card__flex">
    <p class="film-card__flex__text">${Object.values(genre_ids)} |
    </p>
    <p class="film-card__flex__text">${release_date.slice(0, -6)}</p>
    </div>
    </li>
`;
    })
    .join('');
}
