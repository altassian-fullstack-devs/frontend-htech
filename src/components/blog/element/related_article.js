import react from 'react'
import BlogElement from './blog-element'
const datail_data =[
  {
    imgUrl : "img/blog/detail/post_Time_to_celebrate-_iTechArt_listed_in_the.width-500.png",
    title : "Time to celebrate: iTechArt listed in the Global Outsourcing 100®",
    content : "",
    date : "23 Feb 2020",
    view : "1448",
  },
  {
    imgUrl : "img/blog/detail/pythons_vs_julia.width-500.png",
    title : "Python or Julia for data science: Which one works best?",
    content : "",
    date : "10 Nov 2020 ",
    view : "690",
  },
  {
    imgUrl : "img/blog/detail/7-wastes-to-eliminate-in-startups.width-500.jpg",
    title : "7 Wastes to Eliminate in Your Startup",
    content : "",
    date : "27 Nov 2017 ",
    view : "1787",
  },
]
const RelatedArticle = ({}) => {

  return (
    <div className="container-800">
      <div className="related-posts related-articles mobile-hidden">
        <div className="line">
          <span>Related</span> articles 
        </div>        
        <div className="flexbox">
          {datail_data.map((datail, idx) => (
              <BlogElement active={(idx==0)} key={"datail" + idx} {...datail}/>
          ))}
        </div>
      </div>
    </div>
						
  )
}

export default  RelatedArticle 