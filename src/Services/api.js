import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export const getDoctors = () => {
  return api.get("/doctors")
}

export const getDoctorsById = (id) => {
 

  return api.get(`/doctors/${id}`)
}

export const createAppointment = (data) => {
  return api.post("/appointments", data)
}
export const getAppointments=()=>{
  return api.get("/appointments")
}
export const deleteAppointment = (id) => {
  return api.delete(`/appointments/${id}`)
}
export const updateAppointment = (id, data) => {
  return api.put(`/appointments/${id}`, data)
}