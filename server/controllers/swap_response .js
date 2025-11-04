import Event from "../models/event_schema.js"
import SwapRequest from "../models/swap_request_Schema.js";

export const swap_response=async(req,res)=>{
    try{
        const { accept } = req.body;
        const swap = await SwapRequest.findById(req.params.id);
        if (!swap) return res.status(404).json({ message: "Swap request not found" });

        const mySlot = await Event.findById(swap.mySlot);
        const theirSlot = await Event.findById(swap.theirSlot);

        if (accept) {
    // Swap only owners
            const tempOwner = mySlot.owner;
            mySlot.owner = theirSlot.owner;
            theirSlot.owner = tempOwner;

            mySlot.status = "BUSY";
            theirSlot.status = "BUSY";
            swap.status = "ACCEPTED";
            } else {
                mySlot.status = "SWAPPABLE";
                theirSlot.status = "SWAPPABLE";
                swap.status = "REJECTED";
            }

            await mySlot.save();
            await theirSlot.save();
            await swap.save();
            return res.json(swap);
            }catch (err){
                console.error(err);
                return res.status(500).json({ message: "Server error", error: err.message });
            } 
};