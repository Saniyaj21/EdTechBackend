import { PlayList } from "../models/playlistModel.js";

// create playlist
export const createPlaylist = async (req, res) => {
    try {
        const { title, description } = req.body;


        const playList = await PlayList.create({
            title,
            description,
            user: req.user
        });

        res.status(200).json({
            success: true,
            playList
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

