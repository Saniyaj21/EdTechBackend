

import mongoose from 'mongoose';



const instituteSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Please Enter Title"],

    },

    webLink: {
        type: String,

    },

    logo: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    verifiedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",   
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


export const Institute = mongoose.model("Institute", instituteSchema)
