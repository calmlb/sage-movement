var express = require('express');
var router = express.Router();

const blogCtrl = require('../controllers/blogPostCtrl');
// const commentCtrl = require('../controllers/blogPostCtrl');

router.get('/', blogCtrl.allPosts)
router.get('/addPost', function (req, res, next) {
  /* to do - add userType admin access to this route*/
  res.render('addPost.ejs')
})

router.get('/:id', blogCtrl.show)

router.post('/', blogCtrl.newPost)

module.exports = router;
