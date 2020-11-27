import react from 'react'
import { FixedWidthLayout } from 'containers/layout';
let data = [
  {img: 'img1206r13.original.png', alt:'aiop'},
  {img: 'img1206r12.original.png', alt:'ft'},
  {img: 'img1206r11.original.png', alt:'inc5000'},
  {img: 'img1206r10.original.png', alt:'500technology'},
  {img: 'img1206r9.original.png', alt:'stevies'},
]
const TalentItem = ({img, alt}) => (
  <span className="item">
    <img alt={alt} className="richtext-image left" height="70" src={ require(`assets/images/about/${img}`).default}/>
  </span>
)

const TopTalent = ({}) => (
  <div className="black recognized">
    <FixedWidthLayout className="data">
      <h2 className="left">A recognized leader for top talent</h2>
      <p className="left">
        We think the only way to do great work is to love what you do. This way, continuous recognition for bold leadership and setting new standards feels even&nbsp;better.
      </p>
      <span className="flexbox small-margin centered basis-30">
        {data.map((item, index) => (<TalentItem key={index} {...item} ></TalentItem>))}
      </span>
    </FixedWidthLayout>
  </div>
)
export default TopTalent