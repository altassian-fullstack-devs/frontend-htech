import react from 'react'

const SocialShare = ({}) => {

  return (
    <div className="social-share">
      <div>
        <span className="button">
          <a href="" target="_blank" rel="nofollow">
            <img src={require("assets/images/blog/detail/facebook_grey.png").default} />
          </a>
        </span> 
        <span className="button">
          <a href="" target="_blank" rel="nofollow">
            <img src={require("assets/images/blog/detail/in_grey.png").default} />
          </a>
        </span> 
        <span className="button small-padding">
          <a href="" target="_blank" rel="nofollow">
            <img src={require("assets/images/blog/detail/twitter_grey.png").default} />
          </a>
        </span> 
        <span className="yey">
          <img src={require("assets/images/blog/detail/eye_red.png").default}/>&nbsp;798</span>
      </div>
  </div>
  )
}

export default  SocialShare 