import react from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FixedWidthLayout } from 'containers/layout';
let data = [
  {img:'what_makes_us-01.original.png', desc:'Invest in FF Ventures to support the early-stage tech companies'},
  {img:'what_makes_us-03.original.png', desc:'Sponsor industry events to foster sharing expertise within the community'},
  {img:'what_makes_us-04.original.png', desc:'Donate company resources to charitable causes'},
  {img:'what_makes_us-05.original.png', desc:'Hiring with no regard for age, gender, and place of birth'},
  {img:'what_makes_us-06.original.png', desc:'Promote and finance team networking and continuous learning culture'},
]

const MakesItem = ({img, desc}) => (
  // <div className="flex-1 d-flex makeitem">
  // <div>
    // <h1>{desc}</h1>
  <div className='d-flex flex-1 makeitem'>
    <img alt="Invest" src={require(`assets/images/about/${img}`).default} className='flex-1' style={{maxWidth:'60px', filter:'invert(1)'}}/>
    <div className='flex-2'>{desc}</div>
  </div>
  // </div>
)

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1600,
      settings: "unslick" // destroys slick
    },
    {
      breakpoint: 1024,
        settings: {        
        }
    }
  ]
};

const Makes = ({}) => (
  <FixedWidthLayout className="container">
    <div className="data">
      <h2 className="left">What makes us 'us'</h2>
      <div className="double-underline-block mobile-padding small_images">
        <div className="images">
          {/* <div className="desktop full-width d-flex"> */}
          <Slider {...settings} className='d-flex'>
            {data.map((item, index) => (<MakesItem key={index} {...item} ></MakesItem>))}
          </Slider>
          {/* </div> */}
        </div>

        <div class="text">
          <div>
            <div class="head">Our strength and confidence is in our community</div>
            <div>The first rule of iTechArt is: We do not talk about changes; we make changes. Our team always strives to disrupt and question the status quo, which is only possible with a strong, healthy, and cohesive local and international community.</div>
            </div>
            <div>
              <div class="head">We free the genius within everyone</div>
              <div>Our success is in connecting diverse skills, experiences, and backgrounds. iTechArt is all about a positive, inclusive, and tolerant attitude, where employees have equal rights and chances to get all voices heard — in the full range. This means addressing all kinds of discrimination, no gender salary gaps, objective assessment criteria, and acceptance of alternative opinions.</div>
              </div>
            </div>
      </div>
    </div>
  </FixedWidthLayout>
)
export default Makes