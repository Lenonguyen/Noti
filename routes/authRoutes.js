const passport = require('passport');

module.exports = app => {

     //log in with google
     app.get(
          '/auth/google',
          passport.authenticate('google', {
               scope: ['profile', 'email']
          })
     );

     //log user in
     app.get(
          '/auth/google/callback',
          passport.authenticate('google'),
          (req,res) => {

          }
     );

     //log the user out
     app.get('/api/logout', (req,res) => {
          req.logout();
          res.redirect('/');
     });

     //show the current user
     app.get('/api/current_user', (req,res) => {
          res.send(req.user);
     });
     
};
