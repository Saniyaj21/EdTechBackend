

import mongoose from 'mongoose';



const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Title"],

    },
    description: {
        type: String,
        required: [true, "Please Enter Description"],

    },
    link: {
        type: String,

    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
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


export const Event = mongoose.model("Event", eventSchema)
