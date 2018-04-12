/*
 * Export action constants
 */
export const MAP_UPDATE_SEARCH = 'MAP_UPDATE_SEARCH';
export const MAP_CLEAR_SEARCH  = 'MAP_CLEAR_SEARCH';

/*
 * Export sync action creators
 */

// Update the text search to a new value
export function updateSearch (value) {
	return { type: MAP_UPDATE_SEARCH, value };
}

// Clear the text search
export function clearSearch () {
	return { type: MAP_CLEAR_SEARCH };
}
