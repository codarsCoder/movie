const Search = ({setSearch,getFilm}) => {

const setText = (e) => {
    e.preventDefault();
    setSearch(e.target.searchT.value)
    console.log(e.target.searchT.value)
    getFilm(true)
}

    return (
        <div className="row  search-form ">
<form  onSubmit={setText} className="  d-flex d-flex align-items-baseline w-50 g-3 m-auto ">
      
      <div className="col-8 me-3 d-flex align-items-center">
          <input
          name="searchT"
              type="text"
              className="form-control"
              placeholder="Search"
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