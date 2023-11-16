import { Event } from "../models/eventModel.js";

// create playlist
export const newEvent = async (req, res) => {
    try {
        const { title, description, link } = req.body;
        const avatar = {
            public_id: "saniyaj",
            url: "url"
        }

        const event = await Event.create({
            title,
            description,
            link,
            avatar,
            creator: req.user
        });

        res.status(200).json({
            success: true,
            event
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// get all events 
export const allEvents = async (req, res) => {
    try {

       const events = await Event.find()

        res.status(200).json({
            success: true,
            events
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};



//delete event
export const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;


        await Event.findByIdAndDelete(id);

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


