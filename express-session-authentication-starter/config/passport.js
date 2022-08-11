const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const User = connection.models.User;
const validPassword = require('../lib/passwordUtils').validPassword;

const customFields = {
  usernameField: 'uname',
  passwordField: 'pw',
  // passReqToCallback: true,
};

const verifyCallback = async (username, password, done) => {
  const user = await User.findOne({username: username}).catch((error) => {
    console.log(error);
    done(error)
  });

  console.log(user);
  if (!user) {
    return done(null, false);
  }

  const isValid = validPassword(password, user.hash, user.salt);

  if (isValid) {
    return done(null, user);
  } else {
    return done(null, false);
  }
};


const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => done(err));
});