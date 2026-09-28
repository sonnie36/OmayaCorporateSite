import React from 'react'
import './Blog.css'

const Blog = () => {
    const otherArticles=[
        {
            id:1,
            img:'https://res.cloudinary.com/dam1sxczj/image/upload/v1726500200/Rectangle_21_eextf0.png',
            title:'It uses a dictionary of overcombined handful.',
            desc:'It has survived not only five centuries type setting remaining essentially was the release more recent.'
        },
        {
            id:2,
            img:'https://res.cloudinary.com/dam1sxczj/image/upload/v1726500200/Rectangle_21_eextf0.png',
            title:'It uses a dictionary of overcombined handful.',
            desc:'It has survived not only five centuries type setting remaining essentially was the release more recent.'
        },
        {
            id:3,
            img:'https://res.cloudinary.com/dam1sxczj/image/upload/v1726500200/Rectangle_21_eextf0.png',
            title:'It uses a dictionary of overcombined handful.',
            desc:'It has survived not only five centuries type setting remaining essentially was the release more recent.'
        },
        {
            id:4,
            img:'https://res.cloudinary.com/dam1sxczj/image/upload/v1726500200/Rectangle_21_eextf0.png',
            title:'It uses a dictionary of overcombined handful.',
            desc:'It has survived not only five centuries type setting remaining essentially was the release more recent.'
        },
    ]
  return (
    <section className="blog-section mb-14">
      <div className="bigDiamond"></div>
      <div className="smallD"></div>
         <div className='blog-header1'>
          <span className="line2"></span>
          <span className="blog-title"> Blog</span>
        </div>
      <div className="blog-header">        
        <h3 >Some Latest Articles From <br /> Our News Feed.</h3>
      </div>
      <div className="blog-content">
      <div className="featured-article">
        <img
            src="https://res.cloudinary.com/dam1sxczj/image/upload/v1726500201/Rectangle_19_xrojrx.png"
           alt="Featured Article"
          />
        <div className="content-overlay">
          <div className="bcontent">
            <h2>It Uses A Dictionary Of Over Combined Handful.</h2>
            <p>It Has Survived Not Only Five Centuries Typesetting Remaining Essentially Was The Release More Recent.</p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
</div>

        <div className="otherArticles">
            {
                otherArticles.map(blog=>(
                    <div className="blog" key={blog.id}>
                    <div className="info">
                        <div className="imgDiv">
                            <img src={blog.img} alt="Artical Thumbnail" className='' />
                        </div>                    
                        <div className="article-info">
                            <h3 style={{fontWeight:"bold"}}>{blog.title}</h3>
                            <p>{blog.desc}</p>
                            <button className="read-more-btn mt-6">
                                <span>&#8594;</span>
                            </button>
                        </div>
                        </div>

                    </div>
                  
                )

                
                
                )
            }
        </div>
      </div>
    </section>
  )
}

export default Blog