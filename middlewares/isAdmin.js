function isAdmin(req, res, next) {
    if(req.userRole != 'admin') {
        return res.status(403).send({
            success : false,
            message : 'You are not authorized to access here.'
        });
    }
    next();
}

module.exports = isAdmin;