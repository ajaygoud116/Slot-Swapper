import Event from "../models/event_schema.js"

export const swappable_slots=async(req,res)=>{
    try{
        const slots = await Event.find({ status: "SWAPPABLE", owner: { $ne: req.user.id } });
        return res.json(slots);
        }catch (err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
}