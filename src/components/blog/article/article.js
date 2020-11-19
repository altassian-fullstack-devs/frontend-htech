import React from "react";

const article_info=
{
  title : "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
  authorname : "John Doe",
  date : "Jan 1, 2020",
  ccount: "12",
}
const Article = ({ }) => {
  return (
    <div> 
        <article className="entry entry-single">
            <div className="entry-img">
              <img src="img/blog-1.jpg" alt="" className="img-fluid"/>
            </div>
            <h2 className="entry-title">
              <a href="blog-single.html">{article_info.title}</a>
            </h2> 
            <div className="entry-meta">
              <ul>
                <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="blog-single.html">{article_info.authorname}</a></li>
                <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">{article_info.date}</time></a></li>
                <li className="d-flex align-items-center"><i className="icofont-comment"></i> <a href="blog-single.html">{article_info.ccount} Comments</a></li>
              </ul>
            </div>
            <div className="entry-content">
              <p>
                Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
              </p>
              <p>
                Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
              </p>
              <blockquote>
                <i className="icofont-quote-left quote-left"></i>
                <p>
                  Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
                </p>
                <i className="las la-quote-right quote-right"></i>
                <i className="icofont-quote-right quote-right"></i>
              </blockquote>
              <p>
                Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
              </p>

              <h3>Et quae iure vel ut odit alias.</h3>
              <p>
                Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam voluptatem voluptatem accusamus mollitia aut atque aut.
              </p>
              <img src="img/blog-inside-post.jpg" className="img-fluid" alt=""/>

              <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
              <p>
                Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
              </p>
              <p>
                Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.
              </p>

            </div>
            <div className="entry-footer clearfix">
              <div className="float-left">
                <i className="icofont-folder"></i>
                <ul className="cats">
                  <li><a href="#">Business</a></li>
                </ul>

                <i className="icofont-tags"></i>
                <ul className="tags">
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
                </ul>
              </div>
              <div className="float-right share">
                <a href="" title="Share on Twitter"><i className="icofont-twitter"></i></a>
                <a href="" title="Share on Facebook"><i className="icofont-facebook"></i></a>
                <a href="" title="Share on Instagram"><i className="icofont-instagram"></i></a>
              </div>

            </div>    
          </article>
    </div>     
  )
}
export default Article;
