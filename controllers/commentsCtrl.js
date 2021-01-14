const blogPostModel = require('../models/blog');

function create (req, res) {
    blogPostModel.findById(req.params.id, function(err, post) {
        post.comments.push (req.body)
        post.save(function(err) {
            res.redirect('/blog')
       })
     })
}





module.exports = {
  create
}