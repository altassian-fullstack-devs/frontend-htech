import React from "react";

const data ={
      imageUrl : "img/blog-author.jpg",
      name : "Jane Smith",
      content : "Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas."  ,
}
const Author = ({ }) => {
  return (
    <div> 
          <div className="blog-author clearfix">
            <img src={data.imageUrl} className="rounded-circle float-left" alt="" />
            <h4>{data.name}</h4>
            <div className="social-links">
              <a href="https://twitters.com/#"><i className="icofont-twitter"></i></a>
              <a href="https://facebook.com/#"><i className="icofont-facebook"></i></a>
              <a href="https://instagram.com/#"><i className="icofont-instagram"></i></a>
            </div>
            <p>
                    {data.content}
            </p>
          </div>
    </div>     
  )
}
export default Author;
