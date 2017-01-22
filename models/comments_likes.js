let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let comments_Likes_schema = Schema({
    userId: {type: Schema.Types.ObjectId},
    appId: {type: Schema.Types.ObjectId},
    commentId: {type: Schema.Types.ObjectId},
});

module.exports = mongoose.model('commentLikes' , comments_Likes_schema);