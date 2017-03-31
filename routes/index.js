const express = require('express');
const passport = require('passport');

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
      name: req.user.name,
      id: req.user._id,
    });
  }
);

// register new user
router.post('/register', (req, res) => {
  console.log(req);
  // add User to database here
});

module.exports = router;
