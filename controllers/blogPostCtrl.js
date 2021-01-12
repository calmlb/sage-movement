const blogPostModel = require('../models/blog');

function newPost (req, res) {
    console.log(req.body)
    blogPostModel.create(req.body, function(err, post) {
        if (err) {
            res.send ("you've made an error")
        } else { 
        res.redirect('/blog')
        }
    })
}
 
function allPosts (req,res) {
    blogPostModel.find({}, function(err, allPosts) {
        res.render('blog.ejs', {title: "All Posts", allPosts})
    })
}

module.exports = {
    newPost,
    allPosts
}