import { combineReducers } from 'redux';

// Import action types for the information screen
import {
  INFORMATON_UPDATE_SEARCH,
  INFORMATON_CLEAR_SEARCH
} from './InformationActions';

/*
 * Reducers 
 */

// Reducer for the text search value
function search (state = '', action) {
  switch (action.type) {
    case INFORMATON_UPDATE_SEARCH:
      return action.value;

    case INFORMATON_CLEAR_SEARCH:
      return '';

    default:
      return state;
  }
}

// Combine reducers into a single reducer for the Information screen
export default combineReducers({
  search
});

/* 
 * Selectors
 */

// Get text search value
export const getSearch = state => state.information.search;
