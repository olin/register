// importing packages
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const Student = require('./models/studentModel');
const index = require('./routes/index');

// connect to database
const mongoURI = process.env.MONGOURI || 'mongodb://olinjs:cynthiaandbill@ds111441.mlab.com:11441/olin-course-planner';
mongoose.connect(mongoURI);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

const app = express();
app.set('port', (process.env.PORT || 3000));

// view engine setup, middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// authentication with passport LocalStrategy and express-session
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, Student.authenticate()));

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

app.listen(app.get('port'), () => {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
