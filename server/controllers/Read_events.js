import Event from "../models/event_schema.js"

export const get_event=async(req,res)=>{
    try{
        const events = await Event.find({ owner: req.user.id });
        return res.json(events);
        }catch (err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
};

