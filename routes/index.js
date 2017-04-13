const express = require('express');
const passport = require('passport');
const Student = require('./../models/studentModel');
const path = require('path');

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('https://jsfiddle.net/');
};

const router = express.Router();

// log in with local strategy
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  });

// register new user
router.post('/register', (req, res) => {
  Student.register(new Student({ username: req.body.username }),
    req.body.password, (regErr, account) => {
      if (regErr) {
        console.error(regErr);
      }
      account.save((saveErr) => {
        if (saveErr) {
          console.log(saveErr);
        } else {
          req.login(account, (loginErr) => {
            if (loginErr) {
              console.log(loginErr);
            }
            res.json({
              username: req.user.username,
              id: req.user.id,
            });
          });
        }
      });
    });
});

router.get('/login', (req, res) => {
  console.log("login route");
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// returns the home page html, index.html
router.get('*', ensureAuthenticated, (req, res) => {
  console.log('every other route');
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
