var mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    newPost: {
        author: String,
        title: String,
        postedOn: Date,
    }
})



module.exports = mongoose.model('Post', postSchema);

// Add New Blog Post -
