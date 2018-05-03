/*
 * Export action constants
 */
export const INFORMATON_UPDATE_SEARCH = 'INFORMATON_UPDATE_SEARCH'
export const INFORMATON_CLEAR_SEARCH = 'INFORMATON_CLEAR_SEARCH'

/*
 * Export sync action creators
 */

// Update the text search to a new value
export function updateSearch (value) {
  return { type: INFORMATON_UPDATE_SEARCH, value }
}

// Clear the text search
export function clearSearch () {
  return { type: INFORMATON_CLEAR_SEARCH }
}
