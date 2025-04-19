import express from "express";
import {
  doctorAppointments,
  doctorList,
  doctorLogin,
  appointmentCompleted,
  appointmentCancelled,
  doctorDashboard,
  doctorProfile,
  updateDoctorProfile,
} from "../controllers/doctorController.js";
import { authDoctor } from "../middleware/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", doctorLogin);
doctorRouter.get("/appointments", authDoctor, doctorAppointments);
doctorRouter.post("/appointment-completed", authDoctor, appointmentCompleted);
doctorRouter.post("/appointment-cancelled", authDoctor, appointmentCancelled);
doctorRouter.get("/dashboard", authDoctor, doctorDashboard);
doctorRouter.get("/profile", authDoctor, doctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

export default doctorRouter;
