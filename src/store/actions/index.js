import { searchMovies } from 'api/omdbApi';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export const searchMovieResultUpdate = (searchResult) => ({
  type: SEARCH_MOVIE,
  searchResult,
});

export function fetchSearchMovies(keyword) {
  return async (dispatch) => {
    const { data: searchResult } = await searchMovies(keyword);
    dispatch(searchMovieResultUpdate(searchResult));
  };
}
