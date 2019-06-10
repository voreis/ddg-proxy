import {
  FETCH_SEARCHS_SUCCESS,
  FETCH_SEARCHS_HISTORY_SUCCESS
} from '../../../actions/search/SearchAction';

const initialState = {
  items: [],
  history: [],
  loading: false,
  error: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCHS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.searchs
      };
    case FETCH_SEARCHS_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        history: action.payload.searchHistory
      };
    default:
      return state;
  }
}