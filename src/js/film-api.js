export function filmApi(name) {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=bdc0e4e9aaa7667ff59f8bdca91622c0`
  ).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}
