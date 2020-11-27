import BlogElement from "./element/blog-element"

import { Pagination, Tag } from 'antd'

const blog_data =[
  {
    imgUrl : require('assets/images/blog/pythons_vs_julia.width-500.png').default,
    title : "Python or Julia for data science : Which one works best?",
    content : "  Both Python and Julia are incredible tools that are sure to meet the needs and expectations of any data scientist. However, let's dig deeper and learn which one, Julia vs. Python, is better for data science?",
    date : "10 Nov 2020",
    view : "647",
  },
  {
    imgUrl : require('assets/images/blog/automation_cover.width-500.png').default,
    title : "Automating automation: How technology is changing the business world",
    content : " Technology automation has already disrupted the way we do business, and this process isn’t anywhere close to complete. Let's learn more about the future of automation.",
    date : "10 Nov 2020",
    view : "764",
  },
  {
    imgUrl : require('assets/images/blog/google_cloud_for_startup_growth_cover.width-500.png').default,
    title : "Google Cloud Platform accelerates startup business growth (for free!)",
    content : " Let's find out how exactly can cloud solutions accelerate the business growth of early-stage companies.",
    date : "28 Oct 2020",
    view : "920",
  },
  {
    imgUrl : require("assets/images/blog/fintech_cloud_cover.width-500.jpg").default,
    title : "Why build fintech in the cloud now",
    content : " Cloud computing in financial services is driving industry change faster than ever. It opens up the playing field, democratizes powerful solutions, and accelerates innovation in a positive feedback loop.",
    date : "19 Oct 2020",
    view : "1256",
  },
  {
    imgUrl : require('assets/images/blog/google_cloud_partner_cover.width-500.png').default,
    title : "It's official: iTechArt is now a Google Cloud Service partner",
    content : " iTechArt proudly joins Google Cloud Partner Program to expand our cloud offering and empower our clients to reach new heights of business growth",
    date : "16 Oct 2020",
    view : "1352",
  },
  {
    imgUrl : require('assets/images/blog/Salesforce_sharing_cover.width-500.png').default,
    title : "Understanding Salesforce Sharing rules",
    content : "Salesforce has revolutionized the way that businesses and organizations keep track of their clients and customers. Here we're explaining how to enable sharing access to users within various roles and territories",
    date : "09 Oct 2020",
    view : "1110",
  },
]

const tags = [
  {
    name: 'Insights',
    value: 'insights'
  },
  {
    name: 'Community',
    value: 'community'
  },
  {
    name: 'Success Stories',
    value: 'success-stories'
  },
  {
    name: 'Event',
    value: 'event'
  }
]

const BlogFirst = ({}) => {

  return (
    <main>
      <div className="blog">
        <h1>iTech blog</h1>
        <div className="projects flexbox">
          <div className="tags js-blog-tags">
            {tags.map((tag, idx)=> (
              <Tag key={`tag-${idx}`}>
                {tag.name}
              </Tag>
            ))}
          </div>
          <div id="blog" style={{minHeight: 99}}>
            <div className="content flexbox">
              {blog_data.map( (blog, idx) => (
                <BlogElement  {...blog} key={`blog-element${idx}`} />
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


export default BlogFirst;



