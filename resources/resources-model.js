const db = require('../database/dataconfig')

function list(){
    return db('resources')
        .select("resource")
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first()
}

async function insert(resource) {
    const [id] = await db("resources")
        .insert(resource)
        return findById(id)
}

async function update(id, changes) {
    await db("resources")
        .where({ id })
        .update(changes)

        return findById(id)
}

function remove(id) {
    return db("resources")
    .where({ id })
    .del()
}


module.exports = {
    list,
    findById,
    insert,
    update,
    remove,
}