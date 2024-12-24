import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

const Signup = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          {/* Close Button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
          <h3 className="font-bold text-lg">Signup</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div className="mt-4 space-y-2">
              <span>
              Full Name
              </span>
               
                <input 
                  type="text"
                  placeholder="Enter your Full Name" 
                  className="w-full px-3 py-1 rounded-md outline-none "
                  {...register("name", { required: "Full Name is required" })}
                />
            
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
                
                <input 
                  type="email"
                  placeholder="Enter your Email" 
                  className="w-full px-3 py-1 rounded-md outline-none "
                  {...register("email", { required: "Email is required" })}
                />
              
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span> Password</span>
               
                <input 
                  type="password"
                  placeholder="Enter your Password" 
                  className="w-full px-3 py-1 rounded-md outline-none "
                  {...register("password", { required: "Password is required" })}
                />
              
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button 
                type="submit" 
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <button 
                  type="button"
                  className="underline text-blue-500"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </button>
              </p>
            </div>
          </form>

          {/* Embedded Login Component */}
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Signup;
