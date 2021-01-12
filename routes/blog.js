var express = require('express');
var router = express.Router();
const blogCtrl = require('../controllers/blogPostCtrl');

router.get('/', blogCtrl.allPosts)

/* Add route for blog post creation form */
router.get('/addPost', function (req, res, next) {
  /* to do - add userType admin access to this route*/
  res.render('addPost.ejs')
})

router.post('/', blogCtrl.newPost)

module.exports = router;
