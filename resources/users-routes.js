const router = require('express').Router();
const db = require('./users-model');
const authmw = require('../auth/auth-mw');
const depart = require('../auth/department-authmw');

router.get('/', authmw, depart, (req, res) => {
    db.find()
    .then(users => {
        users && users.department === 'ADMIN' ? res.status(200).json({success: true, users}):
        // res.status(200).json({success: true, users === req.body.department})
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

