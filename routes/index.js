const express = require('express');


const router = express.Router();

// returns the home page html, index.html
router.get('/', (req, res) => {
  res.render('index', {});
});

module.exports = router;
