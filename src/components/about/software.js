import react from 'react'

const SoftwareItem = ({ alt, src }) => (
  <span className="item">
    <img alt={alt} height="50" src={require(`assets/images/about/${src}.png`).default}/>
  </span>
)

let items = [
  {
    alt:'convene',
    src:'convene',
  },
  {
    alt:'zefr',
    src:'zefr',
  },
  {
    alt:'classpass',
    src:'classpass',
  },
  {
    alt:'freshly',
    src:'freshly',
  },
  {
    alt:'bevi',
    src:'bevi',
  },
  {
    alt:'fuze',
    src:'fuze',
  },
  {
    alt:'vestwell',
    src:'vestwell',
  },
  {
    alt:'rocketrip',
    src:'rocketrip',
  },
  {
    alt:'rally',
    src:'rally',
  },
  {
    alt:'loftsmart',
    src:'loftsmart',
  },
]

const Software = () => (
  <span className="black z-index-100 margin-minus-30">
    <span className="container-1200">
      <span className="data">
        <h3 className="thin">
          We’re building software solutions <br/>for 200+ clients right now
        </h3>
        <span className="center margin-bottom-50">
          iTechArt’s startup clients come from the top accelerators like Techstars, 500 Startups, ERA, Dreamit and Y Combinator. We also act as wingmen for mid-sized and large enterprises, such as Forex, Barchart and Blackboard, who seek to extend their&nbsp;in‑house development&nbsp;teams.
        </span> 
        <span className="flexbox small-margin centered basis-18">
          {items.map((item, index) => (<SoftwareItem key={index} {...item} />))}
        </span>
      </span>
    </span>
  </span>
)
export default Software