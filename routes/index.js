const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET second page. */
router.get('/second', function(req, res, next) {
  res.render('second', { title: 'Second page' });
});

module.exports = router;
