import react from 'react'

const Sidebar = ({}) => {

  return (
      <div className="blog-post-categories blog-subscribe">
        <form action="" className="blog-post-search" method="get" name="fast_search">
              <input  id="search_blog" name="s_query" placeholder="Search..." type="text" />
              <input name="in_blog" type="hidden" value="1"/>
        </form>
        <span className="categories-header">CATEGORIES</span>
        <div>
              <a href="https://www.itechart.com/blog/?tags=insights">Insights</a> 
              <a href="https://www.itechart.com/blog/?tags=community">Community</a> 
              <a href="https://www.itechart.com/blog/?tags=events">Events</a> 
              <a href="https://www.itechart.com/blog/?tags=success_stories">Success stories</a>
          </div>
          <span className="subscribe">
              <div>
                <span>Never miss a post!</span>
              </div>
              <span className="input-text">
                <input id="sidebar_subscribe_email" name="email" placeholder="Email*" type="text"/>
                <label className="sidebar_subscribe_email">
                  <img alt="arrow" src={require("assets/images/blog/detail/red_arrow.png").default} />
                </label>
              </span>
            </span>
      </div>
  )
}

export default  Sidebar 