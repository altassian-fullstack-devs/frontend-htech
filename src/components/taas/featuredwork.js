import React from 'react'
const urls=[
  {
    title : 'Huimang Media',
    semititle: 'AdTech Media',
    imageURL : 'img/team-as-a-service/featured-work/1.png'
  },
  {
    title : 'Freshly',
    semititle: 'FoodTech Ecommerce',
    imageURL : 'img/team-as-a-service/featured-work/2.png'
  },
  {
    title : 'Class Pass',
    semititle: 'Wellness Fitness',
    imageURL : 'img/team-as-a-service/featured-work/3.png'
  }
]
const Cards =({title, semititle, imageURL}) =>{
  return(
    <>
    <span className='text'>
    <a href=''>
      <span className='project-name'>{title}</span>
      <span className='project-tags'>
        <span>{semititle}</span>
      </span>
    </a>
    </span>
    <img alt='not working' src={imageURL}></img>
    </>
  )
}

const FeaturedWork = () => {
  return (
     <>
      <div className='featured-work'>
        <h2><span>Featured</span>works</h2>
        <div className='tiles'>
          {
            urls.map((item,idx)=>(
              <div><Cards {...item}/></div>
            ))
          }
        </div>
      </div>
     </>
  )
}

export default FeaturedWork