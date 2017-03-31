const express = require('express');
const passport = require('passport');
const Student = require('./../models/studentModel');

const router = express.Router();

// returns the home page html, index.html
router.get('/', (req, res) => {
  res.render('index', {});
});

// log in with local strategy
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    res.json({
      username: req.user.username,
      id: req.user._id,
    });
  }
);

// register new user
router.post('/register', (req) => {
  Student.register(new Student({ username: req.body.username }),
    req.body.password, (err, account) => {
      if (err) {
        console.error(err);
      }

      passport.authenticate('login', (res) => {
        res.json({
          username: account.username,
          id: account._id,
        });
      });
    });
});

module.exports = router;
