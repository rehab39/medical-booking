import { useEffect, useState } from "react"
import { getAppointments, deleteAppointment ,updateAppointment} from "../Services/api"

const Appointment = () => {
  const [appointments, setAppointments] = useState([])
const [editingId, setEditingId] = useState(null)
const [editData, setEditData] = useState({
  date: "",
  time: ""
})
  useEffect(() => {
    getAppointments()
      .then((response) => {
        setAppointments(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this appointment?"
    )

    if (!confirmDelete) {
      return
    }

    try {
      await deleteAppointment(id)

      setAppointments((appointments) =>
        appointments.filter((appointment) => appointment.id !== id)
      )

      alert("Appointment cancelled successfully!")
    } catch (error) {
      console.log(error)
      alert("Failed to cancel appointment")
    }
  }
  const handleEdit = (appointment) => {
  setEditingId(appointment.id)

  setEditData({
    date: appointment.date,
    time: appointment.time
  })
}
const handleUpdate = async (id) => {
  try {
    const appointment = appointments.find(
      (appointment) => appointment.id === id
    )

    const updatedAppointment = {
      ...appointment,
      date: editData.date,
      time: editData.time
    }

    const response = await updateAppointment(
      id,
      updatedAppointment
    )

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? response.data
          : appointment
      )
    )

    setEditingId(null)

    alert("Appointment updated successfully!")
  } catch (error) {
    console.log(error)
    alert("Failed to update appointment")
  }
}

return (
  <div className="container py-5">

    <h1 className="text-center mb-2">
      My Appointments
    </h1>

    <p className="text-center text-secondary mb-5">
      Manage your booked appointments
    </p>

    {appointments.length === 0 ? (
      <div className="alert alert-light text-center">
        You don't have any appointments yet.
      </div>
    ) : (
      <div className="row g-4">

        {appointments.map((appointment) => (
          <div className="col-12 col-md-6" key={appointment.id}>

            <div className="card h-100 shadow-sm border-0 rounded-4">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-center mb-3">

                  <h3 className="h5 mb-0">
                    {appointment.doctorName}
                  </h3>

                  <span className="badge text-bg-success">
                    Booked
                  </span>

                </div>

                <hr />

                <p>
                  <strong>Patient:</strong>{" "}
                  {appointment.patientName}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {appointment.email}
                </p>

                <p>
                  <strong>Date:</strong>{" "}
                  {appointment.date}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {appointment.time}
                </p>

                {appointment.note && (
                  <p>
                    <strong>Note:</strong>{" "}
                    {appointment.note}
                  </p>
                )}

                {/* Edit Form */}
                {editingId === appointment.id && (
                  <div className="mt-3">

                    <label className="form-label">
                      New Date
                    </label>

                    <input
                      type="date"
                      className="form-control mb-3"
                      value={editData.date}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          date: e.target.value
                        })
                      }
                    />

                    <label className="form-label">
                      New Time
                    </label>

                    <input
                      type="time"
                      className="form-control mb-3"
                      value={editData.time}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          time: e.target.value
                        })
                      }
                    />

                    <button
                      className="btn btn-primary w-100"
                      onClick={() =>
                        handleUpdate(appointment.id)
                      }
                    >
                      Save Changes
                    </button>

                  </div>
                )}

                {/* Buttons */}
                <button
                  className="btn btn-outline-primary w-100 mt-3"
                  onClick={() => handleEdit(appointment)}
                >
                  Edit Appointment
                </button>

                <button
                  className="btn btn-outline-danger w-100 mt-2"
                  onClick={() =>
                    handleDelete(appointment.id)
                  }
                >
                  Cancel Appointment
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    )}

  </div>
)
}

export default Appointment
