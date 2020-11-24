import react from 'react'

const BlogElement = ({imgUrl, title, content, date, view}) => {

  return (
    <div className="blog-post" data-id="1131">
        <div className="image">
          <a href="#">
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
            <img src="img/blog/eye-light-grey_.png" />{view} 
          </span>
        </div>
    </div>
  )
}

export default  BlogElement 