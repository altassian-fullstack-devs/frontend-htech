import { ArticleBody, RelatedArticle, Sidebar, Contact } from "./element"

const BlogDetail = ({}) =>{
  return (
    <div className="page-blog">
      <div className="drawer-overlay hidden" style={{marginTop:"50px"}}></div>
      <div className="blog-post page">
        <article className="vertical-slider-item">
          <div className="container-800 container-relative">
            <Sidebar />
            <ArticleBody/>
          </div>
        </article>
        <RelatedArticle />
        <Contact />
      </div>
    </div>
  )
}

export default BlogDetail