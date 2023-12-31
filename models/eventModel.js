

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

    participatingTeam: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Team'
    }],

    winningTeam: {
        type: mongoose.Schema.ObjectId,
        ref: 'Team'
    },

    lastDate:{
        type:Date
    },


    creator: {
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
