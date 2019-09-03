// Get all the module packages
const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const job = require('./controllers/job.js');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Connect to database
let db = require('./config/default.json')
mongoose
    .connect(db.mongoURI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Create Express Server Instance
const app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Here is the API route
app.use('/api/v1/job', job)

//Importing modules for database
var dbConfig = require('./db');
var mongoose = require('mongoose');

//Connect to DB for authentication
mongoose.connect(dbConfig.url);

var app = express();

//Configure db.js with mongoose API 
var dbConfig = require('./Authentication/db.js');
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);

//Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({ secret: 'myChoreNinjaSecretKey' }));
app.use(passport.initialize());
app.use(passport.session());

//Initialize Passport
var initPassport = require('./Authentication/init');
initPassport(passport);

var routes = require('./controllers/authentication')(passport);
app.use('/', routes);

//To catch 404 and forward to error handler
app.use(function(req,res, next)
{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app