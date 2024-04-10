// import React from 'react'
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import '../App.css'

const Signup = () => {
  const navigate = useNavigate();
  const queryClient =useQueryClient();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {mutate} =useMutation({
    mutationFn: async(users)=>{
      const {data} = await axios.post(`http://localhost:8080/api/v1/auth/signup`, users)
      return data.user;
    },
    onSuccess: () =>{
      alert('Đăng ký thành công')
      queryClient.invalidateQueries({
        queryKey: ["PRODUCTS"],
      })
    }
  })
  const onSubmit = (users) =>{
    mutate(users);
    navigate("/signin");
  }
  return (
    <>
    <div className="form">
        <div className="signup-container">
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Tên</label>
          <input type="text" id="name" className="form-control" {...register('name', { required: true })} />
          {errors?.name?.message && <span className="text-danger">Lỗi</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" {...register('email', { required: true })} />
          {errors?.email?.message && <span className="text-danger">Lỗi</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Nhập mật khẩu</label>
          <input type="password" id="password" className="form-control" {...register('password', { required: true })} />
          {errors?.password?.message && <span className="text-danger">Lỗi</span>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Nhập lại mật khẩu</label>
          <input type="password" id="confirmPassword" className="form-control" {...register('confirmPassword', { required: true })} />
          {errors?.confirmPassword?.message && <span className="text-danger">Lỗi</span>}
        </div>
        <button type="submit" className="btn btn-primary">Đăng ký</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Signup