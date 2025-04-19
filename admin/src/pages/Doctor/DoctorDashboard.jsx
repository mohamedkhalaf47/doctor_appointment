import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets_admin/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const { getDashboardData, dashboardData, doctorToken, appointmentCancellation, appointmentCompleted } =
    useContext(DoctorContext);

  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if(doctorToken){
      getDashboardData();
    }
  }, [doctorToken]);
  return (
    dashboardData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer transition-all hover:scale-105">
            <img
              className="w-14"
              src={assets.earning_icon}
              alt="doctors"
              loading="lazy"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {currency}
                {dashboardData.earnings}
              </p>
              <p className="text-gray-400">Earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer transition-all hover:scale-105">
            <img
              className="w-14"
              src={assets.appointments_icon}
              alt="doctors"
              loading="lazy"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboardData.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer transition-all hover:scale-105">
            <img
              className="w-14"
              src={assets.patients_icon}
              alt="doctors"
              loading="lazy"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboardData.patients}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex items-center gap-2.5 p-4 mt-10 rounded-t border">
            <img src={assets.list_icon} alt="icon" />
            <p className="font-semibold">Latest Bookings</p>
          </div>
          <div className="pt-4 border border-t-0">
            {dashboardData.latestAppointments.map((appointment, index) => (
              <div
                className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
                key={index}
              >
                <img
                  className="w-10 rounded-full"
                  src={appointment.userData.image}
                  alt="doc image"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {appointment.userData.name}
                  </p>
                  <p className="text-gray-600">
                    {slotDateFormat(appointment.slotDate)}
                  </p>
                </div>
                {appointment.cancelled ? (
                  <p className="text-red-500">Cancelled</p>
                ) : appointment.isCompleted ? (
                  <p className="text-green-500">Completed</p>
                ) : (
                  <div className="flex">
                    <img
                      className="w-10 cursor-pointer"
                      src={assets.cancel_icon}
                      alt="cancel icon"
                      onClick={() => appointmentCancellation(appointment._id)}
                    />
                    <img
                      className="w-10 cursor-pointer"
                      src={assets.tick_icon}
                      alt="check mark icon"
                      onClick={() => appointmentCompleted(appointment._id)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
