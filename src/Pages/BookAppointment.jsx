import React from "react"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { useSearchParams } from 'react-router-dom'
import { getDoctorsById,createAppointment } from '../Services/api'
const BookAppointment = () => {
  const [searchParams] = useSearchParams()
  const doctorId = searchParams.get("doctor")
  console.log("ID IS:", doctorId)
  const [doctor, setDoctor] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    getDoctorsById(doctorId)
      .then((response) => {
        setDoctor(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [doctorId])

const onSubmit = async (data) => {
  try {
    const appointmentData = {
      ...data,
      doctorId: doctor.id,
      doctorName: doctor.name
    }

    const response = await createAppointment(appointmentData)

    console.log("Appointment created:", response.data)
    alert("Appointment booked successfully!")
  } catch (error) {
    console.log(error)
    alert("Failed to book appointment")
  }
}

return (
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-7">

        <div className="card shadow-sm border-0 rounded-4 p-4">

          <h1 className="text-center mb-2">
            Book Appointment
          </h1>

          <p className="text-center text-secondary mb-4">
            Fill in your information to book an appointment
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
              <label className="form-label">Patient Name</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                {...register("patientName", {
                  required: "Patient name is required"
                })}
              />

              {errors.patientName && (
                <p className="text-danger small mt-1">
                  {errors.patientName.message}
                </p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required"
                })}
              />

              {errors.email && (
                <p className="text-danger small mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Date</label>

                <input
                  type="date"
                  className="form-control"
                  {...register("date", {
                    required: "Date is required"
                  })}
                />

                {errors.date && (
                  <p className="text-danger small mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Time</label>

                <input
                  type="time"
                  className="form-control"
                  {...register("time", {
                    required: "Time is required"
                  })}
                />

                {errors.time && (
                  <p className="text-danger small mt-1">
                    {errors.time.message}
                  </p>
                )}
              </div>

            </div>

            <div className="mb-3">
              <label className="form-label">Doctor</label>

              <input
                type="text"
                className="form-control"
                value={doctor ? doctor.name : ""}
                readOnly
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Note</label>

              <textarea
                className="form-control"
                rows="4"
                placeholder="Write a note (optional)"
                {...register("note")}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Book Appointment
            </button>

          </form>

        </div>

      </div>
    </div>
  </div>
)

}

export default BookAppointment
