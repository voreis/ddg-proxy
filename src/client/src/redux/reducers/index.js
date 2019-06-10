import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import searchs from "./search/SearchReducer";

export default combineReducers({
    form: reduxFormReducer,
    searchs
})