
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Doctors from "./Pages/Doctors"
import DoctorDetails from './Pages/DoctorDetails'
import Profile from "./Pages/Profile"
import NotFound from "./Pages/NotFound"
import BookAppointment from "./Pages/BookAppointment"
import Appointment from "./Pages/Appointment"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={< Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}


export default App


