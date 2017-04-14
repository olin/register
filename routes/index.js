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

// get grad requirements by major
router.post('/requirements', (req, res) => {
  Major.findOne({ name: req.body.major }, (err, major) => {
    if (err) {
      console.error(err);
    }
    console.log(req.body.major);
    const data = {
      generalRequirements: major.generalRequirements,
      majorRequirements: major.majorRequirements,
    };
    console.log(data);
    res.json(data);
  });
});

router.post('/coursesbyreq', (req, res) => {
  Course.find({ requirements: req.requirement }, (err, courses) => {
    if (err) {
      console.log(err);
    }
    res.json(courses);
  });
});

// returns the home page html, index.html
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
