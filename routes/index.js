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

/* GET second page. */
router.get('/third', function(req, res, next) {
  res.render('third', { title: 'Third page' });
});

/* GET 4th page. */
router.get('/4th', function(req, res, next) {
  res.render('4th', { title: '4th page' });
});

module.exports = router;
