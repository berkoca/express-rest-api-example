var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var configFile = require('../config'); // get our config file

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var bearerToken = req.headers.authorization;

  if (!bearerToken)
    return res.status(403).send({ 
      success: false, 
      message: `No token provided. You must login to get a token. Go to '/api/auth/login'.` 
    });

  var token = bearerToken.split(' ')[1];

  // verifies secret and checks exp
  jwt.verify(token, configFile.token_secret, function (err, decoded) {
    if (err) {
      return res.status(403).send({ 
        success: false, 
        message: err.message });
    }

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
}

module.exports = verifyToken;