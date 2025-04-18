import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

export const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docData, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availability Changed" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: error.message || "Server error" });
  }
};

export const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const doctorLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await doctorModel.findOne({ email });

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, doctor.password);

    if (isMatch) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET_KEY);
      res.status(200).json({ success: true, token });
    } else {
      res.status(400).json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const doctorAppointments = async (req, res) => {
  try {
    const { docId } = req.body;
    const appointments = await appointmentModel.find({docId});
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
