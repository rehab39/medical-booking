import React from "react"
import { Link } from "react-router-dom"
import useAppStore from "../Store/useAppStore"
function DoctorCard({ doctor }) {
  const { favorites, toggleFavorite } = useAppStore()
  return (
    <div className="card h-100 border-0 shadow-sm doctor-card">

      <img
        src={doctor.image}
        className="card-img-top doctor-image"
        alt={doctor.name}
      />

      <div className="card-body d-flex flex-column">

        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title fw-bold mb-0">
            {doctor.name}
          </h5>

          <i className="bi bi-patch-check-fill text-primary"></i>
        </div>

        <span className="badge bg-primary-subtle text-primary align-self-start mb-3">
          <i className="bi bi-heart-pulse me-1"></i>
          {doctor.specialty}
        </span>

        <p className="card-text text-muted">
          {doctor.description}
        </p>

        <div className="text-muted small mb-3">
          <i className="bi bi-calendar3 me-2"></i>
          {doctor.workingDays.join(" • ")}
        </div>

        <Link
          to={`/doctors/${doctor.id}`}
          className="btn btn-outline-primary mt-auto"
        >
          View Details
          <i className="bi bi-arrow-right ms-2"></i>
        </Link>

      </div>
      <button
        className="btn btn-outline-danger"
        onClick={() => toggleFavorite(doctor.id)}
      >
        {favorites.includes(doctor.id) ? "♥" : "♡"}
      </button>
    </div>
  )
}

export default DoctorCard