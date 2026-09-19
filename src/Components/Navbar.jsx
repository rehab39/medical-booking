import React from 'react'
import { Link } from "react-router-dom"
import useAppStore from '../Store/useAppStore'
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useAppStore()
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        <Link className="navbar-brand fw-bold text-primary" to="/">
          <i className="bi bi-heart-pulse me-2"></i>
          Medical Booking
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <Link className="nav-link" to="/">
              <i className="bi bi-person-badge me-1"></i>
              Doctors
            </Link>

            <Link className="nav-link" to="/book-appointment">
              <i className="bi bi-calendar-plus me-1"></i>
              Book Appointment
            </Link>

            <Link className="nav-link" to="/appointments">
              <i className="bi bi-calendar-check me-1"></i>
              My Appointments
            </Link>

            <Link className="nav-link" to="/profile">
              <i className="bi bi-person-circle me-1"></i>
              Profile
            </Link>

          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={toggleDarkMode}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar