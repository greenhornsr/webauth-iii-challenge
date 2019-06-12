const router = require('express').Router();
const db = require('./users-model');
const authmw = require('../auth/auth-mw');

router.get('/', authmw, (req, res) => {
    db.find()
    .then(users => {
        res.status(200).json({success: true, users})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

// Error Middleware
const errorRef = (error) => {
    const hash = Math.random().toString(36).substring(2);
    console.log(hash, error)
    return { message: `\n\nUnknown Error, Ref: ${hash}\n\n`, error }
}

module.exports = router;

