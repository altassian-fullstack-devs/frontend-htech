import React from "react";
import BlogItem from "./blog-item.js";

const blogitems = [
  {
    imageURL: "img/blog-1.jpg",
    title:    "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
    name :    "John Doe",
    date:     "Jan 1, 2020",
    content:  "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui."
  },{
    imageURL: "img/blog-2.jpg",
    title:    "Nisi magni odit consequatur autem nulla dolorem",
    name :    "John Doe",
    date:     "Jan 1, 2020",
    content:  "Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias."
  },{
    imageURL: "img/blog-3.jpg",
    title:    "Welcome to Sailor",
    name :    "John Doe",
    date:     "Jan 1, 2020",
    content:  "Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis tara kero pakla metaruna nedore stan."
  },{
    imageURL: "img/blog-4.jpg",
    title:    "Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.",
    name :    "John Doe",
    date:     "Jan 1, 2020",
    content:  "Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui."
  },{
    imageURL: "img/blog-5.jpg",
    title:    "Blanditiis dignissimos deleniti. Rerum iste et.",
    name :    "John Doe",
    date:     "Jan 1, 2020",
    content:  "Quidem et eum explicabo quia illo numquam nostrum corrupti provident. Quia aspernatur et et facere. Quisquam maiores natus nihil incidunt ipsum est optio eum maxime. Dignissimos vitae explicabo. Corrupti esse sed a a. Laborum optio reprehenderit quia dena per."
  },{
    imageURL: "img/blog-6.jpg",
    title:    "Debitis cupiditate saepe ex quam aut id. Consequatur dignissimos et id id.",
    name :    "John Doe",
    date:     "Jan 1, 2020",
    content:  "Modi dolor et placeat ut iure ad. Qui perferendis fugit quo et cumque facilis et debitis rerum. Repellendus animi qui eos. Unde perferendis et tempora Ratione porro omnis magn delata sera marto ned."
  },
   
]
const Blogs = ({  }) => {
  
  return (
    <div>
    <div>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Blog</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ol>
        </div>
      </div>
    </section>
          <section id="blog" className="blog" >
          <div className="container">
            <div className="row">
                  {blogitems.map((blog, idx) => (
                      <BlogItem active={(idx==0)} key={"blogitem" + idx} {...blog}/>
                  ))}
        
            </div>
            <div className="blog-pagination" data-aos="fade-up">
              <ul className="justify-content-center">
                <li className="disabled"><i className="icofont-rounded-left"></i></li>
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="icofont-rounded-right"></i></a></li>
              </ul>
            </div>
    
          </div>
        </section>
        </div>
      </div>
  )
}
export default Blogs;
