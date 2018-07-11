import { FakeDB } from 'fictive'

const fakeDB = new FakeDB()

fakeDB.create('posts', require('./posts.json'))
fakeDB.create('users', require('./users.json'))

export default fakeDB
