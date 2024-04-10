// import React from 'react'
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {mutate} =useMutation({
    mutationFn: async(users)=>{
      const {data} = await axios.post(`http://localhost:8080/api/v1/auth/signin`, users);
      localStorage.setItem('users', JSON.stringify(data))
      return data.user;
    },
    onSuccess: () =>{
      alert('Đăng nhập thành công')
    }
  })
  const onSubmit = (users) =>{
    mutate(users);
    navigate("/");
  }
  return (
    <>
        <div className="form">
        <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
        <div className="social-buttons">
          <button className=" btn-facebook">Facebook</button>
          <button className=" btn-google">Google</button>
        </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default Signin