const express = require('express');
const passport = require('passport');
const Student = require('./../models/studentModel');
const Course = require('./../models/courseModel');
const path = require('path');

const router = express.Router();

// log in with local strategy
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    // load all courses to send to state
    Course.find({}, (err, courses) => {
      if (err) {
        console.error(err);
      } else {
        const data = {
          user: {
            username: req.user.username,
            id: req.user._id,
            entryYear: req.user.entryYear,
            major: req.user.major,
            plannedCourses: req.user.plannedCourses,
            completedCourses: req.user.completedCourses,
          },
          courses,
        };
        res.json(data);
      }
    });
  });

// logout anyone who is logged in
router.get('/logout',
  (req, res) => {
    req.logout();
    res.redirect('/login');
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
          console.error(saveErr);
        } else {
          req.login(account, (loginErr) => {
            if (loginErr) {
              console.error(loginErr);
            }
            // load all courses to send to state
            Course.find({}, (err, courses) => {
              if (err) {
                console.error(err);
              } else {
                const data = {
                  user: {
                    username: req.user.username,
                    id: req.user._id,
                    entryYear: req.user.entryYear,
                    major: req.user.major,
                    plannedCourses: req.user.plannedCourses,
                    completedCourses: req.user.completedCourses,
                  },
                  courses,
                };

                res.json(data);
              }
            });
          });
        }
      });
    });
});

// get student completed courses
router.get('/completedcourses', (req, res) => {
  res.json({
    completedcourses: req.user.completedCourses,
  });
});

// returns the home page html, index.html
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
