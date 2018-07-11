/* eslint-env jest */

import {
  authUser,
  registerUser,
  searchUsers,
  ERR_USER_AUTH_FAILED,
  ERR_USER_ALREADY_EXISTS
} from '../users'

process.env.USE_MOCK_API = true

it('succesfully authenticates a user', () => {
  return expect(authUser('afonseca', 'admin')).resolves.toEqual({ id: 3, token: '123' })
})

it('fails to authenticate a user', () => {
  return expect(authUser('invaliduser', 'password')).rejects.toEqual({ code: ERR_USER_AUTH_FAILED })
})

it('successfully registers a new user', () => {
  const userData = {
    firstName: 'New',
    lastName: 'User'
  }
  return expect(registerUser('new_user', 'password', userData)).resolves.toEqual({ id: 15, token: '123' })
})

it('fails to register a duplicate user', () => {
  const userData = {
    firstName: 'Joana',
    lastName: 'Meireles'
  }
  return expect(registerUser('jmeireles', 'password', userData)).rejects.toEqual({ code: ERR_USER_ALREADY_EXISTS })
})

it('finds user by matching the full user name', () => {
  return expect(searchUsers('john smith')).resolves.toEqual([
    {
      id: 6,
      username: 'jsmith',
      firstName: 'John',
      lastName: 'Smith'
    }
  ])
})

it('finds user by matching search string in user initials', () => {
  return expect(searchUsers('afon')).resolves.toEqual([
    {
      id: 3,
      username: 'afonseca',
      firstName: 'Ana',
      lastName: 'Fonseca'
    }
  ])
})
