import react from 'react'

const TestimonialItem = ({ img, name, job, desc }) => { 
  return (
    <div className="col-lg-6">
      <div className="testimonial-item">
        <img src={ img } className="testimonial-img" alt=""/>
        <h3>{ name }</h3>
        <h4>{ job }</h4>
        <p>
        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          { desc }
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
      </div>
    </div>
  )
 }

export default TestimonialItem