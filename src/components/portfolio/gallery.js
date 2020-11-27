
import TagElement from "../common/tag-element"
import GalleryItem from "./gallery-item"
import { Pagination } from 'antd'

const gallery_data = [
  {
    dataid: "694",
    dataorder: "1",
    imgUrl: require('assets/images/portfolio/classpass_case_hr.png').default,
    projectname: "ClassPass",
    tags: ["Wellness", "Fitness"],
  },
  {
    dataid: "757",
    dataorder: "2",
    imgUrl: require('assets/images/portfolio/freshly_case.png').default,
    projectname: "Freshly",
    tags: ["FoodTech", "Ecomerce"],
  },
  {
    dataid: "698",
    dataorder: "3",
    imgUrl: require('assets/images/portfolio/forex_case.png').default,
    projectname: "Forex.com",
    tags: ["Forex Trading", "FinTech"],
  },
  {
    dataid: "953",
    dataorder: "4",
    imgUrl: require('assets/images/portfolio/bevi_case.png').default,
    projectname: "Bevi",
    tags: ["Food and Beverage"],
  },
  {
    dataid: "749",
    dataorder: "5",
    imgUrl: require('assets/images/portfolio/blackboard_case.png').default,
    projectname: "Blackboard",
    tags: ["EdTech","Elearning"],
  },
  {
    dataid: "991",
    dataorder: "6",
    imgUrl: require('assets/images/portfolio/rallyrd_case_hr.png').default,
    projectname: "Rally Rd.",
    tags: ["Automative","FinTech"],
  },
]
const tag_data =[
  {
    datatag : "angular",
    tagname : "Angular",
  },{
    datatag : "react",
    tagname : "React",
  },{
    datatag : "ror",
    tagname : "Ruby on Rails",
  },{
    datatag : "python",
    tagname : "Python",
  },{
    datatag : "php",
    tagname : "PHP",
  },{
    datatag : "node",
    tagname : "Node",
  },{
    datatag : "dotnet",
    tagname : ".NET",
  },{
    datatag : "java",
    tagname : "Java",
  },{
    datatag : "sf",
    tagname : "SalesForce",
  },{
    datatag : "mobile",
    tagname : "Mobile",
  },{
    datatag : "qa",
    tagname : "QA and Testing",
  },{
    datatag : "react native",
    tagname : "React Native",
  },
 
]
const Gallery = ({ }) => {

  return (
    <main>
      <div className="projects">
        <picture>
          <img alt="img" src={require('assets/images/portfolio/our_works_header.png').default} />
        </picture>
        <div className="our_works_header">
          <h1>Our works</h1>
          <h3>
            We don’t have to pick our best works as we give our best shot every single time. Here are just some of our stellar projects to help inspire your own.
          </h3>
        </div>
          <div className="projects flexbox">
            <div className="tags">
              <ul className=" projects-filter">
                {tag_data.map((tag,idx)=> (
                      <TagElement {...tag}  key={'tag-element' + idx} />
                  ))}
              </ul>
            </div>
            <div id="blog" style={{minHeight:"99px"}}>
              <div className="content flexbox">
                {gallery_data.map((gallery, idx) => (
                          <GalleryItem  {...gallery} key={"gallery" + idx} />
                      ))}     
              </div> 
              <div className="paging">
                <Pagination onChange={onchange} total={50} />
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default  Gallery 