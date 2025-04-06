import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets_admin/assets";

const DoctorAppointment = () => {
  const { doctorToken, appointments, setAppointments, getAppointments } =
    useContext(DoctorContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (doctorToken) {
      getAppointments();
    }
  }, [doctorToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
        {appointments.map((appointment, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b transition-all cursor-pointer hover:bg-gray-100"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                className="w-9 rounded-full"
                src={appointment.userData.image}
                alt="userImage"
              />
              <p>{appointment.userData.name}</p>
            </div>
            <div>
              <p className="text-xs inline px-3 rounded-full">
                {appointment.payment ? "Paid Online" : "Will Pay in Cash"}
              </p>
            </div>
            <p className="max-sm:hidden">
              {calculateAge(appointment.userData.dateOfBirth)}
            </p>
            <p>
              {slotDateFormat(appointment.slotDate)},{appointment.slotTime}
            </p>
            <p>
              {currency}
              {appointment.amount}
            </p>
            <div className="flex">
              <img
                className="w-10 cursor-pointer"
                src={assets.cancel_icon}
                alt="cancel icon"
              />
              <img
                className="w-10 cursor-pointer"
                src={assets.tick_icon}
                alt="check mark icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointment;
