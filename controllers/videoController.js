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
