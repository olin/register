const express = require('express');
const passport = require('passport');
const Student = require('./../models/studentModel');
const Course = require('../models/courseModel');
const path = require('path');

const router = express.Router();

const courseInfo = (courseList) => {
  const augmentedCourses = [];
  for (let i = 0; i < courseList.length; i += 1) {
    Course.findOne({ _id: courseList[i].courseId }, (err, course) => {
      if (err) {
        console.error(err);
      } else {
        augmentedCourses.push({
          courseInfo: course,
          courseStudent: courseList[i],
        });
      }
    });
  }
};
// log in with local strategy
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    const userObject = req.user;
    userObject.completedCourses = courseInfo(req.user.completedCourses);
    userObject.plannedCourses = courseInfo(req.user.plannedCourses);
    res.json(userObject);
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
            const userObject = req.user;
            userObject.completedCourses = courseInfo(req.user.completedCourses);
            userObject.plannedCourses = courseInfo(req.user.plannedCourses);
            res.json(userObject);
          });
        }
      });
    });
});

// returns the home page html, index.html
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
