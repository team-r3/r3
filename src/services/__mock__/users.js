import { fakeReply, fakeError } from 'fictive'
import db from './db'

import { ERR_USER_AUTH_FAILED, ERR_USER_ALREADY_EXISTS } from '../users'

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
  // Check if there's a user that matches the username and password
  const results = db.search(
    'users',
    (user) => (user.username === username && user.password === password)
  )
  if (results.length !== 1) {
    return fakeError({ code: ERR_USER_AUTH_FAILED })
  }

  return fakeReply({ id: results[0].id, token: '123' }) // TODO: proper auth token
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
  // Make sure that there's no user with the same username
  if (db.testSome('users', (user) => user.username === username)) {
    return fakeError({ code: ERR_USER_ALREADY_EXISTS })
  }

  return fakeReply({
    id: db.insert('users', { username, password, ...data }, 'id'),
    token: '123' // TODO: proper auth token
  })
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
  let matchedUsers = filterUsers(filter)

  // Slice the results according to the `batchSize` and `pageNo`
  if (batchSize) {
    matchedUsers = matchedUsers.slice(
      pageNo * batchSize,
      (pageNo + 1) * batchSize
    )
  }

  return fakeReply(matchedUsers.map((user) => ({
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName
  })))
}

/**
 * Get user entries, filtered by a text string
 *
 * @param  {String} filter Text filter to search users by.
 * @return {Array}  Returns an array of user entries, as found in the results.
 */
export const filterUsers = (filter) => {
  const filterParts = filter.trim().toLowerCase().split(' ')
  return db.search('users', (user) => {
    const personName = user.firstName.toLowerCase() + ' ' + user.lastName.toLowerCase()

    // All search words from the filter are included in the user name
    if (filterParts.every(word => personName.includes(word))) {
      return true
    }

    // All user name parts are referenced in the filter, as initials, plus last name
    if (filterParts.length === 1) {
      return personName.split(' ').every((value, i, nameParts) => {
        return (i < nameParts.length - 1)
          // First names' initials
          ? value[0] === filterParts[0][i]
          // Last name must include the remainder of the filter
          : value.includes(filterParts[0].slice(i))
      })
    }

    return false
  })
}
