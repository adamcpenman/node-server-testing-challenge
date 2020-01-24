const db = require('../database/dataconfig')

function list(){
    return db('resources')
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first()
}

module.exports = {
    list,
    findById,
}