const router = require('express').Router();
const db = require('./auth-model');

router.post('/register', (req, res) => {
    const newuser = req.body
    db.register(newuser)
    .then(user => {
        console.log('userfound:', user)
        res.status(201).json({success: true, message: 'Successfully Registered.' ,user})
    })
    .catch(err => {
        res.status(500).json(errorRef(err))
    })
})

router.post('/login', (req, res) => {
    const { username } = req.body

    db.login({username})
    .then(user => {
        res.status(200).json({success: true, message: `${user.username} has logged in Successfully!`, user})
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