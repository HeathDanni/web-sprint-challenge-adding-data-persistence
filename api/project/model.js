// build your `Project` model here
const db = require("../../data/dbConfig")
module.exports = {
    find,
    add,
    findById
}

function find() {
    return db("projects")
}

function findById(id) {
    return db("projects")
        .where("id", id)
        .first()
}

function add(payload) {
    return db.insert(payload)
        .into("projects")
    }