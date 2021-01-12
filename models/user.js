var mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    googleId: String,
    userId: Number,
    userType: String,
    posts: Number,
    comments: String,
    courses: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);