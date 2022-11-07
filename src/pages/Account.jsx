import {useState} from 'react'

const Account = () => {
  const [first, setFirst] = useState(false)
 
  return (
<>
<div className="card col-2 border-warning card-wr-bg"> <img src="images/buildings-skyline.jpg" className="card-img-top" alt="..." />
  <div className="card-body d-grid gap-3">
    <h5 className="card-title text-center text-capitalize">Silver</h5>
    <p className="card-text text-center p-0 pb-3">This card has supporting text below as a natural lead-in to additional content.</p>
  </div>
  <div className="card-footer text-light bg-warning"> 
    <div><i className="bi bi-facebook" /></div>
    <div><i className="bi bi-twitter" /></div>
    <div><i className="bi bi-youtube" /></div>
    <div><i className="bi bi-linkedin" /></div>
  </div>
</div>
 </>
  )
}

export default Account

