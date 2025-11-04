import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log(" MongoDB Connected Successfully"))
    .catch((err) => console.log(" MongoDB Connection Error:", err));
} else {
  console.log("Skipping MongoDB connection — no URI provided");
}

// Simple test route
app.get("/", (req, res) => {
  res.send(" Server is running — but no database connected!");
});

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
