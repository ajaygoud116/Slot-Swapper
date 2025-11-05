import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth_routes.js";
import eventRoutes from "./routes/event_routes.js";
import swapRoutes from "./routes/swap_routes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// mount routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/swap", swapRoutes);

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
