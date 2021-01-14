const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new mongoose.Schema({
    
    user: {
        type: String
        },
        
        date: {
            type: Date
        },
        content: {
            type: String,
            rating: {type: Number, min: 1, max: 5, default: 5}
        },
        
        postedBy: {
            type: String
        }
})

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
        },
        comments: [commentSchema]     
})

module.exports = mongoose.model('blogpost', postSchema);
