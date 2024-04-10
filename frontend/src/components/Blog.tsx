// import React from 'react'

const Blog = () => {
  return (
    <section className="blog">
    <div className="container">
      <div className="section-heading section-blog-heading">
        <h2 className="section-heading__title">Blog</h2>
      </div>
      <div className="section-body">
        <div className="post-list">
          <div className="post-item">
            <div className="post-image">
              <a href=''>
                <img src="./img/Rectangle 68.png" alt='' className="post__thumbnail" />
              </a>
            </div>
            <div className="post-info">
              <h3 className="post__title">
                <a href='' className="post__link">THE ULTIMATE SOFA BUYING GUIDE</a>
              </h3>
              <p className="post__excerpt">
                The versatility of our living space is more crucial than ever.
                But buying a sofa might be a difficult undertaking. Your needs
                and the size of your living area will determine everything,
                However, don’t worry, were are here to help you
              </p>
              <a href='' className="post__readmore">Readmore<svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg></a>
            </div>
          </div>
          <div className="post-item">
            <div className="post-image">
              <a href=''>
                <img src="./img/Rectangle 67.png" alt='' className="post__thumbnail" />
              </a>
            </div>
            <div className="post-info">
              <h3 className="post__title">
                <a href='' className="post__link">A BEDROOM MUST HAVE SOME THING LIKE THIS</a>
              </h3>
              <p className="post__excerpt">
                Your level of comfort when geting into and out of bed can be greatly influenced by the bed frame you
                choose. It may significantly affect how want your bedroom to feet and look
              </p>
              <a href='' className="post__readmore">Readmore<svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg></a>
            </div>
          </div>
          <div className="post-item">
            <div className="post-image">
              <a href=''>
                <img src="./img/Rectangle 69.png" alt='' className="post__thumbnail" />
              </a>
            </div>
            <div className="post-info">
              <h3 className="post__title">
                <a href='' className="post__link">WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</a>
              </h3>
              <p className="post__excerpt">
                People do a lot of research to make sure they purchase the ideal
                televisoin. And like the rest of us, you want to keep that gorgeous flat srceen in your living or
                bedroom on a table or stand
              </p>
              <a href='' className="post__readmore">Readmore<svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Blog