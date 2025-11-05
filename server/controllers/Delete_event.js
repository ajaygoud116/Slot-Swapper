import Event from "../models/event_schema.js"

export const delete_event = async (req, res) => {
    try{
        const event=await Event.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
        return res.json({ message: "Event deleted" });
        }catch (err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
};
