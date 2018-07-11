/* eslint-env jest */

import { getPost, createPost, searchPosts } from '../posts'

process.env.USE_MOCK_API = true

it('gets a post by Id', () => {
  return expect(getPost(3)).resolves.toEqual({
    id: 3,
    type: 'give',
    text: 'Tenho um Nokia 3310 antigo para dar. A bateria está fraca, mas ainda dá para fazer algumas chamadas e aguenta 1 a 2 dias em stand-by.',
    user: 'Amílcar Santos'
  })
})

it('creates a new post', () => {
  const newPost = {
    type: 'request',
    userId: 6,
    text: 'Hello.'
  }
  return expect(createPost(newPost)).resolves.toEqual({ id: 25 })
})

it('finds post by matching search string in post content', () => {
  return expect(searchPosts('azulejos antigos', 3, 0)).resolves.toEqual([
    {
      id: 19,
      type: 'request',
      text: 'Bom dia. Procuro azulejos antigos, com padrões e/ou desenhos tradicionais.',
      user: 'José Lopes da Silva'
    }
  ])
})

it('finds posts by matching search string in user name', () => {
  return expect(searchPosts('john smith', 3, 0)).resolves.toEqual([
    {
      id: 1,
      type: 'request',
      text: 'Hi, I\'m looking for wooden pallets.',
      user: 'John Smith'
    },
    {
      id: 6,
      type: 'request',
      text: 'Hi, I\'m looking for glass containers, 0.5L to 1L in size.',
      user: 'John Smith'
    },
    {
      id: 14,
      type: 'give',
      text: 'I\'m giving away an old couch. It has some torn bits but can be recovered with some work.',
      user: 'John Smith'
    }

  ])
})

it('finds posts by matching search string in user initials', () => {
  return expect(searchPosts('afon', 3, 0)).resolves.toEqual([
    {
      id: 4,
      type: 'give',
      text: 'I have an old desktop computer that I don\'t use anymore. I\'m giving it away to someone who can make use of it, or to a social institution.',
      user: 'Ana Fonseca'
    }
  ])
})
