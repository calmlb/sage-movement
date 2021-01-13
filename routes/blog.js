var express = require('express');
var router = express.Router();

const blogCtrl = require('../controllers/blogPostCtrl');
const commentCtrl = require('../controllers/commentsCtrl');

router.get('/', blogCtrl.allPosts)
router.get('/addPost', function (req, res, next) {
  res.render('addPost.ejs')
})
router.get('/:id', blogCtrl.show)
router.post('/', blogCtrl.newPost)
// router.delete('/:id', blogCtrl.deletePost)


module.exports = router;
