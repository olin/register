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

//get student completed courses
router.get('/completedcourses', (req, res) => {
  console.log(req)
  Student.find({},'completedCourses', (err, courses) => {
    if (err){
      res.json(err)
    }
    res.json({genreqs: courses})
  })
});

module.exports = router;
