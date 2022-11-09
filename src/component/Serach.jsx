import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";

const Search = ({setSearch,getFilm,search,getFavoriFilm}) => {
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
              type="search"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              required
          />
      </div>
      <div className="col-3 d-flex align-items-center">
          <button type="submit" className="btn btn-primary  ">
              Search
          </button>
          <button  onClick={getFavoriFilm} type="button" className="btn btn-danger  ms-3">
              Favories
          </button>
      </div>
  </form>
        </div>
        

    )
}

export default Search