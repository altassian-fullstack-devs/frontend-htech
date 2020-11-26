const BlogElement = ({imgUrl, title, content, date, view}) => {

  return (
    <div className= "blog-post">
      <div className= "image">
        <a href= "/blog-detail">
          <img alt= "img"  src={imgUrl} />
        </a>
      </div>
      <div className="related-post-header">
        <a href="#"> {title} </a>
      </div>
      <div className="content">
        {content}
      </div>
      <div className="info">
        <div className="wrapper">
          {date}
        </div>
        <span className="viewed">
          <img src={require('assets/images/blog/eye-light-grey_.png').default} />{view} 
        </span>
      </div>
    </div>
  )
}

export default  BlogElement 