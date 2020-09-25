var express = require('express');
var router = express.Router();
// port = process.env.Port || 3000;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
