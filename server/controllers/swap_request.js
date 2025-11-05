import Event from "../models/event_schema.js"
import SwapRequest from "../models/swap_request_Schema.js";

export const swap_request=async(req,res)=>{
    try{
        const { mySlotId, theirSlotId } = req.body;
        const mySlot = await Event.findOne({ _id: mySlotId, owner: req.user.id, status: "SWAPPABLE" });
        const theirSlot = await Event.findOne({ _id: theirSlotId, status: "SWAPPABLE" });
        if (!mySlot || !theirSlot) return res.status(400).json({ message: "Slots not swappable" });
        const swap = await SwapRequest.create({
            sender: req.user.id,
            receiver: theirSlot.owner,
            mySlot: mySlot._id,
            theirSlot: theirSlot._id,
        });
        mySlot.status = "SWAP_PENDING";
        theirSlot.status = "SWAP_PENDING";
        await mySlot.save();
        await theirSlot.save();
        return res.status(201).json(swap);
        }catch (err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
};