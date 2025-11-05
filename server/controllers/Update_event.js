import Event from "../models/event_schema.js"

export const update_event=async(req,res)=>{
    try{
        const { status } = req.body;
        const event = await Event.findOneAndUpdate({ _id: req.params.id, owner: req.user.id }, { status }, { new: true });
        return res.json(event);
        }catch(err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
}




