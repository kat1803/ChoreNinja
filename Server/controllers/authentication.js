module.exports = function(passport){
    router.get('/', function(req,res){
        res.render('index', {message: req.flash('message')});
    });
    
    router.post('/login', passport.authentication('login', {
        successRedirect: '/home',
        failuerRedirect: '/',
        failureFlash: true
    }));

    router.get('/signup', function(req, res)
    {
        res.render('register', {message: req.flash('message')});
    });

    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failuerRedirect: '/signup',
        failureFlash : true
    }));

    return router;
}