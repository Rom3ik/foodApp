import * as API from '../environmets/urls';

class MovieApiService {
  movieList = [];
  constructor() {}

  createHeaders = () => {};

  options = {
    method: 'GET',
    headers: {
      'X-API-KEY': API.API_KEY,
    },
  };

  getPremiersList = (setIsLoading: Function) => {
    setIsLoading(true);
    fetch(
      API.API_URL +
        '?yearFrom=2022&yearTo=2022&page=1&type=FILM&order=NUM_VOTE',
      this.options,
    )
      .then(response => response.json())
      .then(response => {
        this.movieList = response.items;
        // console.log('ths', this.movieList);
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };
}

export const movieApiService = new MovieApiService();
