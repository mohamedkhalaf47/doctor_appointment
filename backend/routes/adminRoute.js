import express from "express";
import {
  addDoctor,
  allDoctors,
  loginAdmin,
  allAppointments,
  cancelAppointmentAdmin,
  dashboardData,
  deleteDoctorAndAppointments,
} from "../controllers/adminController.js";
import { upload } from "../middleware/multer.js";
import { authAdmin } from "../middleware/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

adminRouter.post("/login", loginAdmin);

adminRouter.get("/all-doctors", authAdmin, allDoctors);

adminRouter.patch("/change-availability", authAdmin, changeAvailability);

adminRouter.get("/appointments", authAdmin, allAppointments);

adminRouter.post("/cancel-appointment", authAdmin, cancelAppointmentAdmin);

adminRouter.get("/dashboard", authAdmin, dashboardData);

adminRouter.post("/delete-doctor", authAdmin, deleteDoctorAndAppointments);

export default adminRouter;
