const db = require('../config/dbConfig');

module.exports = {
    find
}

function find(){
    return db('users');
}