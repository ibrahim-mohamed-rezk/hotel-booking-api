import Express from "express";
import { verfyAdmin } from "../utils/verfytoken.js";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

const router = Express.Router();

//create
router.post("/:hoteid", verfyAdmin, createRoom);

//update
router.put("/:id", verfyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete
router.delete("/:id/:hoteid", deleteRoom);

//get
router.get("/:id", getRoom);

//get all
router.get("/", getRooms);

export default router;
