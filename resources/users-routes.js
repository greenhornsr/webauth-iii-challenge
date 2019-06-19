const router = require('express').Router();
const db = require('./users-model');
const authmw = require('../auth/auth-mw');
const depart = require('../auth/department-authmw');


router.get('/', authmw, depart, (req, res) => {
    const {department} = req.activeUser
    department === 'ADMIN' ? 
    db.find()
    .then(users => {
        res.status(200).json({success: true, users})
    })
    .catch(err => {
        console.log(err)
        res.status(403).json({message: 'no such luck!', err})
    })
    :
    db.findByDepartment({department})
    .then(sameDepartUsers => {
        sameDepartUsers ? res.status(200).json({success: true, sameDepartUsers}):
        res.status(400).json({success: false, message: 'sorry, no users matching your department.'})
    })
    .catch(err => {
        console.log(err)
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

