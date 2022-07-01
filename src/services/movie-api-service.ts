import * as API from '../environmets/urls';

class MovieApiService {
  movieList = [];
  popularList = [];
  constructor() {}

  createHeaders = () => {};

  options = {
    method: 'GET',
    headers: {
      'X-API-KEY': API.API_KEY,
    },
  };

  getPopularList = (setIsLoading: Function) => {
    setIsLoading(true);
    fetch(
      API.API_URL +
        '?yearFrom=2022&yearTo=2022&page=1&type=FILM&order=NUM_VOTE&ratingFrom=8',
      this.options,
    )
      .then(response => response.json())
      .then(response => {
        this.popularList = response.items;
        console.log('111');
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };

  getPremiersList = (setIsLoading: Function) => {
    setIsLoading(true);
    fetch(
      API.API_URL +
        '?yearFrom=2022&yearTo=2022&page=1&type=FILM&order=NUM_VOTE&ratingFrom=5',
      this.options,
    )
      .then(response => response.json())
      .then(response => {
        this.movieList = response.items;
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };
}

export const movieApiService = new MovieApiService();
