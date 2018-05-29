/*
 * Export action constants
 */
export const INFORMATION_UPDATE_SEARCH = 'INFORMATION_UPDATE_SEARCH'
export const INFORMATION_CLEAR_SEARCH = 'INFORMATION_CLEAR_SEARCH'

/*
 * Export sync action creators
 */

// Update the text search to a new value
export function updateSearch (value) {
  return { type: INFORMATION_UPDATE_SEARCH, value }
}

// Clear the text search
export function clearSearch () {
  return { type: INFORMATION_CLEAR_SEARCH }
}
