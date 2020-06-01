const express = require('express');
const app = express();
const db = require('./db');
const morgan = require('morgan');
const router = require('./routes/index');
global.__root   = __dirname + '/';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', router);

module.exports = app;