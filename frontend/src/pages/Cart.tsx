// import React from 'react'
import {useLocalStorage} from "@/hooks/useStotage";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

const CartPage = () => {
    const [user] = useLocalStorage("user", {})
    const userId = user?.user?._id;
    console.log(userId);

    const {data, isLoading, isError} = useQuery({
      queryKey: ["cart", userId],
      queryFn: async()=>{
        const {data} = await axios.get(`http://localhost:8080/api/v1/cart/${userId}`);
        return data;
      }
    });
    // if(isLoading) return <p>Loading...</p>
    // if(isError) return <p>Error</p>
  return (
    <>
<section className="cart">
  <div className="container">
    <div className="cart-product">
      <div className="cart-product-left">
        <div className="cart-product-table">
          <table className="cart-product-table-form">
            <thead className="cart-product-table-head">
              <tr>
                <th style={{width: 150}} />
                <th style={{width: 200}}><strong>Product</strong></th>
                <th style={{width: 160}}><strong>Price</strong></th>
                <th style={{width: 120}}><strong>Quantity</strong></th>
                <th style={{width: 150}}><strong>Subtotal</strong></th>
                <th style={{width: 50}} />
              </tr>
            </thead>
            <tbody className="cart-product-table-body">
              {data?.products.map((product: any, index: number)=>{
                return (
                    <tr key={index}>
                        <td><img className="cart-product-table-imgpro" src={product.image} alt="" /></td>
                          <td>{product.name}</td>
                            <td>{product.price}</td>
                              <td><input className="cart-product-tabl-input" type="text" placeholder="1" /></td>
                            <td>{product.price}</td>
                      <td><img src="./img/icontable.svg" alt="" /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="cart-product-right">
        <h3>Cart Totals</h3>
        <div className="cart-product-price">
          <div className="cart-product-price__left">
            <p><strong>Subtotal</strong></p>
            <p><strong>Total</strong></p>
          </div>
          <div className="cart-product-price__right">
            <p>25.000.000đ</p>
            <span>25.000.000đ</span>
          </div>
        </div>
        <button className="cart-product-btn">Check Out</button>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default CartPage