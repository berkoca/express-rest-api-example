const mongoose = require('mongoose');
const configFile = require('./config');
mongoose.connect(configFile.database_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(responseFromDB => console.log(`Connected to database on: ${configFile.database_url}`))    
    .catch(error => console.log(error));