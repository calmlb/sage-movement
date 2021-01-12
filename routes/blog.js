var express = require('express');
var router = express.Router();
const BlogPostCtrl= require('../controllers/blogPostCtrl');

/* GET blogs listing. */
router.get('/', function(req, res, next) {
  res.send('Sage Movement Blog');
});

/* Add post page for blog posts */
router.get('/addPost', function (req, res, next) {
  res.render("addPost.ejs")
})

// /* Get blog details page */
// router.get('/blog/:id, isLoggedIn, blogPostCtrl.') //figure out  


// // POST /blog and user is already logged in
// router.post('/blog', isLoggedIn, blogPostCtrl.addBlogPost);

// // DELETE /blog
// router.delete('/blog/:id', blogPostCtrl.deleteBlogPost);


// /* GET blogPosts listing. */
// router.get('/blogPosts', function(req, res, next) {
//   res.send('blog posts page');
// });



// add
// add comments. 
// comments id's 


module.exports = router;
