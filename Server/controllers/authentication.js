var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
    //if the user is authenticated in the session, call the next() to call the request handler
    if(req.isAuthenticated()) 
        return next();
    //if user not authenticated then redirect him to login page.
    res.redirect('/');
}

module.exports = function(passport){
    
    //Get login page
    router.get('/', function(req,res){
        res.render('index', {message: req.flash('message')});
    });
    
    //Handle login page
    router.post('/login', passport.authentication('login', {
        successRedirect: '/home',
        failuerRedirect: '/',
        failureFlash: true
    }));

    //Get registration page
    router.get('/signup', function(req, res)
    {
        res.render('register', {message: req.flash('message')});
    });

    //Handle registration post
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failuerRedirect: '/signup',
        failureFlash : true
    }));

    //get homepage
    router.get('/home', isAuthenticated, function(req, res){
        res.render('home', {user: req.user});
    });

    //Handle Logout
    router.get('/signout', function(req, res){
        req.logout();
        res.redirect('/');
    })

    return router;
}