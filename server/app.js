// Get all the module packages
const express = require('express')
const mongoose = require('mongoose')

let db = require('./config/default.json')

mongoose
    .connect(db.mongoURI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Create Express Server Instance
app = express()

module.exports = app