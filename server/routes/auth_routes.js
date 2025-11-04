import express from "express";
import dotenv from "dotenv";
import {registerUser} from "../controllers/registeruser.js";
import { loginUser } from "../controllers/loginuser.js";
import authMiddleware from "../middleware/auth.js";
import { create_event } from "../controllers/Create_event.js";
import { update_event } from "../controllers/Update_event.js";
import { get_event } from "../controllers/Read_events.js";
import { delete_event } from "../controllers/Delete_event.js";
import { swap_request } from "../controllers/swap_request.js";
import { swap_response } from "../controllers/swap_response .js";
import { swappable_slots } from "../controllers/swappable_slots.js";

dotenv.config();
const router = express.Router();

//  Register User
router.post("/register",registerUser);

//  Login User
router.post("/login",loginUser);

// POST create event
router.post("/", authMiddleware, create_event);

// PUT update event status
router.put("/:id/status", authMiddleware, update_event);

// GET my events
router.get("/", authMiddleware, get_event);

// DELETE event
router.delete("/:id", authMiddleware, delete_event);

//Get swappable slots
router.get("/swappable-slots", authMiddleware,swappable_slots)

//Create swap request
router.post("/swap-request", authMiddleware,swap_request )

//Respond to swap
router.post("/swap-response/:id", authMiddleware, swap_response)

export default router;
