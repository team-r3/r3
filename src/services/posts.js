// Error codes
export const ERR_POST_UNHANDLED_EXCEPTION = 200
export const ERR_POST_NOT_FOUND = 201
export const ERR_POST_DUPLICATE = 202

/**
 * Retrieve the specified post
 *
 * @param {Integer} id Database ID of the post to be retrieved.
 *
 * @return {Promise} A promise that resolves to the post data, or rejects with
 *                   an error code.
 */
export const getPost = (id) => {
  if (process.env.USE_MOCK_API) {
    return require('./__mock__/posts').getPost(id)
  }

  // TODO: The real API call goes here: return fetch(...)
}

/**
 * Add a new post
 *
 * @param {Object} data Data object containing the new post's information.
 *
 * @return {Promise} A promise that resolves to a json object containing the
 *                   new post's ID, or rejects with an error code.
 */
export const createPost = (data) => {
  if (process.env.USE_MOCK_API) {
    return require('./__mock__/posts').createPost(data)
  }

  // TODO: The real API call goes here: return fetch(...)
}

/**
 * Get posts, filtered according to a search string
 *
 * @param {String} filter    Text filter to search posts by.
 * @param {Number} batchSize Maximum size of each batch of results, to be used
 *                            on lazy-loading. When 0 or undefined, all results
 *                            will be retrieved.
 * @param {Number} pageNo    Number of the batch page to retrieve.
 *
 * @return {Promise} A promise that resolves to an array of posts, as found in
 *                   the results.
 */
export const searchPosts = (filter, batchSize, pageNo) => {
  if (process.env.USE_MOCK_API) {
    return require('./__mock__/posts').searchPosts(filter, batchSize, pageNo)
  }

  // TODO: The real API call goes here: return fetch(...)
}
