// import Note from "../models/Note.js";

// // ✅ DELETE route: delete a specific note by ID
// export const deleteNote = async (req, res) => {
//   try {
//     const noteId = req.params.id.trim(); // 🧼 removes hidden spaces/newlines
//     const note = await Note.findById(req.params.id);
//     if (!note) {
//       return res.status(404).json({ message: "Note not found" });
//     }

//     // Optional: also delete file from uploads folder
//     const fs = await import("fs");
//     if (note.fileUrl && fs.existsSync(note.fileUrl)) {
//       fs.unlinkSync(note.fileUrl); // deletes file
//     }

//     await note.deleteOne();
//     return res.status(200).json({ message: "Note deleted successfully" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Failed to delete note", error: err.message });
//   }
// };


import Event from "../models/event_schema.js"

export const deleteNote = async (req, res) => {
    try{
        const event=await Event.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
        return res.json({ message: "Event deleted" ,note: event});
        }catch (err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }

};


// router.delete("/:id", authMiddleware, async (req, res) => {
//   await Event.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
//   res.json({ message: "Event deleted" });
// });