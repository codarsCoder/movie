import { useLoginContext } from "../context/LoginProvider"
import { getUser } from "../auth/firebase"
import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import klaket from "../assets/klaket.png"
import { signPopup } from "../auth/firebase";
import { GridLoader } from "react-spinners"
import Loader from "../component/Loader"
const LogIn = () => {

  const { userL, setUserL, loading } = useLoginContext()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    getUser(email, password, setUserL, setMessage)
  }
  useEffect(() => {
    getMessage()
  }, [message])

  //   var seconds = 1667544020351;
  // let time = new Date(seconds)
  // let normalDate = new Date(seconds).toLocaleString('tr-TR')
  const getMessage = () => {
    const mes = message
    mes && toast.error(mes)
  }
  const navigate = useNavigate()



  return (
    <>
      {loading ? <Loader /> : (
        <>
          {userL.email && navigate(-1)}

          <div className="loginn">
            <form onSubmit={(e) => handleSubmit(e)} className="login-form">
              <div className="mb-3 text-center">
                <img className="klaket" src={klaket} alt="" />
              </div>
              <div className="mb-3">
                <h3>Login</h3>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="mb-3"></div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
                          {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div> */}
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
              <button onClick={() => signPopup(setUserL)} className=" btn btn-outline-light  d-block mt-2" aria-current="page">
                LogIn with google
              </button>
            </form>

            {/* <Toaster position="top-center" /> */}
          </div>
        </>
      )

      }
    </>
  )

}

export default LogIn
