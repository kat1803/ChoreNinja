// Get all the module packages
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const logger = require('morgan');
const job = require('./controllers/job.js')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

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

//Serialize and Deserialize to keep the user credentials private
passport.serializeUser(function (user, done)){
    done(null, user._id);
};

passport.deserializeUser(function (id, done))
{
    User.findById(id, function (err, user))
    {
        User.findById(id, function (err, user))
        {
            done(err, user);
        }
    };
};

module.exports = app