import Express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { verfyAdmin, verfyToken, verfyUser } from "../utils/verfytoken.js";

const router = Express.Router();

router.get("/checkauthentication", verfyToken, (req, res, next) => {
  res.send("hello user you are loged in");
});
//update
router.put("/:id", verfyUser, updateUser);

//delete
router.delete("/:id", verfyUser, deleteUser);

//get
router.get("/:id", verfyUser, getUser);

//get all
router.get("/", verfyAdmin, getUsers);

export default router;
