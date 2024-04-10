// import React from 'react'
import { IProduct } from "@/interfaces/product";
import { getAllProducts } from "@/services/product"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom";

type ProductListProps ={
  featured?: boolean;
}

const ProductList = ({featured}:ProductListProps) => {
    const {data: products, isLoading, isError} = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: getAllProducts,
    });

    const filteredProducts = featured ? products?.filter((product: IProduct) => product?.featured == featured): products;
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error</p>
  return (
    <>
<section className="news">
  <div className="container">
    <div className="section-heading">
      <h2 className="section-heading__title">New</h2>
    </div>
    <div className="section-body">
      <div className="product-list">
        {filteredProducts?.map((product: IProduct, index: number)=>{
            return(
                <div key={index} className="product-item">
                <div className="product-image">
                  <img src={product?.image} alt="" className="product__thumbnail" />
                  <span className="product-sale">30%</span>
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a className="product__link">{product?.name}</a>
                  </h3>
                  <a href="" className="product__category">Stylish cafe chair</a>
                  <div className="product-price">
                    <span className="product-price__new">{product?.price - (product?.price * (product?.discount / 100))}</span>
                    <span className="product-price__old">{product?.price}</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="btn product-action__addtocart"> <Link to={`/products/${product._id}`}>Add To Cart</Link></button>
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
            )
        })}

      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ProductList