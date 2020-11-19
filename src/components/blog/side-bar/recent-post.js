import React from "react";


const RecentPost = ({ imageUrl, name , date}) => {
  return (
    <div> 
        <div className="post-item clearfix">
              <img src={imageUrl} alt=""/>
              <h4><a href="blog-single.html">{name}</a></h4>
              <time datetime="2020-01-01">{date}</time>
        </div>
    </div>     
  )
}
export default RecentPost;
