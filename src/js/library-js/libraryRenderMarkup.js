export function libraryRenderMarkup({
  id,
  genres,
  title,
  vote_average,
  release_date,
  poster_path,
}) {
  let genresCreate = genres.map(({ name }) => {
    return name;
  });
  if (genresCreate.length > 2) {
    genresCreate = genresCreate.slice(0, 2).join(', ') + `, Other`;
  } else {
    genresCreate = genresCreate.join(', ');
  }
  return `
    <li class="film-card__item" data-id=${id}>
      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/${poster_path} " alt="film poster"  />
    <h2 class="film-card__title">${title}</h2>
    <div class="film-card__flex">
    <p class="film-card__flex__text">${genresCreate} |
    </p>
    <p class="film-card__flex__text">${release_date.slice(0, -6)}</p>
    <p class="film-card__flex__rating">${vote_average.toFixed(1)}</p>
    </div>
    </li>
`;
}
