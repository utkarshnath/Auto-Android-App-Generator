let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = Schema({
    appId: {type: Schema.Types.ObjectId, required: true},
    userId: {type: Schema.Types.ObjectId, required: true},
    mimeType: {type: String},
    timestamp: {type: Number},
    locationUri: {type: String},
    description: {type: String},
    likes: {type: []},
    comments: []
});

module.exports = mongoose.model('post', postSchema);