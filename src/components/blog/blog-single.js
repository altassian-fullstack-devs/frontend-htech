import React from "react";
import { Article, Author } from './article'
import { Comment } from './comment'
import { SideBar } from './side-bar'

const BlogSingle = ({ }) => {
  return (
    <div> 
      <section id="breadcrumbs" class="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Dolorum optio tempore voluptas dignissimos</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li><a href="/blog">Blog</a></li>
          </ol>
        </div>
      </div>
    </section>
      <section id="blog" className="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 entries">
                <Article />
                <Author />
                <Comment />
              </div>
              <div className="col-lg-4">
                <SideBar></SideBar>
              </div>
            </div>
          </div>
      </section>
    </div>     
  )
}
export default BlogSingle;
