var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/', function(req, res) {
  res.render('courses.ejs');
});

/* GET live listings */
router.get('/live', function(req, res) {
  res.send('choose your live course');
});

/* GET onDemand listings */
router.get('/onDemand', function(req, res) {
  res.send('purchase on demand courses');
});

/* GET workshops listings */
router.get('/workshops', function(req, res) {
  res.send('get your workshops here');
});

module.exports = router;
