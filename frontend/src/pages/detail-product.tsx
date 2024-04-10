// import React from 'react'

import { getProductById } from "@/services/product"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

const DetailProduct = () => {
    const { id } =useParams();
    const {data} =useQuery({
        queryKey: ["PRODUCT_KEY", id],
        queryFn: async () => await getProductById(id as string),
    });
  return (
    <>
<section className="address">
  <div className="container">
    <div className="address-locatinon">
      <div className="address-page-dh">
        <p>Home <strong>&gt;</strong>Shop <strong>&gt;</strong></p>
      </div>
      <div className="address-page-dc">
        <p>Asgaard sofa</p>
      </div>
    </div>
  </div>
</section>
<section className="detail">
  <div className="container">
    <div className="detail-prouct">
      <div className="detail-image">
        <div className="detail-image-left">
          <div className="detail-image-left__sp"> <img src={data?.image} alt="" /></div>
          <div className="detail-image-left__sp"> <img src={data?.image} alt="" /></div>
          <div className="detail-image-left__sp"> <img src={data?.image} alt="" /></div>
          <div className="detail-image-left__sp"> <img src={data?.image} alt="" /></div>
        </div>
        <div className="detail-image-right">
          < img width={500} height={423} src={data?.image} alt="" />
        </div>
      </div>
      {/* chi dôi */}
      <div className="detail-twoblock">
        <div className="detail-text">
          <h3>{data?.name}</h3>
          <p className="detail-text__vd">{data?.price}VNĐ</p>
          <div className="detail-text-customer">
            <div className="detail-text-start">
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
              </svg>
            </div>
            <div className="detail-text-review">
              <p>5 Customer Review</p>
            </div>
          </div>
          <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted
            hero with a well-balanced audio which boasts a clear midrange and extended highs for a
            sound.
          </p>
          <div className="detail-text-size">
            <p className="detail-text__size">size</p>
            <div className="detail-zize-list">
              <div className="detail-size__box">
                <p>L</p>
              </div>
              <div className="detail-size__box">
                <p>XL</p>
              </div>
              <div className="detail-size__box">
                <p>XS</p>
              </div>
            </div>
          </div>
          <div className="detail-text-color">
            <p className="detail-text__size">color</p>
            <div className="detail-color-list">
              <div className="detail-color__box1">
              </div>
              <div className="detail-color__box2">
              </div>
              <div className="detail-color__box3">
              </div>
            </div>
          </div>
          <div className="detail-button-add">
            <div className="detail-button-sl">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <div className="detail-button-lick">
              <p>Add To Cart</p>
            </div>
            <div className="detail-button-th">
              <p>+</p>
              <p>Compare</p>
            </div>
          </div>
        </div>
        {/* chân */}
        <div className="detail-parameter-pro">
          <div className="detail-parameter-left">
            <p>SKU</p>
            <p>Category</p>
            <p>Tags</p>
            <p>Share</p>
          </div>
          <div className="detail-parameter-right">
            <p>: SS001</p>
            <p>: Sofas</p>
            <p>: Sofa, Chair, Home, Shop</p>
            <p>:  <img src="./img/face.svg" alt="" />
              <img src="./img/im.svg" alt="" />
              <img src="./img/twiter.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<div>
  <section className="description">
    <div className="container">
      <div className="description-product">
        <div className="description-product-top">
          <div className="description-product-items">
            <div className="description-product-nav">
              <p>Description</p>
              <p>Additional Information</p>
              <p>Reviews [5]</p>
            </div>
            <div className="description-product-content">
              <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
                speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
                the
                show on the road.</p>
              <br />
              <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
                engineering.
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                highs for a sound that is both articulate and pronounced. The analogue knobs allow you
                to
                fine tune the controls to your personal preferences while the guitar-influenced leather
                strap enables easy and stylish travel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="flex">
  <div className="flex-product-bottom">
          <div className="description-product_imgcheck">
            <img src="../img/Group 107.png" alt="" />
          </div>
          <div className="description-product_imgcheck">
            <img src="../img/Group 106.png" alt="" />
          </div>
        </div>

  </section>
  <section className="news">
    <div className="container">
      <div className="section-heading-pronews">
        <h2 className="section-heading-titletop">Related Products</h2>
      </div>
      <div className="section-body">
        <div className="product-list">
          <div className="product-item">
            <div className="product-image">
              <img src="https://picsum.photos/id/16/300/300" alt="" className="product__thumbnail" />
              <span className="product-sale">30%</span>
            </div>
            <div className="product-info">
              <h3 className="product__name">
                <a href="" className="product__link">Syltherine</a>
              </h3>
              <a href="" className="product__category">Stylish cafe chair</a>
              <div className="product-price">
                <span className="product-price__new">2.500.000đ</span>
                <span className="product-price__old">3.500.000đ</span>
              </div>
            </div>
            <div className="product-actions">
              <button className="btn product-action__addtocart">Add To Cart</button>
              <div className="product-actions-more">
                <span className="product-action__share"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                  </svg>Share</span>
                <span className="product-action__compare"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                  </svg>Compare</span>
                <span className="product-action__like"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>Like</span>
              </div>
            </div>
          </div>
          {/*End .product-item*/}
          <div className="product-item">
            <div className="product-image">
              <img src="https://picsum.photos/id/15/300/300" alt="" className="product__thumbnail" />
              <span className="product-new">New</span>
            </div>
            <div className="product-info">
              <h3 className="product__name">
                <a href="" className="product__link">Leviosa</a>
              </h3>
              <a href="" className="product__category">Stylish cafe chair</a>
              <div className="product-price">
                <span className="product-price__new">2.500.000đ</span>
                <span className="product-price__old" />
              </div>
            </div>
            <div className="product-actions">
              <button className="btn product-action__addtocart">Add To Cart</button>
              <div className="product-actions-more">
                <span className="product-action__share"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                  </svg>Share</span>
                <span className="product-action__compare"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                  </svg>Compare</span>
                <span className="product-action__like"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>Like</span>
              </div>
            </div>
          </div>
          {/*End .product-item*/}
          <div className="product-item">
            <div className="product-image">
              <img src="https://picsum.photos/id/14/300/300" alt="" className="product__thumbnail" />
              <span className="product-sale">30%</span>
            </div>
            <div className="product-info">
              <h3 className="product__name">
                <a href="" className="product__link">Lolito</a>
              </h3>
              <a href="" className="product__category">Luxury big sofa</a>
              <div className="product-price">
                <span className="product-price__new">7.000.000đ</span>
                <span className="product-price__old"><del>14.000.000đ</del></span>
              </div>
            </div>
            <div className="product-actions">
              <button className="btn product-action__addtocart">Add To Cart</button>
              <div className="product-actions-more">
                <span className="product-action__share"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                  </svg>Share</span>
                <span className="product-action__compare"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                  </svg>Compare</span>
                <span className="product-action__like"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>Like</span>
              </div>
            </div>
          </div>
          {/*End .product-item*/}
          <div className="product-item">
            <div className="product-image">
              <img src="https://picsum.photos/id/13/300/300" alt="" className="product__thumbnail" />
              <span className="product-new">New</span>
            </div>
            <div className="product-info">
              <h3 className="product__name">
                <a href="" className="product__link">Respira</a>
              </h3>
              <a href="" className="product__category">Outdoor bar table and stool</a>
              <div className="product-price">
                <span className="product-price__new">5.000.000đ</span>
                <span className="product-price__old" />
              </div>
            </div>
            <div className="product-actions">
              <button className="btn product-action__addtocart">Add To Cart</button>
              <div className="product-actions-more">
                <span className="product-action__share"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                  </svg>Share</span>
                <span className="product-action__compare"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5" />
                  </svg>Compare</span>
                <span className="product-action__like"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>Like</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="news-showmore">
      <button className="news-showmore-btn">
        Show More
      </button>
    </div>
  </section>
  <div className="container">
    <hr />
  </div>
</div>

    </>
  )
}

export default DetailProduct