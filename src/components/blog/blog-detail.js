import { ArticleBody, RelatedArticle, Sidebar, Contact } from "./element"

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