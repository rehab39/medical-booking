import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getDoctorsById } from "../Services/api"
const DoctorDetails = () => {
  const { id } = useParams()
  console.log("id:", id)
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  useEffect(() => {
    getDoctorsById(id)
      .then((response) => {
        setDoctor(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log("api eror", error)
        setError("Doctor not found")
        setLoading(false)
      })
  }, [id])
  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3 text-muted">Loading doctor...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container text-center py-5">
        <p className="text-danger">{error}</p>
      </div>
    )
  }
  return (
    <div className=" container py-5">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-details-image mb-4"
          />
          <h1 className="fw-bold">{doctor.name}</h1>

          <span className="badge bg-primary-subtle text-primary mb-3">
            <i className="bi bi-heart-pulse me-1"></i>
            {doctor.specialty}
          </span>
          <p className="text-muted mt-3">
            {doctor.description}
          </p>
          <h5 className="fw-bold mt-4">
            <i className="bi bi-calendar3 me-2"></i>
            Working Days
          </h5>

          <p className="text-muted">
            {doctor.workingDays.join(" • ")}
          </p>

          <h5 className="fw-bold mt-4">
            <i className="bi bi-clock me-2"></i>
            Available Slots
          </h5>

          <div className="d-flex flex-wrap gap-2">
            {doctor.slots.map((slot) => (
              <span
                key={slot}
                className="badge bg-light text-primary border p-2"
              >
                {slot}
              </span>
            ))}
          </div>

          <Link
            to={`/book-appointment?doctor=${doctor.id}`}
            className="btn btn-primary mt-4"
          >
            <i className="bi bi-calendar-plus me-2"></i>
            Book Appointment
          </Link>







        </div>
      </div>

     

    </div>
  )
}

export default DoctorDetails


