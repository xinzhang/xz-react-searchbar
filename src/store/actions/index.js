import { searchMovies } from 'api/omdbApi';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_ENTERED = 'SEARCH_ENTERED';

export const searchMovieResultUpdate = (searchResult) => ({
  type: SEARCH_MOVIE,
  searchResult,
});

export const searchEntered = (search) => ({
  type: SEARCH_ENTERED,
  search,
});

export function fetchSearchMovies(keyword) {
  return async (dispatch) => {
    const { data: searchResult } = await searchMovies(keyword);
    dispatch(searchMovieResultUpdate(searchResult));
  };
}
