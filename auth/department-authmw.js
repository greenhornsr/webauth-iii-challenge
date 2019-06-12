module.exports = (req, res, next) => {
    const userByDepart = req.activeUser
    if(userByDepart) {
        if(userByDepart.department){
            next()
        }else{
            req.status(403).json({message: `\nhammertime!  no department found for ${userByDepart.username}.\n`})
        }
    }else{
        req.status(401).json({message: '\nno active user located.  shall not pass...\n'})
    }
}
