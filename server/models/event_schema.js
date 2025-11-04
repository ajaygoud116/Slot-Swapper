import mongoose from "mongoose";

const eventSchema=new mongoose.Schema({
    title: { type: String, required: true },
    startTime: {type: String,default: () => new Date().toLocaleTimeString("en-US", { hour12: false })},
    endTine:{type: String,default: () => new Date().toLocaleTimeString("en-US", { hour12: false })},
    status: {type: String,enum: ["BUSY", "SWAPPABLE", " SWAP_PENDING"],required: true},
    link:{type:mongoose.Schema.Types.ObjectId, ref: "User",required: true},

})



export default mongoose.model("Event", eventSchema);


// const noteSchema = new mongoose.Schema({  //mongoBD stores the uploaded file information in document type, the schema of that document is:
//   title: { type: String, required: true },
//   subject: { type: String, required: true },
//   semester: { type: String, required: false },
//   uploaderName: { type: String, required: false },
//   fileUrl: { type: String, required: true }, // path or S3 URL
//   fileName: { type: String, required: true },
//   size: { type: Number },
//   createdAt: { type: Date, default: Date.now }
// });

// const swapRequestSchema = new mongoose.Schema({
//   sender: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   receiver: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "accepted", "rejected"],
//     default: "pending",
//   },
//   createdAt: {
//     default: Date.now,
//   },
// });

// export default mongoose.model("SwapRequest", swapRequestSchema);