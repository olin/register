var express = require('express');
var router = express.Router();

//returns the home page html, index.html
router.get('/', function(req, res, next) {
	res.render('index', {});
});

module.exports = router;
