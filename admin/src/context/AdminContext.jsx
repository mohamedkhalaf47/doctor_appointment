import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("AdminToken") ? localStorage.getItem("AdminToken") : ""
  );
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const changeAvailability = async (docId) => {
    try {
      console.log("id is " + docId);
      const { data } = await axios.patch(
        `${backendUrl}/api/admin/change-availability`,
        { docId },
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      if (data.success) {
        toast.success("Availability Changed");
        getAllDoctors();
      }
    } catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a status code
        console.log("Error Response Data:", error.response.data);
        console.log("Error Status:", error.response.status);
        toast.error(error.response.data.message || "Something went wrong");
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Error Request:", error.request);
        toast.error("No response from server");
      } else {
        // Something happened in setting up the request
        console.log("Error Message:", error.message);
        toast.error(error.message);
      }
    }
  };

  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/appointments`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      if (data.success) {
        setAppointments(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a status code
        console.log("Error Response Data:", error.response.data);
        console.log("Error Status:", error.response.status);
        toast.error(error.response.data.message || "Something went wrong");
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Error Request:", error.request);
        toast.error("No response from server");
      } else {
        // Something happened in setting up the request
        console.log("Error Message:", error.message);
        toast.error(error.message);
      }
    }
  };

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/all-doctors`, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a status code
        console.log("Error Response Data:", error.response.data);
        console.log("Error Status:", error.response.status);
        toast.error(error.response.data.message || "Something went wrong");
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Error Request:", error.request);
        toast.error("No response from server");
      } else {
        // Something happened in setting up the request
        console.log("Error Message:", error.message);
        toast.error(error.message);
      }
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/admin/cancel-appointment`,
        { appointmentId },
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        getAllAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getDashData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/admin/dashboard`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    adminToken,
    setAdminToken,
    backendUrl,
    doctors,
    getAllDoctors,
    changeAvailability,
    appointments,
    setAppointments,
    getAllAppointments,
    cancelAppointment,
    getDashData,
    dashData,
    setDashData,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
