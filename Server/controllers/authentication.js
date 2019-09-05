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
    // router.get('/', function(req,res){
    //     // res.render('index', {message: "Hello from auth"});
    //     res.status(200).send({ message: "Hello from auth" });
    // });
    
    //Handle login page
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/auth/home',
        failuerRedirect: '/auth/login',
    }));

    // //Get registration page
    router.get('/signup', function(req, res)
    {
        res.status(200).send({ message: "Hello from signup" });
    });

    //Handle registration post
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failuerRedirect: '/signup',
    }));

    //get homepage
    router.get('/home', isAuthenticated, function(req, res){
        res.status(200).send({ message: "Hello from secure route" });
    });

    //Handle Logout
    router.get('/signout', function(req, res){
        req.logout();
        res.redirect('/');
    })

    return router;
}