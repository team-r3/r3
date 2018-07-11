// Error codes
export const ERR_USER_UNHANDLED_EXCEPTION = 100
export const ERR_USER_AUTH_FAILED = 101
export const ERR_USER_ALREADY_EXISTS = 102

/**
 * Authenticate user
 *
 * @param {String} username
 * @param {String} password
 *
 * @return {Promise} A promise that resolves to a json object containing the
 *                   new user's ID, and the authentication token.
 */
export const authUser = (username, password) => {
  if (process.env.USE_MOCK_API) {
    return require('./__mock__/users').authUser(username, password)
  }

  // TODO: The real API call goes here: return fetch(...)
}

/**
 * Add a new user
 *
 * @param {String} username New user's username. Must be unique.
 * @param {String} password New user's password.
 * @param {Object} data     Data object containing additional information for
 *                          the user.
 *
 * @return {Promise} A promise that resolves to a json object containing the
 *                   new user's ID, and the authentication token.
 */
export const registerUser = (username, password, data) => {
  if (process.env.USE_MOCK_API) {
    return require('./__mock__/users').registerUser(username, password, data)
  }

  // TODO: The real API call goes here: return fetch(...)
}

/**
 * Retrieve user entries, filtered by a text string
 *
 * @param {String} filter    Text filter to search users by.
 * @param {Number} batchSize Maximum size of each batch of results, to be used
 *                            on lazy-loading. When 0 or undefined, all results
 *                            will be retrieved.
 * @param {Number} pageNo    Number of the batch page to retrieve.
 *
 * @return {Promise} A promise that resolves to an array of user entries, as
 *                   found in the results.
 */
export const searchUsers = (filter, batchSize, pageNo) => {
  if (process.env.USE_MOCK_API) {
    return require('./__mock__/users').searchUsers(filter, batchSize, pageNo)
  }

  // TODO: The real API call goes here: return fetch(...)
}
