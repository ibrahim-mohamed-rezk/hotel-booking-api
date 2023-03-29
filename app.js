import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usershRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello user");
});

const uri = process.env.MONGOURI;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connented to mongodb");
  } catch (error) {
    console.log(error);
  }
}

mongoose.connection.on("connected", () => {
  console.log("backend is conncted to mongodb");
});

mongoose.connection.on("disconnected", () => {
  console.log("coonention error with mongo db");
});

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3007");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(
  cors({
    origin: ["https://hotel-booking-admin-i6pc.onrender.com","https://hotels-booking-8wfv.onrender.com"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usershRoute);

app.use((err, req, res, next) => {
  const errstatus = err.status || 500;
  const errmessage = err.message || "something went wrong";
  return res.status(errstatus).json({
    success: false,
    status: errstatus,
    message: errmessage,
    stack: err.stack,
  });
});

app.all("*", (req, res) => {
  res.status(404).json({data:'none'});
});

app.listen(9500, () => {
  console.log("server is running");
  connect();
});
