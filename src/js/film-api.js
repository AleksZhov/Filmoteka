import axios from 'axios';

export class filmotekaAPI {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = 'bdc0e4e9aaa7667ff59f8bdca91622c0';

  constructor() {
    this.page = 1;
    this.perPage = 1;
    this.totalPage = 0;
  }

  async getFilmotekaCard() {
    const { data } = await axios.get(
      `${this.#BASE_URL}trending/movie/day?api_key=${this.#API_KEY}`
    );
    // console.log('ВНУТРИ FILM-API', data);
    return data;
  }

  // get page() {
  //   return this.page;
  // }

  // incrementPage() {
  //   this.page += 1;
  // }

  // resetPage() {
  //   this.page = 1;
  // }

  getTotalPages(totalHits) {
    this.totalPage = totalHits / this.perPage;
  }
}
