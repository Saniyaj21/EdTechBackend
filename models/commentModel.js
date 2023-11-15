

import mongoose from 'mongoose';



const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please Enter Your Name"],

    },
    
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    video: {
        type: mongoose.Schema.ObjectId,
        ref: "Video",
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});


export const Comment = mongoose.model("Comment", commentSchema)
