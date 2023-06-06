import express from "express";
import { addJam, getJams } from "../controllers/jam.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", addJam);
router.get("/", getJams);

export default router;
