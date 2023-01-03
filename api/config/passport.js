//const JwtStrategy = require('passport-jwt').Strategy,
    //ExtractJwt = require('passport-jwt').ExtractJwt;
    const passport    = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
// load up the user model
const User = require('../models').User;


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
function (email, password, cb) {

  //Assume there is a DB module pproviding a global UserModel
  return User.findOne({email, password})
      .then(user => {
          /* if (!user) {
              return cb(null, false, {message: 'Incorrect email or password.'});
          } */

          return cb(null, user);
      })
      .catch(err => {
          return cb(err);
      });
}
));

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey   : '123#@$!%*878977'
},
function (jwtPayload, cb) {

  //find the user in db if needed
  return User.findByPk(jwtPayload.id)
      .then(user => {
          return cb(null, user);
      })
      .catch(err => {
          return cb(err);
      });
}
));

module.exports = {
  initialize: () => passport.initialize(),
  authenticateJWT: passport.authenticate('jwt', { session: false }),
  authenticateCredentials: passport.authenticate('local', { session: false }),
};