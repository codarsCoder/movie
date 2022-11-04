const Search = () => {
    return (
        <div className="row  search-form ">
<form  className="  d-flex d-flex align-items-baseline w-50 g-3 m-auto ">
      
      <div className="col-8 me-3 d-flex align-items-center">
          <input
              type="text"
              className="form-control"
              placeholder="Search"
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