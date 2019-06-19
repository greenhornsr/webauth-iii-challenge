const db = require('../config/dbConfig');

module.exports = {
    find,
    findByDepartment
}

function find() {
    return db('users');
}

function findByDepartment(department) {
    return db('users')
    .select('*')
    .where(department)
}