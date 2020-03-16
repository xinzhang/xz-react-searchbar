import { SEARCH_ENTERED } from 'store/actions';

const initialState = { search: '' };

function currentSearch(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ENTERED:
      return {
        search: action.search,
      };
    default:
      return state;
  }
}

export default currentSearch;
