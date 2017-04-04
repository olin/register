// importing packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const Student = require('./models/studentModel');

// setting up routes
const index = require('./routes/index');

// connect to database
mongoose.connect('mongodb://localhost/register');

const app = express();

app.set('port', (process.env.PORT || 3000));

// view engine setup, middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// this is called to authenticate the user's password
passport.use(new LocalStrategy(Student.authenticate()));

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '1568189581',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((userId, done) => {
  Student.findById(userId, (err, user) => { done(null, user); });
});

app.use('/', index);

// Routes for our backend models
// app.get('*', (request, response) => {
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
