import react from 'react'
import GalleryItem from "./gallery-item"

const gallery_data = [
  {
    dataid: "694",
    dataorder: "1",
    imgUrl: "assets/images/portfolio/classpass_case_hr.png",
    projectname: "ClassPass",
    tags: ["Wellness", "Fitness"],
  },
  {
    dataid: "757",
    dataorder: "2",
    imgUrl: "assets/images/portfolio/freshly_case.png",
    projectname: "Freshly",
    tags: ["FoodTech", "Ecomerce"],
  },
  {
    dataid: "698",
    dataorder: "3",
    imgUrl: "assets/images/portfolio/forex_case.png",
    projectname: "Forex.com",
    tags: ["Forex Trading", "FinTech"],
  },
  {
    dataid: "953",
    dataorder: "4",
    imgUrl: "assets/images/portfolio/bevi_case.png",
    projectname: "Bevi",
    tags: ["Food and Beverage"],
  },
  {
    dataid: "749",
    dataorder: "5",
    imgUrl: "assets/images/portfolio/blackboard_case.png",
    projectname: "Blackboard",
    tags: ["EdTech","Elearning"],
  },
  {
    dataid: "991",
    dataorder: "6",
    imgUrl: "assets/images/portfolio/rallyrd_case_hr.png",
    projectname: "Rally Rd.",
    tags: ["Automative","FinTech"],
  },
]
const Gallery = ({ }) => {

  return (
    <main>
    <div className="projects">
      <img alt="img" src="/assets/images/portfolio/our_works_header.png" />
        <div className="our_works_header">
          <h1>Our works</h1>
          <h3>
            We don’t have to pick our best works as we give our best shot every single time. Here are just some of our stellar projects to help inspire your own.
          </h3>
        </div>
        <div className="projects flexbox">
          <div className="tags">
            <ul className=" projects-filter">
            <li data-tag="angular">
              <div>Angular</div>
            </li>
            <li data-tag="react">
              <div>React</div>
            </li>
            <li data-tag="ror">
              <div>Ruby on Rails</div>
            </li>
            <li data-tag="python">
              <div>Python</div>
            </li>
            <li data-tag="php">
              <div>PHP</div>
            </li>
            <li data-tag="node">
              <div>Node</div>
            </li>
            <li data-tag="dotnet">
              <div>.NET</div>
            </li>
            <li data-tag="java">
              <div>Java</div>
            </li>
            <li data-tag="sf">
              <div>Salesforce</div>
            </li>
            <li data-tag="mobile">
              <div>Mobile</div>
            </li>
            <li data-tag="qa">
              <div>QA and Testing</div>
            </li>
            <li data-tag="react-native">
              <div>React Native</div>
            </li>  
              {/*<ul> <li data-tag="insights">
                <div>Insights</div>
              </li>
              <li data-tag="community">
                <div>Community</div>
              </li>
              <li data-tag="success_stories">
                <div>Success Stories</div>
              </li>
              <li data-tag="event">
                <div>Events</div>
              </li> */}
                
            </ul>
          </div>
          <div id="blog" style={{minHeight:"99px"}}>
              <div className="content flexbox">
              {gallery_data.map((gallery, idx) => (
                <GalleryItem active={(idx==0)} key={"gallery" + idx} {...gallery}/>
              ))}     
              </div>
              {/* <Pagenation></Pagenation> */}
              <div className="paging">
                <span className="active" data-page="1">1</span>
                  <a data-page="2" href="">2</a>
                  <a data-page="3" href="">3</a>
                  <a data-page="4" href="">4</a>
                  <a data-page="5" href="">5</a>
                  <a data-page="6" href="">6</a>
                  <a className="next" data-page="7" href=""></a>
              </div>
              </div>
            </div>
        </div>
    </main>
  )
}

export default  Gallery 