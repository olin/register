const express = require('express');
const passport = require('passport');
const path = require('path');
const Student = require('../models/studentModel');
const Major = require('../models/majorModel');
const Course = require('../models/courseModel');

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

// get grad requirements by major
router.get('/requirements', (req, res) => {
  console.log(req.user);
  const data = {
    user: req.user,
  };
  res.json(data);
});

// returns the home page html, index.html
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
