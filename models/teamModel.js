import mongoose from 'mongoose';


const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],

  },
  points: {
    type: Number,
    default: 0
  },
  teamSize:{
    type:Number,
    default : 2
  },

  members: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User' 
  }],

  createdAt: {
    type: Date,
    default: Date.now,
  },

});



export const Team = mongoose.model("Team", teamSchema)
