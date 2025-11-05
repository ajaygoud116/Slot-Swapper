import mongoose from "mongoose";

const swapRequestSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "ACCEPTED", "REJECTED"],
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  mySlot: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event", 
    required: true
 },
  theirSlot: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Event", 
    required: true 
},
});

export default mongoose.model("SwapRequest", swapRequestSchema);