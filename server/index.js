import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import jamRoutes from "./routes/jams.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB!");
    })
    .catch((err) => {
      throw err;
    });
};

//middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

//routes
app.use("/api/jams", jamRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//custom error handling
app.use((err, req, res, next) => {
  //defining status
  const status = err.status || 500;
  // if no default message, send custom message
  const message = err.message || "Something went wrong!";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to Server!");
});
