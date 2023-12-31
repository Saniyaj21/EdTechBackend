import { Playlist } from "../models/playlistModel.js";

// create playlist
export const createPlaylist = async (req, res) => {
    try {
        const { title, description } = req.body;


        const playlist = await Playlist.create({
            title,
            description,
            user: req.user
        });

        res.status(200).json({
            success: true,
            playlist
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get all playlist
export const allPlaylist = async (req, res) => {
    try {

        const playlists = await Playlist.find({});

        res.status(200).json({
            success: true,
            playlists
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};



//update video
export const updatePlaylist = async (req, res) => {
    try {
        const { id } = req.params;


        const playlist = await Playlist.findByIdAndUpdate(id, {
            title: req.body.title,
            description: req.body.description,
        }, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({
            success: true,
            playlist
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


