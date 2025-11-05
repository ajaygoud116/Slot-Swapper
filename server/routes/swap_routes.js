import express from "express";
import authMiddleware from "../middleware/auth.js";
import { swap_request } from "../controllers/swap_request.js";
import { swap_response } from "../controllers/swap_response .js";
import { swappable_slots } from "../controllers/swappable_slots.js";

const router = express.Router();

router.get("/swappable-slots", authMiddleware, swappable_slots);
router.post("/swap-request", authMiddleware, swap_request);
router.post("/swap-response/:id", authMiddleware, swap_response);

export default router;
