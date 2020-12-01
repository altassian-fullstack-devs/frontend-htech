import react from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FixedWidthLayout } from 'containers/layout';

let data = [
  { 
    pname:'Zefr', 
    link:'https://www.itechart.com/our-works/zefr/',
    text:'AdTech Media', 
    alt:'zefr_case_04', 
    img:'zefr_case_04.original.format-png.png' 
  },
  { 
    pname:'Freshly', 
    link:'https://www.itechart.com/our-works/freshly/', 
    text:'FoodTech Ecommerce', 
    alt:'freshly_work-05', 
    img:'freshly_work-05.original.format-png.png' 
  },
  {
    pname:'ClassPass', 
    link:'https://www.itechart.com/our-works/classpass/', 
    text:'Wellness Fitness', 
    alt:'classpass_case_works-06', 
    img:'classpass_case_works-06.original.format-png.png' },
]
const FeatureItem = ({link, pname, text, alt, img}) => (
  <div className='feature-item'>
    <span class="text">
      <a href={`${link}`}>
      <span class="project-name">{pname}</span> <span class="project-tags">
          <span>{text}</span>
          <span class="tags_arrow">
            <img alt={alt} src={require(`assets/images/about/red_arrow.png`).default}/>
          </span>
        </span>
      </a>
    </span>

    <picture>
        <img alt={alt} src={require(`assets/images/about/${img}`).default}/>
    </picture>
  </div>
)

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  slickPlay: true,
  centerMode: true,
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

const Feature = ({}) => (
  <FixedWidthLayout className='data featured-works'>
    <h2 class="line">
      <span>Featured</span>
      works
    </h2>
    <Slider {...settings} className='feature-slider'>
      {data.map((item, index) => (<FeatureItem key={index} {...item} ></FeatureItem>))}
    </Slider>
  </FixedWidthLayout>
)
export default Feature