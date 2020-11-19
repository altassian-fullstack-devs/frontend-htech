import react from 'react'
import Testimonial from '../../../../components/about/testimonial'
import BreadCrumb from '../../../layout/common/breadcrumb'
const TestimonialPage = ({}) => {
    return (
      <>
        <BreadCrumb path="Testimonials"/>
        <Testimonial/>
      </>
    )
}
export default TestimonialPage