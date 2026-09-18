Medical Booking App

A responsive medical booking web application built with React.
The application allows users to browse doctors, search and filter by specialty, view doctor details, book appointments, and manage their appointments.

Features

- Browse available doctors
- Search doctors by name
- Filter doctors by specialty
- View doctor details
- Book an appointment
- View all appointments
- Update appointment date and time
- Cancel appointments with confirmation
- Profile management
- Form validation using React Hook Form
- Global state management using Zustand
- Responsive design with Bootstrap
- 404 Not Found page
- Loading and error states
- REST API integration using Axios
- JSON Server for the backend

Technologies Used

- React
- React Router
- Axios
- React Hook Form
- Zustand
- Bootstrap
- JSON Server
- Vite

Project Structure

src/
├── Components/
│   ├── DoctorCard.jsx
│   └── Navbar.jsx
├── Pages/
│   ├── Doctors.jsx
│   ├── DoctorDetails.jsx
│   ├── BookAppointment.jsx
│   ├── Appointment.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
├── Services/
│   └── api.js
├── Store/
│   └── useAppStore.js
├── App.jsx
├── App.css
└── main.jsx

API

The application uses JSON Server as a local REST API.

Main endpoints:

- "GET /doctors"
- "GET /doctors/:id"
- "GET /appointments"
- "POST /appointments"
- "PUT /appointments/:id"
- "DELETE /appointments/:id"

How to Run the Project

Install dependencies:

npm install

Start the JSON Server:

npx json-server --watch db.json

Start the React development server in another terminal:

npm run dev

The application will run using the Vite development server.

Author

Medical Booking App — React Project