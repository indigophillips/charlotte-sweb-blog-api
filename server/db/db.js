const path = require('path')
const config = require(path.join(__dirname, '../../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getPosts,
  addPosts,
  updatePost,
  getPost,
  deletePost
}

function getPosts (testDb) {
  const db = testDb || knex
  return db('Posts').select()
}

function addPosts (newPost, testDb) {
  const db = testDb || knex
  return db('Posts').insert(newPost)
}

function updatePost (oldPost, testDb) {
  const db = testDb || knex
  return db('Posts')
    .where('id', oldPost.id)
    .update(oldPost)
}

function getPost (id, testDb) {
  const db = testDb || knex
  return db('Posts')
    .where('id', id).select()
}

function deletePost (id, testDb) {
  const db = testDb || knex
  return db('Posts')
    .where('id', id).del()
}
