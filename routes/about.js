var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Julia Cowan and Sage Movement');
});

module.exports = router;