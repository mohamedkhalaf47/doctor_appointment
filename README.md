# Doctor Appointment Booking System

## Overview
**Doctor Appointment** is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The app allows users to book appointments with doctors, view available schedules, and manage their bookings.

## Features
- **User Authentication** (Register/Login with JWT)
- **Role-based Access** (Patients & Doctors)
- **Appointment Booking System**
- **Doctor Availability Management**
- **Admin Dashboard for User & Appointment Management**
- **Real-time Notifications**
- **Responsive UI** (Built with TailWindCSS)

## Technologies Used
### Frontend & Admin Dashboard
- React.js
- React Router DOM
- TailWindCSS
- Axios (For API calls)

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt for Password Hashing

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- MongoDB (Locally or using MongoDB Atlas)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/mohamedkhalaf47/doctor_appointment.git
   cd doctor_appointment
   ```

2. **Install dependencies**
   - Install frontend dependencies:
     ```sh
     cd frontend
     npm install
     ```
   - Install backend dependencies:
     ```sh
     cd backend
     npm install
     ```

3. **Configure Environment Variables**
   Create a `.env` file in the `server` directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**
   - Start the backend:
     ```sh
     cd server
     npm start
     ```
   - Start the frontend:
     ```sh
     cd frontend
     npm run dev
     ```

5. **Open the app in the browser**
   ```
   http://localhost:5173
   ```

## Folder Structure
```
📂 doctor_appointment
│-- 📂 frontend  # React Frontend
│   │-- 📂 src
│   │-- 📂 components
│   │-- 📂 pages
│   │-- ...
│-- 📂 backend  # Express Backend
│   │-- 📂 models
│   │-- 📂 routes
│   │-- 📂 controllers
│   │-- server.js
│-- package.json
│-- README.md
```

## Future Improvements
- Integrate Payment System for Online Consultation
- Add Email & SMS Notifications
- Improve UI/UX with Animations

## Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome!

## License
This project is licensed under the MIT License.

## Author
**Mohamed M.Khalaf**
- GitHub: [@mohamedkhalaf47](https://github.com/mohamedkhalaf47)
