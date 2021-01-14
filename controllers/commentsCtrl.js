const blogPostModel = require('../models/blog');

function create (req, res) {
    blogPostModel.findById(req.params.id, function(err, post) {
        post.comments.push (req.body);
        post.save(function(err) {
            res.redirect('/blog')
       })
     })
}

async function deleteComment (req, res) {
    try {
        const response = await blogPostModel.comments.findByIdAndDelete(req.params.id)
        console.log('response received')
        res.redirect('/blog/:id')
    }   catch (err) {
        console.log(err)
    }
}

module.exports = {
  create,
  deleteComment
};