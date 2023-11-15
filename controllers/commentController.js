import { Comment } from "../models/commentModel.js";

// create playlist
export const newComment = async (req, res) => {
    try {
        const { text, video } = req.body;


        const comment = await Comment.create({
            text,
            video,
            user: req.user
        });

        res.status(200).json({
            success: true,
            comment
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get all comments of a video
export const videoComments = async (req, res) => {
    try {

        const {id} = req.params
        const comments = await Comment.find({video:id}).populate("user", "name avatar");

        res.status(200).json({
            success: true,
            comments
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};



//delete comment
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;


        await Comment.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


