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


module.exports = mongoose.model('blogpost', postSchema);