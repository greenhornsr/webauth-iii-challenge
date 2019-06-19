const jwt = require('jsonwebtoken');
const secrets = require('../config/supasecrets');


module.exports = function generateToken(user) {
    const {id, username, department} = user
    
    const payload = {
        subject: id,
        username: username,
        department: department,
    };
    const options = {
        expiresIn: '4h'
    }
    return jwt.sign(payload, secrets.jwtSupaSecret, options)
}