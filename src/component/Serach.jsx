import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const Search = ({setSearch,getFilm,search}) => {
    const navigate = useNavigate()
    const { userL,setUserL,setLoading } = useLoginContext()
const setText = (e) => {
    e.preventDefault();
    if(userL.email){
        setSearch(e.target.searchT.value)
        getFilm(true)
    }else{
       navigate("/login")
       setSearch("")
    }
 
}

    return (
        <div className=" search-form ">
<form  onSubmit={setText} className="  d-flex d-flex align-items-baseline col-6 g-3 m-auto ">
      
      <div className="col-8 me-3 d-flex align-items-center">
          <input
          name="searchT"
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              required
          />
      </div>
      <div className="col-3 d-flex align-items-center">
          <button type="submit" className="btn btn-primary mb-3 ">
              Search
          </button>
      </div>
  </form>
        </div>
        

    )
}

export default Search