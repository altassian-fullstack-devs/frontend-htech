import React from "react";


const Category = ({ name , number}) => {
  return (
    <div> 
       <li><a href="#">{name}<span>({number})</span></a></li>
    </div>     
  )
}
export default Category;
