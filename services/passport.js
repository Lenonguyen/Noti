const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
     done(null, user.id);
});

passport.deserializeUser((id, done) => {
     User.findById(id).then(user => {
          done(null, user);
     });
});

passport.use(
     new GoogleStrategy(
          {
               callbackURL: '/auth/google/callback',
               clientID: keys.googleClientID,
               clientSecret: keys.googleClientSecret,
               proxy: true
          },
          async (accessToken, refreshToken, profile, done) => {
               try {
                    const existingUser = await User.findOne({ googleID: profile.id });
                    if (existingUser) {
                         return done(null, existingUser);
                    }
                    const user = await new User( {
                         googleID: profile.id,
                         displayName: profile.displayName,
                         image: profile._json.image.url
                    }).save();
                    done(null, user);
               } catch (err) {
                    done(err, null);
               }
          }
     )
);
