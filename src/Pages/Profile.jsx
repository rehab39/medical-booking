import { useState, useRef } from "react"
import useAppStore from "../Store/useAppStore"

const Profile = () => {
  const inputRef = useRef(null)
  const focusNameInput = () => {
    inputRef.current.focus()
  }
  const { user, setUser } = useAppStore()
  const [email, setEmail] = useState(user.email)

  const handleSave = () => {
    const nameValue = inputRef.current.value

    if (!nameValue || !email) {
      alert("Please enter your name and email.")
      return
    }

    setUser({
      name: nameValue,
      email
    })

    alert("Profile saved successfully!")
  }


  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-7 col-lg-5">

          <div className="card shadow-sm border-0 rounded-4 p-4">

            <h1 className="text-center mb-2">My Profile</h1>

            <p className="text-center text-secondary mb-4">
              Manage your profile information
            </p>

            <div className="mb-3">
              <label className="form-label">Name</label>

              <input
                type="text"
                className="form-control"
                defaultValue={user.name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                ref={inputRef}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Email</label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"

              />
            </div>

            <button
              className="btn btn-primary w-100"
              onClick={handleSave}
            >
              Save Profile
            </button>
            <button type="button"
              className="btn btn-outline-primary w-100 mt-2"
              onClick={focusNameInput}


            >Focuse on Name</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
