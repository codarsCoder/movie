import {useState} from 'react'
import resim from '../assets/login.png'
import { createUser } from "../auth/firebase"
import { useLoginContext } from "../context/LoginProvider"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {userL, setUserL}  = useLoginContext()
  const handleSubmit = (e)=>{
    e.preventDefault()
    createUser(email, password,setUserL)
  }

  return (
    <div className="loginn" style={{  
      backgroundImage: `url(${resim})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
   <form onSubmit={(e)=> handleSubmit(e)} className="login-form">
    <h3>Register</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      onChange={(e)=>setEmail(e.target.value)}
      autoFocus
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      onChange={(e)=>setPassword(e.target.value)}
    />
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div> */}
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

   {/* <Toaster position="top-center" /> */}
    </div>
  )
}

export default Register