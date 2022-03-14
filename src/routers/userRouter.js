import express from "express";
import {
  edit,
  deleteProfile,
  logout,
  see,
} from "../controllers/userController";

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleteProfile);
userRouter.get("/:id", see);

export default userRouter;
