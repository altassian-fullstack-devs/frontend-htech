import react from 'react'

let data = [
  {img: 'img1206r13.original.png', alt:'aiop'},
  {img: 'img1206r12.original.png', alt:'ft'},
  {img: 'img1206r11.original.png', alt:'inc5000'},
  {img: 'img1206r10.original.png', alt:'500technology'},
  {img: 'img1206r9.original.png', alt:'stevies'},
]
const TalentItem = ({img, alt}) => (
  <span class="item">
    <img alt={alt} class="richtext-image left" height="70" src={ require(`assets/images/about/${img}`).default}/>
  </span>
)
const TopTalent = ({}) => (
  <span class="black recognized">
    <span class="data container">
      <h2 class="left">A recognized leader for top talent</h2>
      <p class="left">We think the only way to do great work is to love what you do. This way, continuous recognition for bold leadership and setting new standards feels even&nbsp;better.</p>
      <span class="flexbox small-margin centered basis-30">
        {data.map((item, index) => (<TalentItem key={index} {...item} ></TalentItem>))}
      </span>
    </span>
  </span>
)
export default TopTalent