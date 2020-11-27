
import { Pagination, Tag } from 'antd'

import GalleryItem from "./gallery-item"

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
const tags =[
  {
    name: "Angular",
    value: "angular"
  },
  {
    name: "React",
    value: "react"
  },
  {
    name: "Ruby on Rails",
    value: "ror"
  },
  {
    name: "Python",
    value: "python"
  },
  {
    name: "PHP",
    value: "php"
  },{
    name: "Node",
    datatag : "node"
  },
  {
    name: ".NET",
    value: "dotnet"
  },
  {
    name: "Java",
    value: "java"
  },
  {
    name: "SalesForce",
    value: "sf"
  },
  {
    name: "Mobile",
    value: "mobile"
  },
  {
    name: "QA and Testing",
    value: "qa"
  },
  {
    name: "React Native",
    value: "react native"
  }
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
              {tags.map((tag, idx)=> (
                <Tag key={`tag-${idx}`}>
                  {tag.name}
                </Tag>
              ))}
            </div>
            <div id="blog" style={{minHeight:"99px"}}>
              <div className="content flexbox">
                {gallery_data.map((gallery, idx) => (
                  <GalleryItem  {...gallery} key={"gallery" + idx} />
                ))}     
              </div> 
              <div className="paging">
                <Pagination 
                  showSizeChanger={false}
                  // size='small'
                  onChange={onchange}
                  total={80}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default  Gallery 