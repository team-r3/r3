import { fakeReply, fakeError } from 'fictive'
import db from './db'
import { filterUsers } from './users'
import { ERR_POST_NOT_FOUND } from '../posts'

/**
 * Retrieve the specified post
 *
 * @param {Integer} id Database ID of the post to be retrieved.
 *
 * @return {Promise} A promise that resolves to the post data, or rejects with
 *                   an error code.
 */
export const getPost = (id) => {
  const post = db.search('posts', (post) => (post.id === id))[0]
  if (!post) {
    return fakeError({ code: ERR_POST_NOT_FOUND })
  }
  const user = db.search('users', (user) => (user.id === post.userId))[0]

  return fakeReply({
    id: post.id,
    type: post.type,
    text: post.text,
    user: user.firstName + ' ' + user.lastName
  })
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
  return fakeReply({ id: db.insert('posts', data, 'id') })
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
 * @return {Array} A promise that resolves to an array of posts, as found in
 *                 the results.
 */
export const searchPosts = (filter, batchSize, pageNo) => {
  const filterString = filter.trim().toLowerCase()

  // Find matching user IDs
  const matchedUserIds = filterUsers(filter).map(user => user.id)

  // Find matching posts
  let matchedPosts = db.search('posts', (post) => (
    filterString === '' ||
    post.text.toLowerCase().includes(filterString) ||
    matchedUserIds.indexOf(post.userId) !== -1
  ))

  // Slice the results according to the `batchSize` and `pageNo`
  if (batchSize) {
    matchedPosts = matchedPosts.slice(
      pageNo * batchSize,
      (pageNo + 1) * batchSize
    )
  }

  return fakeReply(matchedPosts.map(post => {
    const user = db.search('users', (user) => (user.id === post.userId))[0]
    return {
      id: post.id,
      type: post.type,
      text: post.text,
      user: user.firstName + ' ' + user.lastName
    }
  }))
}
