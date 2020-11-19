import React from "react";
import ReplyBox from "./reply-box";


const CommentForm = ({ imageUrl, name , date, content}) => {
  return (
    <div> 
      <img src={imageUrl} className="comment-img  float-left" alt=""/>
      <h5><a href="">{name}</a> <a href="#" className="reply"><i className="icofont-reply"></i> Reply</a></h5>
  <time datetime="2020-01-01">{date}</time>
      <p>
        {content}
      </p>              
    </div>

  )
}
export default CommentForm;
