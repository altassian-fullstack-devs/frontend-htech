import react from 'react'

const Member = ({ name, job, desc , img}) => { 
  return (
    <div className="col-lg-6">
      <div className="member d-flex align-items-start">
        <div className="pic">
          <img src={`img/team/${img}`} className="img-fluid" alt=""/>
        </div>
        <div className="member-info">
        <h4>{ name }</h4>
        <span>{ job }</span>
        <p>{ desc }</p>
        <div className="social">
          <a href=""><i className="ri-twitter-fill"></i></a>
          <a href=""><i className="ri-facebook-fill"></i></a>
          <a href=""><i className="ri-instagram-fill"></i></a>
          <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
        </div>
        </div>
      </div>
    </div>
  )
 }
 
export default Member