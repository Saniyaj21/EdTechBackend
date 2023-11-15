import { Video } from '../models/videoModel.js';

//Post video
export const postVideo = async (req, res) => {
    try {
        const { title, description, videoLink, relatedLinks, playlist } = req.body;


        const video = await Video.create({
            title,
            description,
            videoLink,
            relatedLinks,
            playlist,
            user: req.user
        });

        res.status(200).json({
            success: true,
            video
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


//get all video
export const allVideos = async (req, res) => {
    try {
        const videos = await Video.find().populate("playlist", "title description");

        res.status(200).json({
            success: true,
            videos
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//get all videos of a playlist
export const allVideosOfPlaylist = async (req, res) => {
    try {

        const {playlist} = req.query
        const videos = await Video.find({playlist});

        res.status(200).json({
            success: true,
            videos
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// search video
export const searchVideos = async (req, res) => {
    try {
        const { title } = req.body;

        const searchQuery = {
            title: {
                $regex: title,
                $options: "i",
            }
        };

        const videos = await Video.find(searchQuery);

        res.status(200).json({
            success: true,
            videos
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};



//update video  add or remove from playlist playlist = null
export const updateVideo = async (req, res) => {
    try {
        const { id } = req.params;


        const video = await Video.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.description,
            videoLink: req.body.videoLink,
            relatedLinks: req.body.relatedLinks,
            playlist: req.body.playlist,
            user: req.user
        }, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            video
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//delete video
export const deleteVideo = async (req, res) => {
    try {
        const { id } = req.params;

        await Video.findOneAndDelete({ id })

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


