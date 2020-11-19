import React from "react";
import {withRouter} from 'react-router';

const BlogItem = ({ imageURL,title,name,date,content }) => {
  
  return (
      <div className="col-lg-4  col-md-6 d-flex align-items-stretch" data-aos="fade-up">
          <article className="entry">
              <div className="entry-img">
                  <img src={imageURL} alt="" className="img-fluid" />
              </div> 
              <h2 className="entry-title">
              <a href="#">{title}</a>
              </h2>
              <div className="entry-meta">
                  <ul>
              <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="blog-single.html">{name}</a></li>
              <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{date}</time></a></li>
                  </ul>
              </div>
              <div className="entry-content">
                  <p>
                  {content}
                  </p>
                  <div className="read-more">
                  <a  href="/blog-detail">Read More</a>              
                  </div>
              </div>
            </article>
      </div>     
  )
}
export default BlogItem;
//export default withRouter(BlogItem)