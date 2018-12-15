const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./models/Blog');
require('./services/passport');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());
// Create cookie
app.use(
     cookieSession({
     maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
     keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/blogRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
