const express = require('express');
const passport = require('passport');
const Student = require('./../models/studentModel');
const path = require('path');

const router = express.Router();

// log in with local strategy
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    res.json(req.user);
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
            res.json(req.user);
          });
        }
      });
    });
});

// get student completed courses
router.get('/completedcourses', (req, res) => {
  console.log(req.user);
  // res.json({
  //   completedcourses: req.user.completedcourses,
  // })
  Student.find({}, 'completedCourses', (err, courses) => {
    if (err) {
      res.json(err);
    }
    res.json({
      genreqs: courses[0].id,
      majorreqs: courses[1].id,
    });
  });
});

// returns the home page html, index.html
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
