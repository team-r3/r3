/*
 * Export action constants
 */
export const COMMUNITY_UPDATE_SEARCH = 'COMMUNITY_UPDATE_SEARCH';
export const COMMUNITY_CLEAR_SEARCH  = 'COMMUNITY_CLEAR_SEARCH';
export const COMMUNITY_ADD_POST      = 'COMMUNITY_ADD_POST';
export const COMMUNITY_APPEND_POSTS  = 'COMMUNITY_APPEND_POSTS';
export const COMMUNITY_REMOVE_POST   = 'COMMUNITY_REMOVE_POST';
export const COMMUNITY_RESET_POSTS   = 'COMMUNITY_RESET_POSTS';

/*
 * Export sync action creators
 */

// Update the text search to a new value
export function updateSearch (value) {
	return { type: COMMUNITY_UPDATE_SEARCH, value };
}

// Clear the text search
export function clearSearch () {
	return { type: COMMUNITY_CLEAR_SEARCH };
}

// Add a single post at the top of the list
export function addPost (post) {
	return { type: COMMUNITY_ADD_POST, post };
}

// Append multiple posts at the bottom of the list
export function appendPosts (posts) {
	return { type: COMMUNITY_APPEND_POSTS, posts };
}

// Remove the specified post from the list
export function removePost (postId) {
	return { type: COMMUNITY_REMOVE_POST, postId };
}

// Replaces the current list of posts with a new one
export function resetPosts (posts) {
	return { type: COMMUNITY_RESET_POSTS, posts };
}

/*
 * Export async action creators
 */

// // Execute request to add a new post
// export function addPostRequest (data) {
// 	return (dispatch) => {
// 		return callApi('posts', 'post', {
// 			post: {
// 				name:    data.name,
// 				title:   data.title,
// 				content: data.content
// 			}
//     }).then(res => dispatch(addPost(res.post)));
// 	};
// }

// // Execute request to reload all the posts
// export function fetchPosts() {
// 	return (dispatch) => {
//     return callApi('posts')
//       .then(res => dispatch(resetPosts(res.posts)));
// 	};
// }

// // Execute request to fetch a single post and add the result to the
// // top of the list.
// export function fetchPost(postId) {
// 	return (dispatch) => {
//     return callApi(`posts/${postId}`)
//       .then(res => dispatch(addPost(res.post)));
// 	};
// }

// // Execute request to delete the specified post
// export function deletePostRequest(postId) {
// 	return (dispatch) => {
//     return callApi(`posts/${postId}`, 'delete')
//       .then(() => dispatch(removePost(postId)));
// 	};
// }
