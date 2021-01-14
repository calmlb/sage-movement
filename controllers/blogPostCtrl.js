const blogPostModel = require('../models/blog');

function newPost (req, res) {
    blogPostModel.create(req.body, function(err, post) {
        if (err) {
            res.send ("you've made an error")
        } else { 
        res.redirect('/blog')
    }
    })
}

function addPostForm (req, res) {
  res.render('addPost.ejs')
}

function show (req, res) {
    blogPostModel.findById (req.params.id, function(err, post) {
        console.log(req.params.id)
        if (err) console.log (err)
        res.render('blogshow.ejs', {title: 'Blog Detail', post});
    })
}

function allPosts (req, res) {
    blogPostModel.find({}, function(err, allPosts) {
        res.render('blog.ejs', {title: "All Posts", allPosts})
    })
}

async function deletePost(req, res) {
  try {
    const response = await blogPostModel.findByIdAndDelete(req.params.id)
    console.log("response received")
    res.redirect("/blog")
  } catch (err) {
    console.log(err)
  }
}

async function deleteComment (req, res) {
  try {
    let postOfInterest = await blogPostModel.findById(req.params.postid)
    console.log(postOfInterest)
    let result = await postOfInterest.comments.id (req.params.commentid).remove();
    console.log(result)
    await postOfInterest.save()
    res.redirect('/blog/' + postOfInterest.id)
}   catch (err) {
          console.log(err)
          res.redirect('/blog/postid')
      }
  }

async function updatePost (req, res) {
  
}



module.exports = {
    newPost,
    allPosts,
    show,
    deletePost,
    addPostForm,
    deleteComment
}