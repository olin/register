const express = require('express');
const passport = require('passport');
const Student = require('./../models/studentModel');

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/login');
};

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {});
});

router.get('/user', (req) => {
  console.log(req.user);
});
// log in with local strategy
router.post('/login', passport.authenticate('local'),
  (req, res) => {
    console.log('Clientside post');
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  });

// register new user
router.post('/register', (req, res) => {
  Student.register(new Student({ username: req.body.username }),
    req.body.password, (err, account) => {
      if (err) {
        console.error(err);
      }
      account.save((err) => {
        if(err) {
          console.log(err);
        } else {
          req.login(account, (err) => {
            if(err) {
              console.log(err);
            };
            res.json({
              username: req.user.username,
              id: req.user.id,
            })
          })
        }
      });
    });
});

module.exports = router;
