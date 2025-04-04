import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets_admin/assets";

const AllAppointments = () => {
  const { adminToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (adminToken) {
      getAllAppointments();
    }
  }, [adminToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient Name</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fee</p>
          <p>Action</p>
        </div>

        {appointments.map((appointment, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b duration-500 hover:bg-gray-100"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={appointment.userData.image}
                alt="image"
                loading="lazy"
              />
              <p>{appointment.userData.name}</p>
            </div>
            <p className="max-sm:hidden">
              {calculateAge(appointment.userData.dateOfBirth)}
            </p>
            <p className="max-sm:hidden">
              {slotDateFormat(appointment.slotDate)}, {appointment.slotTime}
            </p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={appointment.docData.image}
                alt="image"
                loading="lazy"
              />
              <p className="max-sm:hidden">{appointment.docData.name}</p>
            </div>
            <p className="max-sm:hidden">
              {currency}
              {appointment.amount}
            </p>
            {appointment.cancelled ? (
              <p className="text-red-700 text-xs font-medium">Cancelled</p>
            ) : (
              <img
                onClick={() => cancelAppointment(appointment._id)}
                className="w-10 cursor-pointer"
                src={assets.cancel_icon}
                alt="cancelIcon"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
