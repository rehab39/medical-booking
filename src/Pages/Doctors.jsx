import React from "react"
import { useEffect, useState } from "react"
import DoctorCard from "../Components/DoctorCard"
import { getDoctors } from "../Services/api"

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [specialty, setSpecialty] = useState("")

  useEffect(() => {
    getDoctors()
      .then((response) => {
        setDoctors(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Something went wrong")
        setLoading(false)
      })
  }, [])

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesSpecialty =
      specialty === "" || doctor.specialty === specialty

    return matchesSearch && matchesSpecialty
  })

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <p className="mt-3 text-muted">
          Loading doctors...
        </p>
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
    <div className="doctors-page">

      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">

          <div className="hero-icon mb-3">
            <i className="bi bi-heart-pulse fs-1 text-primary"></i>
          </div>

          <h1 className="fw-bold">
            Find the right doctor for you
          </h1>

          <p className="text-muted fs-5">
            Find trusted doctors and book your appointment easily.
          </p>

        </div>
      </section>

      {/* Doctors Section */}
      <section className="container py-4">

        <h2 className="text-center fw-bold mb-4">
          Our Doctors
        </h2>

        {/* Search & Filter */}
        <div className="row justify-content-center mb-5">

          <div className="col-md-6 mb-3 mb-md-0">
            <div className="input-group">

              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search by doctor name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>
          </div>

          <div className="col-md-4">

            <select
              className="form-select"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Neurology">Neurology</option>
              <option value="Ophthalmology">Ophthalmology</option>
            </select>

          </div>

        </div>

        {/* Doctors Cards */}
        <div className="row g-4">

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-search fs-1 text-muted"></i>

              <p className="text-muted mt-3">
                No doctors found.
              </p>
            </div>
          ) : (
            filteredDoctors.map((doctor) => (
              <div className="col-md-6 col-lg-4" key={doctor.id}>
                <DoctorCard doctor={doctor} />
              </div>
            ))
          )}

        </div>

      </section>

    </div>
  )
}

export default Doctors

