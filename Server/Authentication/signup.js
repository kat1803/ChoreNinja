 var LocalStrategy = require('passport-local').Strategy;
 var User = require('../models/user');
 var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport)
{
    passport.use('signup', new LocalStrategy({
        passReqtoCallback: true
    },
        function (req, username, password, done) {
            findOrCreateUser = function () {
                User.findOne({ 'username': username }, function (err, user) {
                    
                    if (err) {
                        console.log('Error in SignUp: ' + err);
                        return done(err);
                    }
                    //if user is in the database, notify user
                    if (user) {
                        console.log('User already exists');
                        return done(null, false, req.flash('message', 'User Already Exists'));
                    }
                    else {
                        var newUser = new User();

                        newUser.username = username;
                        newUser.password = hash(password);
                        newUser.email = req.param('email');
                        newUser.firstName = req.param('firstName');
                        newUser.lastName = req.param('lastName');

                        newUser.save(function (err) {
                            if (err) {
                                console.log('Error in Saving user: ' + err);
                                throw err;
                            }
                            console.log('User Registration Successful');
                            return done(null, newUser);
                        });
                    }
                });
            };

            process.nextTick(findOrCreateUser);
        })
    );

    var hash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
}