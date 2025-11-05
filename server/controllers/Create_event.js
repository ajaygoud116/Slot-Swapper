import Event from "../models/event_schema.js"

export const create_event=async(req,res)=>{
    try{
        const { title, startTime, endTime, status } = req.body;
        const owner=req.user._id;
        const event = await Event.create({ title, startTime, endTime, status, owner});
        return res.status(201).json({ message: "Event Created", note: event });
        }catch (err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
};