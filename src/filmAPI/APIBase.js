import { API_KEY } from './APIAuth';
// api base info
export const BASE_URL = () => 'https://api.themoviedb.org/3';
export const LANG = () => `language=en-US`;
// api urls to get data
export const getImageByUrl = (movieId) =>
  `${BASE_URL()}/movie/${movieId}/images?api_key=${API_KEY()}&${LANG()}`;
export const getVideoByUrl = (movieId) =>
  `${BASE_URL()}/movie/${movieId}/videos?api_key=${API_KEY()}&${LANG()}`;
export const getPopularFilms = (page) =>
  `${BASE_URL()}popular?api_key=${API_KEY()}&${LANG()}&page=${page}`;
