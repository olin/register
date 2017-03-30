const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const router = express.Router();

// returns the home page html, index.html
router.get('/', (req, res) => {
  res.render('index', {});
});

router.post('/login', passport.authenticate('local'),
	function(req, res) {
		res.json({
			username: req.user.username,
			name: req.user.name,
			id: req.user._id
		});
	}
);

module.exports = router;
