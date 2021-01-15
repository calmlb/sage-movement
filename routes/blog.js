var express = require("express");
var router = express.Router();

const blogCtrl = require("../controllers/blogPostCtrl");

router.get("/", blogCtrl.allPosts);
router.get("/addPost", blogCtrl.addPostForm);
router.get("/:id", blogCtrl.show);
router.post("/", blogCtrl.newPost);
router.delete("/:id", blogCtrl.deletePost);
router.delete("/:postid/commentDelete/:commentid", blogCtrl.deleteComment);

router.put("/:id", blogCtrl.editPost);
// router.put('/:postid/commentUpdate/:commentid', blogCtrl.updateComment)

module.exports = router;