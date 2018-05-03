import { combineReducers } from 'redux'

// Import action types for the map screen
import { MAP_UPDATE_SEARCH, MAP_CLEAR_SEARCH } from './MapActions'

/*
 * Reducers
 */

// Reducer for the text search value
function search (state = '', action) {
  switch (action.type) {
    case MAP_UPDATE_SEARCH:
      return action.value

    case MAP_CLEAR_SEARCH:
      return ''

    default:
      return state
  }
}

// Combine reducers into a single reducer for the Map screen
export default combineReducers({
  search
})

/*
 * Selectors
 */

// Get text search value
export const getSearch = state => state.map.search
