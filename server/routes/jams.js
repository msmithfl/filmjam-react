import express from "express";
import { addJam, getJams, getSingleJam } from "../controllers/jam.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addJam);
router.get("/", getJams);
router.get("/find/:id", getSingleJam);

export default router;
