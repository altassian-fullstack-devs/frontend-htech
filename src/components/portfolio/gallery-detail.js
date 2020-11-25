import HeaderBlock from "./element/header-block"
import RightBlcok from "./element/right-block"
import LeftBlock from "./element/left-block"

const GalleryDetail = ({}) =>{
  return (
    <main>
      <div className="project page">
        <div className="blue_header" style={{backgroundColor : "#2557f5"}}>
            <span>Bevi / Food and Beverage</span>
                <img alt="bevi-02" src={ require('assets/images/portfolio/portfolio-detail/bevi-02.original.format-png.png').default} />
                
        </div>
        <div className="content">
            <HeaderBlock/>
            <RightBlcok/>
            <LeftBlock />
        </div>
      </div>
    </main>
  )
}

export default GalleryDetail



