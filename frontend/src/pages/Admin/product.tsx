// import React from 'react'

import { IProduct } from "@/interfaces/product";
import {  useMutation, useQuery,  useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Link } from "react-router-dom";

const Product = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['PRODUCTS'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:8080/api/v1/products`);
      return data;
    }
  });
  const {mutate} = useMutation({
    mutationFn: async(_id: string) =>{
      return window.confirm('Bạn chắc chắn muốn xóa chứ ?') && (await axios.delete(`http://localhost:8080/api/v1/products/${_id}`))
    },
    onSuccess: () =>{
      queryClient.invalidateQueries({queryKey:['PRODUCTS']})
    }
  })
  return (
    <>
         <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <div className="btn-toolbar mb-2 mb-md-0">
      <div className="btn-group me-2">
        <Link to="/admin/products/add" className="btn btn-primary btn--secondary">Thêm</Link>
      </div>
    </div>
  </div>
  <h2>Danh sách sản phẩm</h2>
  <div className="table-responsive small">
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Image</th>
          <th scope="col">Gía</th>
          <th scope="col">Mô tả</th>
          <th></th>
        </tr>
      </thead>
    <tbody>
      {data?.map(( product: IProduct, index: number )=>(
                        <tr key={index}>
                        <td>{index+1}</td>
                      <td>{product.name}</td>
                     <td><img width={50} src={product.image} alt={product.name} /></td> 
                      <td>{product.price}$</td>
                      <td>{product.description}</td>
                      <td>
                        <div className="d-flex">
                        <Link to={`/admin/products/${product._id}/edit`} type="button" className="btn btn-primary btn--secondary">Sửa</Link>
                        <button className="btn btn-danger btn-outline-secondary" onClick={() =>mutate(product._id!)}>Xóa</button>
                        </div>
                      </td>
                      </tr>
      ))}
    </tbody>
    </table>
  </div>
    </>
  )
}

export default Product