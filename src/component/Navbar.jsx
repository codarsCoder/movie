import { Link, NavLink, useNavigate } from "react-router-dom"


const Navbar = () => {
    const logIn = true
const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand navbar-dark bg-back">
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
        
            <li className="nav-item">
              <NavLink to="/account" className="nav-link active" aria-current="page">
                My Account
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            {logIn ?  (
                <>
                   <li className="nav-item">
              <button onClick={()=> navigate("/login", {state:false})}  className="nav-link active" aria-current="page">
                Log Out
              </button>
            </li>
            <li className="nav-item">
              <button onClick={()=> navigate("/login", {state:false})}  className="nav-link active" aria-current="page">
                Log Out
              </button>
            </li>  
            </>
                ) : (
                    <li className="nav-item">
              <button onClick={()=> navigate("/login", {state:false})}  className="nav-link active" aria-current="page">
                Log Out
              </button>
            </li>
                ) 

            }
         
           
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
