var app = require('./app');
var configFile = require('./config');

var server = app.listen(configFile.server_port, function() {
  console.log('Express server listening on port: ' + configFile.server_port);
});