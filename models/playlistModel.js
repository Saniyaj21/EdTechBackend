

import mongoose from 'mongoose';



const playListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Your Name"],

    },
    description: {
        type: String,
        required: [true, "Please Enter Your a description of video"],
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});


export const PlayList = mongoose.model("Playlist", playListSchema)
