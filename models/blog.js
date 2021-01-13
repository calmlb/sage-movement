const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new mongoose.Schema({
        // image: String,
        author: {
            type: String
        },
        title: {
            type: String
        },
        content: {
            type: String
        },
        postedOn: {
            type: Date,
    }
})

let commentSchema = new mongoose.Schema({
        user: {
            type: String
        },
        date: {
            type: Date
        },
        id: {
            type: String
        },
        postedBy: {
            type: String
        }
})

module.exports = mongoose.model('blogpost', postSchema);
