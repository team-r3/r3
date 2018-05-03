import { combineReducers } from 'redux'

// Import action types for the community screen
import {
  COMMUNITY_UPDATE_SEARCH,
  COMMUNITY_UPDATE_SEARCH_HINTS,
  COMMUNITY_SUBMIT_SEARCH,
  COMMUNITY_CLEAR_SEARCH,
  COMMUNITY_CLOSE_SEARCH,
  COMMUNITY_ADD_POST,
  COMMUNITY_APPEND_POSTS,
  COMMUNITY_REMOVE_POST,
  COMMUNITY_RESET_POSTS
} from './CommunityActions'

/*
 * Reducers
 */

// Reducer for the text search submitted value
function searchSubmittedValue (state = '', action) {
  switch (action.type) {
    case COMMUNITY_SUBMIT_SEARCH:
      return action.value

    case COMMUNITY_CLOSE_SEARCH:
      return ''

    default:
      return state
  }
}

// Reducer for the text search input value
function searchInputValue (state = '', action) {
  switch (action.type) {
    case COMMUNITY_UPDATE_SEARCH:
      return action.value

    case COMMUNITY_CLEAR_SEARCH:
    case COMMUNITY_CLOSE_SEARCH:
      return ''

    default:
      return state
  }
}

// Reducer for the text search hints
function searchHints (state = [], action) {
  switch (action.type) {
    case COMMUNITY_UPDATE_SEARCH_HINTS:
      return action.value

    case COMMUNITY_SUBMIT_SEARCH:
    case COMMUNITY_CLEAR_SEARCH:
    case COMMUNITY_CLOSE_SEARCH:
      return []

    default:
      return state
  }
}

// Reducer for the posts array
function posts (state = [], action) {
  switch (action.type) {
    case COMMUNITY_ADD_POST:
      // Add new post at the start of the existing list
      return [action.post, ...state]

    case COMMUNITY_APPEND_POSTS:
      return [...state, ...action.posts]

    case COMMUNITY_REMOVE_POST:
      // Remove any existing post(s) that match the action cuid
      return state.filter(post => post.id !== action.postId)

    case COMMUNITY_RESET_POSTS:
      // This just replaces ALL existing posts with the ones from the action
      return action.posts

    default:
      return state
  }
}

// Combine reducers into a single reducer for the Community screen
export default combineReducers({
  search: combineReducers({
    submittedValue: searchSubmittedValue,
    inputValue: searchInputValue,
    hints: searchHints
  }),
  posts
})

/*
 * Selectors
 */

// Get text search value
export const getSearch = state => state.community.search.submittedValue

// Get text search value
export const getSearchHints = state => state.community.search.hints

// Get text search input value
export const getSearchInput = state => state.community.search.inputValue

// Get all posts
export const getPosts = state => state.community.posts

// Get post by postId
export const getPost = (state, postId) => {
  return state.community.posts.filter(post => post.id === postId)[0]
}

// Get posts, filtered according to the current search input
// (NOTE: this is temporary, in the end we should filter on the server side and )
export const getFilteredPosts = (state) => {
  const filter = getSearchInput(state).trim().toLowerCase()
  return getPosts(state).filter((post) => {
    return (
      post.text.toLowerCase().includes(filter) ||
      matchPersonName(post.user.toLowerCase(), filter)
    )
  })
}

// Helper function used in "getFilteredPosts"
const matchPersonName = (personName, filter) => {
  const filters = filter.split(' ')

  // All filters are included in the name
  if (filters.every(filter => { return personName.includes(filter) })) {
    return true
  }

  // All name parts are referenced in the filter, as initials, plus last name
  if (filters.length === 1) {
    return personName.split(' ').every((value, i, nameParts) => {
      return (i < nameParts.length - 1)
        // First names' initials
        ? value[0] === filters[0][i]
        // Last name must include the remainder of the filter
        : value.includes(filters[0].slice(i))
    })
  }

  return false
}
