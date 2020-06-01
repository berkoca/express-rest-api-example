module.exports = {
  'token_secret' : 'supersecret',
  'token_expires_in' : '86400000', // MILLI SECONDS -- 24 HOURS
  'database_url' : 'mongodb://127.0.0.1:27017/express-rest-api-example',
  'server_port' : process.env.PORT || 3000
};