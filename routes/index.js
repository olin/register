const express = require('express');
const passport = require('passport');
const Student = require('./../models/studentModel');
const path = require('path');

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
router.post('/register', (req) => {
  Student.register(new Student({ username: req.body.username }),
    req.body.password, (err, account) => {
      if (err) {
        console.error(err);
      }

      passport.authenticate('login', (res) => {
        res.json({
          username: account.username,
          id: account.id,
        });
      });
    });
});

// get student completed courses
router.get('/completedcourses', (req, res) => {
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
