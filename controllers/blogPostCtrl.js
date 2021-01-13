const blogPostModel = require('../models/blog');
// const blogCommentModel = require('../models/blog')

function newPost (req, res) {
    blogPostModel.create(req.body, function(err, post) {
        if (err) {
            res.send ("you've made an error")
        } else { 
        res.redirect('/blog')
        }
    })
}

function show (req, res) {
    blogPostModel.findById (req.params.id, function(err, post) {
        console.log(req.params.id)
        if (err) console.log (err)
        res.render('blogshow.ejs', {title: 'Blog Detail', post});
    })
}

function allPosts (req,res) {
    blogPostModel.find({}, function(err, allPosts) {
        res.render('blog.ejs', {title: "All Posts", allPosts})
    })
}

module.exports = {
    newPost,
    allPosts,
    show
}