import mongoose from "mongoose";

const eventSchema=new mongoose.Schema({
    title: { type: String, required: true },
    startTime: {type: String,default: () => new Date().toLocaleTimeString("en-US", { hour12: false }),required:true},
    endTine:{type: String,default: () => new Date().toLocaleTimeString("en-US", { hour12: false }),required:true},
    status: {type: String,enum: ["BUSY", "SWAPPABLE", "SWAP_PENDING"],required: true},
    owner:{type:mongoose.Schema.Types.ObjectId, ref: "User",required: true},
})

export default mongoose.model("Event", eventSchema);
