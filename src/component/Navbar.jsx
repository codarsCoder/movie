import { Link, NavLink, useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginProvider";
import { useState ,useEffect} from "react";


const Navbar = () => {
  
  useEffect(() => {
    setLogin(true)
  }, [])
  
  const [login, setLogin] = useState(false)
  const { userL, setUserL } = useLoginContext()


  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-md navbar-collapse navbar-dark ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3" >
          React Movie App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


          </ul>
          <ul className="navbar-nav">

            { 
            login && (
            !userL.email ? (
              <div className="d-flex gap-3">
                <li className="nav-item">
                  <button onClick={() => navigate("/login")} className=" btn btn-outline-dark" aria-current="page">
                    LogIn
                  </button>
                </li>
               
                <li className="nav-item">
                  <button onClick={() => navigate("/register")} className=" btn btn-outline-light" aria-current="page">
                    Register
                  </button>
                </li>
              </div>
             ) : (
              <div className="d-flex gap-3">
                <li className="nav-item">
                  <NavLink  className="btn btn-outline-light" aria-current="page">
                    {userL.email ? userL.email : "My Account"}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button onClick={() => navigate("/logout")} className=" btn btn-outline-light" aria-current="page">
                    Log Out
                  </button>
                </li>
              </div>

             )
            )
            }


          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
