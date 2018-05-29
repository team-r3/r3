import { combineReducers } from 'redux'

// Import action types for the login screen
import {
  LOGIN_SIGNIN,
  LOGIN_SIGNOUT
} from './LoginActions'

/*
 * Reducers
 */

// Reducer for the text search value
function isLoggedIn (state = false, action) {
  switch (action.type) {
    case LOGIN_SIGNIN:
      return true

    case LOGIN_SIGNOUT:
      return false

    default:
      return state
  }
}

// Combine reducers into a single reducer for the Login screen
export default combineReducers({
  isLoggedIn
})

/*
 * Selectors
 */

// Get login state
export const getLogin = state => state.login.isLoggedIn
