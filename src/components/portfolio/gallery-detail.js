import { HeaderBlock, RightBlock, LeftBlock } from "./element"

const GalleryDetail = ({}) =>{
  return (
    <div className="page-portfolio">
      <div className="project page">
        <div className="blue_header" style={{backgroundColor : "#2557f5"}}>
          <span>Bevi / Food and Beverage</span>
          <img alt="bevi-02" src={ require('assets/images/portfolio/portfolio-detail/bevi-02.original.format-png.png').default} />
        </div>
        <div className="content">
          <HeaderBlock/>
          <RightBlock/>
          <LeftBlock />
        </div>
      </div>
    </div>
  )
}

export default GalleryDetail



