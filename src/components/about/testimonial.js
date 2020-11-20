import react from 'react'
import TestimonialItem from './elements/testimonial-item'

let data = [
  { 
    name: 'Saul Goodman',
    job: 'Ceo & Founder', 
    desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
  },
  { 
    name: 'Sara Wilsson',
    job: 'Designer', 
    desc: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. '
  },
  { 
    name: 'Jena Karlis',
    job: 'Store Owner', 
    desc: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. '
  },
  { 
    name: 'Matt Brandon', 
    job: 'Freelancer', 
    desc: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. '
  },
  { 
    name: 'John Larson', 
    job: 'Entrepreneur', 
    desc: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
  },
  { 
    name: 'Emily Harison', 
    job: 'Store Owner', 
    desc: 'Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur. Sequi officiis ea et quia quidem.'
  },
]

const Testimonial = () => { 
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="row">
          { data.map((item, id) => (<TestimonialItem key={ id } { ...item }/>)) }
        </div>
      </div>
    </section>
  )
 }

export default Testimonial