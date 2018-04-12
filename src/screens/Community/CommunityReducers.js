import { combineReducers } from 'redux';

// Import action types for the community screen
import {
  COMMUNITY_UPDATE_SEARCH,
  COMMUNITY_CLEAR_SEARCH,
  COMMUNITY_ADD_POST,
  COMMUNITY_APPEND_POSTS,
  COMMUNITY_REMOVE_POST,
  COMMUNITY_RESET_POSTS
} from './ComunityActions';

/*
 * Reducers 
 */

// Reducer for the text search value
function search (state = '', action) {
  switch (action.type) {
    case COMMUNITY_UPDATE_SEARCH:
      return action.value;

    case COMMUNITY_CLEAR_SEARCH:
      return '';

    default:
      return state;
  }
}

// Reducer for the posts array
function posts (state = [], action) {
  switch (action.type) {
    case COMMUNITY_ADD_POST:
			// Add new post at the start of the existing list
      return [action.post, ...state];

    case COMMUNITY_APPEND_POSTS:
      return [...state, ...action.posts];

    case COMMUNITY_REMOVE_POST:
			// Remove any existing post(s) that match the action cuid
			return state.filter(post => post.id !== action.postId);

    case COMMUNITY_RESET_POSTS:
			// This just replaces ALL existing posts with the ones from the action
      return action.posts

    default:
      return state
  }
}

// Combine reducers into a single reducer for the Community screen
export default combineReducers({
  search,
  posts
});

/* 
 * Selectors
 */

// Get text search value
export const getSearch = state => state.community.search;

// Get all posts
export const getPosts = state => state.community.posts;

// Get post by postId
export const getPost = (state, postId) => {
  return state.community.posts.filter(post => post.id === postId)[0];
};
