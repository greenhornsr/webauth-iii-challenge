const router = require('express').Router();
const db = require('./auth-model');
const bcrypt = require('bcryptjs');
const genToken = require('./generateToken');

router.post('/register', (req, res) => {
    const newuser = req.body
    const hash = bcrypt.hashSync(newuser.password, 10)
    newuser.password = hash

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
    const { username, password } = req.body
    db.login({username})
    .then(user=> {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = genToken(user)

            res.status(200).json({success: true, message: `${user.username} has logged in Successfully!`, token})
        }else {
            res.status(401).json({success: false, message: 'invalid credentials.'})
        }
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