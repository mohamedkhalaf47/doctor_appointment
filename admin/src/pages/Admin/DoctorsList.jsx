import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const {
    adminToken,
    getAllDoctors,
    doctors,
    changeAvailability,
    deleteDoctorAndAppointments,
  } = useContext(AdminContext);

  useEffect(() => {
    if (adminToken) {
      getAllDoctors();
    }
  }, [adminToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll ">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((doctor, index) => (
          <div
            className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
            key={index}
          >
            <img
              className="bg-indigo-50 group-hover:bg-[#5f6fff] transition-all duration-500"
              src={doctor.image}
              alt="Doctor"
            />
            <div className="p-4">
              <p className="text-neutral-800 text-lg font-medium">
                {doctor.name}
              </p>
              <p className="text-zinc-600 text-sm">{doctor.speciality}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input
                  onChange={() => changeAvailability(doctor._id)}
                  type="checkbox"
                  checked={doctor.available}
                />
                <p>Available</p>
              </div>
              <div className="mt-2">
                <button
                  onClick={() => deleteDoctorAndAppointments(doctor._id)}
                  className="border border-red-600 rounded-full px-2 py-0.5 text-sm cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-500"
                >
                  Delete Doctor
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
