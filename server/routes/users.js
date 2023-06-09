import express from "express";
import {
  getCreatedJamsForUser,
  getJamsForUser,
  getUser,
  leaveJam,
  saveCreatedJam,
  saveEnteredJam,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.get("/find/:id", getUser);
router.put("/enterJam/:jamId", saveEnteredJam);
router.put("/createJam/:jamId", saveCreatedJam);
router.put("/leaveJam/:jamId", leaveJam);
router.get("/find/enteredJams/:id", verifyToken, getJamsForUser);
router.get("/find/createdJams/:id", verifyToken, getCreatedJamsForUser);

export default router;
