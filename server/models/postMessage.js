import mongoose from 'mongoose';

const postSchema = mongoose.Schema({   //Schema - uniformity to documents
    title: String,
    message: String,
    creator: String,
    tage: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage; //exporting Mongoose model from PostMessage file