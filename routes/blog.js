var express = require('express');
var router = express.Router();

/* GET blogs listing. */
router.get('/', function(req, res, next) {
  res.send('Sage Movement Blog');
});


/* GET blogPosts listing. */
router.get('/blogPosts', function(req, res, next) {
  res.send('blog posts page');
});

// add
// add comments. 
// comments id's 


module.exports = router;
