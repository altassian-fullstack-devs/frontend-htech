import react from 'react'

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
  <div>
    <span class="text">
      <a href={`${link}`}>
      <span class="project-name">{pname}</span> <span class="project-tags">
          <span>{text}</span>
          <span>
          </span>
          <span class="tags_arrow">
            <img alt={alt} src={require(`assets/images/about/${img}`).default}/>
          </span>
        </span>
      </a>
    </span>

    <picture>
        <img alt={alt} src={require(`assets/images/about/${img}`).default}/>
    </picture>
  </div>
)
const Feature = ({}) => (
  <span className='data featured-works'>
    <h2 class="line">
      <span>Featured</span>
      works</h2>
  <div className='tiles'>
    {data.map((item, index) => (<FeatureItem key={index} {...item} ></FeatureItem>))}
    
  </div>
  </span>
)
export default Feature