import react from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'

const BlogElement = ({imgUrl, title, content, date, view}) => {

  return (
    <div className="blog-post" data-id="1131">
        <div className="image">
          {/* <a href=""> */}
          <a>
            <Link to={PUBLIC_PATHS.BLOGDETAIL} />
            <img alt="img"  src={imgUrl} />
          </a>
        </div>
        <div className="related-post-header">
            <a href="#">{title}</a>
        </div>
        <div className="content">
        {content}
        </div>
        <div className="info">
          <div className="wrapper">
          {date}
          </div>
          <span className="viewed">
            <img src="/assets/images/blog/eye-light-grey_.png" />{view} 
          </span>
        </div>
    </div>
  )
}

export default  BlogElement 