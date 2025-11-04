// // Keep all upload logic (validation, saving, error handling) inside notesController.js
// // The controller extracts values from req.body and req.file and constructs a JavaScript object matching the Mongoose schema.
// import Note from "../models/Note.js";

// export const uploadNote = async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ message: "No file uploaded" });

//     const { title, subject, semester, uploaderName } = req.body;
//     const file = req.file;

//     // fileUrl is the static served path
//     const fileUrl = `/uploads/${file.filename}`;

//     const note = new Note({
//       title,
//       subject,
//       semester,
//       uploaderName,
//       fileUrl,
//       fileName: file.originalname,
//       size: file.size
//     });

//     const saved = await note.save();
//     return res.status(201).json({ message: "Uploaded", note: saved });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

import Event from "../models/event_schema.js"

export const create_event=async(req,res)=>{
    try{
        const { title, startTime, endTime, status } = req.body;
        link=req.user._id;
        const event=new Event({
            title, startTime, endTime, status, link
        });
        const saved = await note.save();
        return res.status(201).json({ message: "Event Created", note: saved });
        }catch (err){
            console.error(err);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
};