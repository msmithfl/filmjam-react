import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE A USER
//post because we are sending our info to db
router.post("/signup", signup);

//SIGN IN
router.post("/signin", signin);

export default router;
