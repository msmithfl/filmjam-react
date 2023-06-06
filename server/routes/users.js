import express from "express";
import {
  getJamsForUser,
  getUser,
  leaveJam,
  saveJam,
} from "../controllers/user.js";

const router = express.Router();

router.get("/find/:id", getUser);
router.put("/enterJam/:jamId", saveJam);
router.put("/leaveJam/:jamId", leaveJam);
router.get("/find/enteredJams/:id", getJamsForUser);

export default router;
