import express from "express";
import {
  getCreatedJamsForUser,
  getJamsForUser,
  getUser,
  leaveJam,
  saveCreatedJam,
  saveEnteredJam,
} from "../controllers/user.js";

const router = express.Router();

router.get("/find/:id", getUser);
router.put("/enterJam/:jamId", saveEnteredJam);
router.put("/createJam/:jamId", saveCreatedJam);
router.put("/leaveJam/:jamId", leaveJam);
router.get("/find/enteredJams/:id", getJamsForUser);
router.get("/find/createdJams/:id", getCreatedJamsForUser);

export default router;
