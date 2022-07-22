export function renderModalMarkup(film) {
  const {
    id,
    popularity,
    genre_ids,
    title,
    vote_average,
    vote_count,
    overview,
    poster_path,
    original_title,
  } = film;
  return `

      
        <div class="modal__poster">
        <img class="modal__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" /></div>
        <div class="film">
          <h2 class="film__name">${title}</h2>
          <div class="film__details">
            <div class="film__details--static">
              <h3>Vote / Votes</h3>
              <h3>Popularity</h3>
              <h3>Original Title</h3>
              <h3>Genre</h3>
            </div>
            <div class="film__details--dinamic">
              <h3 class="film__vote-votes">
                <span class="vote">${vote_average}</span> /
                <span class="votes">${vote_count}</span>
              </h3>
              <h3 class="film__popularity">${popularity}</h3>
              <h3 class="film__original-title">${original_title}</h3>
              <h3 class="film__genre">${genre_ids}</h3>
            </div>
          </div>
          <h4 class="film__about">About</h4>

          <p class="film__text">${overview}
          </p>

          <div class="film__nav">
            <button class="modal__btn js-btn-watched" type="button">
              add to watched
            </button>
            <button class="modal__btn js-btn-queue" type="button">
              add to queue
            </button>
          </div>
        </div>
     
    
`;
}
