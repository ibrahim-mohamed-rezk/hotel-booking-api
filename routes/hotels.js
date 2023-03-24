import Express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHoteles,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotels.js";
import Hotel from "../models/Hotels.js";
import { verfyAdmin } from "../utils/verfytoken.js";

const router = Express.Router();
//create
router.post("/", verfyAdmin, createHotel);

//update
router.put("/:id", verfyAdmin, updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get
router.get("/find/:id", getHotel);

//get all
router.get("/", getHoteles);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
