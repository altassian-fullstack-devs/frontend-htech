import React from "react";
import Category from './category.js'
import RecentPost from "./recent-post.js";
import Tag from "./tag.js"

const category_data=[
  {
    name: "General",
    number: "4",
  },{
    name: "Lifestyle",
    number: "12",
  },{
    name: "Travel",
    number: "5",
  },{
    name: "Design",
    number: "2",
  },{
    name: "Creative",
    number: "8",
  },{
    name: "Educaion",
    number: "14",
  },
  
]
const post_data=[
  {
      imageUrl : "img/business-1.jpg",
      name : "Nihil blanditiis at in nihil autem",
      date: "Jan 1, 2020",
    },{
      imageUrl : "img/business-2.jpg",
      name : "Quidem autem et impedit",
      date: "Jan 3, 2020",
    },{
      imageUrl : "img/business-3.jpg",
      name : "Id quia et et ut maxime similique occaecati ut",
      date: "Feb 4, 2020",
    },{
      imageUrl : "img/business-4.jpg",
      name : "Laborum corporis quo dara net para",
      date: "Jan 4, 2020",
    },{
      imageUrl : "img/business-5.jpg",
      name : "Et dolores corrupti quae illo quod dolor",
      date: "Jan 1, 2020",
    },
]
const tag_data = [
  {
      name : "App",
  },{
    name : "IT",
  },{
  name : "Business",
  },{
    name : "Business",
  },{
    name : "Mac",
  },{
    name : "Design",
  },{
    name : "Office",
  },{
    name : "Creative",
  },{
    name : "Studio",
  },{
    name : "Smart",
  },{
    name : "Tips",
  },{
    name : "Marketing",
  },
]
const SideBar = ({ }) => {
  return (
    <div> 
        <div className="sidebar">
    
          <h3 className="sidebar-title">Search</h3>
          <div className="sidebar-item search-form">
            <form action="">
              <input type="text"/>
              <button type="submit"><i className="icofont-search"></i></button>
            </form>
          </div>

          <h3 className="sidebar-title">Categories</h3>
          <div className="sidebar-item categories">
            <ul>
              {category_data.map((category, idx) => (
                    <Category active={(idx==0)} key={"category" + idx} {...category}/>
              ))}
            </ul>
          </div>
            
          <h3 className="sidebar-title">Recent Posts</h3>
          <div className="sidebar-item recent-posts">
              {post_data.map((post, idx) => (
                        <RecentPost active={(idx==0)} key={"post" + idx} {...post}/>
                  ))}
          </div>

          <h3 className="sidebar-title">Tags</h3>
          <div className="sidebar-item tags">
            <ul>
              {tag_data.map((tag, idx) => (
                          <Tag active={(idx==0)} key={"tag" + idx} {...tag}/>
                    ))}
            </ul>

          </div>

        </div>
    </div>     
  )
}
export default SideBar;
