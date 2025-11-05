import express from "express";
import authMiddleware from "../middleware/auth.js";
import { create_event } from "../controllers/Create_event.js";
import { update_event } from "../controllers/Update_event.js";
import { get_event } from "../controllers/Read_events.js";
import { delete_event } from "../controllers/Delete_event.js";

const router = express.Router();

router.post("/", authMiddleware, create_event);
router.put("/:id/status", authMiddleware, update_event);
router.get("/", authMiddleware, get_event);
router.delete("/:id", authMiddleware, delete_event);

export default router;
