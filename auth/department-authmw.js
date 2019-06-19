module.exports = (req, res, next) => {
    const {username, department} = req.activeUser
    if(username) {
        if(department){
            next()
        }else{
            res.status(403).json({message: `hammertime!  no department found for ${username}.`})
        }
    }else{
        res.status(401).json({message: 'no active user located.  shall not pass...'})
    }
}
