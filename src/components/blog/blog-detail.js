import ArticleBody from './element/article-body'
import RelatedArticle from './element/related_article'
import Sidebar from "./element/sidebar"
import Contact from "./element/contact"

const BlogDetail = ({}) =>{
  return (
    <main>
      <div className="drawer-overlay hidden" style={{marginTop:"50px"}}></div>
      <div className="blog-cost page">
        <article className="vertical-slider-item">
          <div className="container-800 container-relative">
            <Sidebar />
            <ArticleBody/>
          </div>
        </article>
        <RelatedArticle />
        <Contact />
      </div>
    </main>
  )
}

export default BlogDetail