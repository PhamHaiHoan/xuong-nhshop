// import React from 'react'

import { useForm } from "react-hook-form"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { IProduct } from "@/interfaces/product";

const ProductEdit = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const queryClient =useQueryClient();
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  useQuery({
    queryKey: ['PRODUCTS', id],
    queryFn : async()=>{
      const {data} = await axios.get(`http://localhost:8080/api/v1/products/${id}`);
      reset(data);
      return data;
    }
  })

  const {mutate} =useMutation({
    mutationFn: async(product:IProduct)=>{
      const {data} = await axios.put(`http://localhost:8080/api/v1/products/${product._id}`, product);
      return data.product
    },
    onSuccess: () =>{
      alert('Cập nhật sản phẩm thành công')
      queryClient.invalidateQueries({
        queryKey: ["PRODUCTS"],
      })
    }
  })
  const onSubmit = (product: IProduct) =>{
    mutate(product);
    navigate("/admin");
  }
  return (
    <>
        <div className="mb5">
      <h2>Thêm sản phẩm</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="" className="form-label">Tên sản phẩm</label>
      <input type="text" className="form-control"{...register('name',{required: true})}/>
      {errors?.name?.message &&<span className="text-danger">Lỗi</span>}
    </div>
    <div className="mb-3">
      <label className="form-label">Gía sản phẩm</label>
      <input type="number" className="form-control"{...register('price',{required: true})}/>
      {errors?.price?.message &&<span className="text-danger">Lỗi</span>}
    </div>
    <div className="mb-3">
      <label className="form-label">Image</label>
      <input type="text" className="form-control"{...register('image',{required: true})}/>
      {errors?.image?.message &&<span className="text-danger">Lỗi</span>}
    </div> 
    <div className="mb-3">
      <label className="form-label">Mô tả sản phẩm</label>
      <textarea cols={30} rows={10} className="form-control"{...register('description',{required: true})}></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Cập nhập</button>
    </form>
</div>
    </>
  )
}

export default ProductEdit