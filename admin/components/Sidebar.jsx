import React, { useContext } from 'react'
import { AdminContext } from '../context/adminContext'
import { NavLink } from 'react-router-dom';
import { assets } from '../src/assets_admin/assets';

const Sidebar = () => {

  const {adminToken} = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white border-r">
      {adminToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-[#5f6fff] " : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <img src={assets.home_icon} alt="Home icon" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-[#5f6fff] " : ""
              }`
            }
            to={"/all-appointments"}
          >
            <img src={assets.appointment_icon} alt="Appointments icon" />
            <p>Appointments</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-[#5f6fff] " : ""
              }`
            }
            to={"/add-doctor"}
          >
            <img src={assets.add_icon} alt="Add Doctor icon" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#f2f3ff] border-r-4 border-[#5f6fff] " : ""
              }`
            }
            to={"/doctor-list"}
          >
            <img src={assets.people_icon} alt="Doctors list icon" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Sidebar