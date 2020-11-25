import react from "react"

const GalleryItem = ({imgUrl,projectname}) =>{
  return (
    <div className="blog-post project-margin">
        <div className="image">
          <a href="/gallery-detail">
            <img alt="img"  src={imgUrl} />
          </a>
        </div>
        <div className="related-post-header">
            <a href="/gallery-datail">{projectname}</a>
        </div>
        {/* <div className="content">
        {content}
        </div> */}
      </div>
  )
}

export default GalleryItem




/**
 <div className="project" data-id="694" data-order="1" style="opacity: 1; height: 277px; min-height: 277px;">
<a href="https://www.itechart.com/our-works/classpass/">
  <div className="image">
    <img alt="ClassPass" data-default-src="" src="img/portfolio/classpass_case_hr.png"/>
      <div className="project-description always-tile">
        <div className="content">
          <div className="wrapper" data-transform="118" style="transform: translateY(118px);">
            <div className="project-name">ClassPass</div>
            <ul className="tag-list">
              <li>Wellness</li>
              <li>Fitness</li>
            </ul>
            <div className="go-to">
              <div>Go to case
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</a>
</div>

 */