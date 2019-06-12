const jwt = require('jsonwebtoken');
const secrets = require('../config/supasecrets');

module.exports = (req,res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secrets.jwtSupaSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: 'Invalid Credentials'})
            }else{
                const {subject, username, department} = decodedToken
                req.activeUser = {id: subject, username: username, department: department}
                next();
            }
        })
    }else {
        res.status(400).json({ message: 'No token provided' });
    }
}