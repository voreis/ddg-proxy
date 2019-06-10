export const FETCH_SEARCHS_SUCCESS = 'FETCH_SEARCHS_SUCCESS';
export const FETCH_SEARCHS_ERROR = 'FETCH_SEARCHS_ERROR';
export const FETCH_SEARCHS_HISTORY_SUCCESS = 'FETCH_SEARCHS_HISTORY_SUCCESS';
export const FETCH_SEARCHS_HISTORY_ERROR = 'FETCH_SEARCHS_HISTORY_ERROR';

export function submitSearchAction(data) {
  let url = `/api/search?term=${data.term}`;
  fetch(url, { method: "GET" }).then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    })
}

export const fetchSearchs = data => dispatch => {
  fetch(`/api/search?term=${data.term}`, { method: 'GET' })
    .then(res => res.json())
    .then(searchs =>
      dispatch({
        type: FETCH_SEARCHS_SUCCESS,
        payload: { searchs }
      }))
    .catch(err => dispatch({ type: FETCH_SEARCHS_ERROR, error: err}));
};

export const fetchSearchHistory = () => dispatch => {
  fetch('/api/search/history', { method: 'GET' })
    .then(res => res.json())
    .then(searchHistory =>
      dispatch({
        type: FETCH_SEARCHS_HISTORY_SUCCESS,
        payload: { searchHistory }
      }))
    .catch(err => dispatch({ type: FETCH_SEARCHS_HISTORY_ERROR, error: err}));
};