var express = require('express');
var router = express.Router();

/* GET users listing */
router.get('/', function(req, res, next) {
  res.send('Sage Movement Course Offerings');
});

/* GET live listings */
router.get('/live', function(req, res, next) {
  res.send('choose your live course');
});

/* GET onDemand listings */
router.get('/onDemand', function(req, res, next) {
  res.send('purchase on demand courses');
});

/* GET workshops listings */
router.get('/workshops', function(req, res, next) {
  res.send('get your workshops here');
});


module.exports = router;
