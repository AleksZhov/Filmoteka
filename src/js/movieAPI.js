const axios = require('axios').default;

export class MovieAPI {
  #BASE_URL = 'https://api.themoviedb.org/3/movie/';
  #API_KEY = 'bdc0e4e9aaa7667ff59f8bdca91622c0';
  constructor() {}
  async getFilms(id) {
    try {
      const response = await axios({
        method: 'get',
        url: `${this.#BASE_URL}/${id}?api_key=${this.#API_KEY}&language=en-US`,
      });

      const result = await response.data;
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
