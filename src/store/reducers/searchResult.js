import { SEARCH_MOVIE } from 'store/actions';

const initialState = {};

function searchResult(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...action.searchResult,
      };
    default:
      return state;
  }
}

export default searchResult;
