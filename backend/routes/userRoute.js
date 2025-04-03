import express from "express";
import {
  getData,
  register,
  updateData,
  userLogin,
  bookAppointment,
  appointmentsList,
  cancelAppointment
} from "../controllers/userController.js";
import { authUser } from "../middleware/authUser.js";
import { upload } from "../middleware/multer.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", userLogin);
userRouter.get("/get-data", authUser, getData);
userRouter.patch(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateData
);
userRouter.post("/book-appointment", authUser, bookAppointment);

userRouter.get("/appointments", authUser, appointmentsList);

userRouter.post("/cancel-appointment", authUser, cancelAppointment);

export default userRouter;
