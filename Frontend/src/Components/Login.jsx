import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close Modal Button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=> document.getElementById("my_modal_3").close()}>✕</Link>
            
            
            <h3 className="font-bold text-lg">Login</h3>

            {/* Email Input */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br/>
                <input 
                  type="email" 
                  placeholder="Enter your Email" 
                  className="w-80 px-3 py-1 rounded-md outline-none "
                  {...register("email", { required: "Email is required" })} 
                />
              
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
            <div className="mt-4 space-y-2">
              <span>
                Password</span>
                <br/>
                <input 
                  type="password" 
                  placeholder="Enter your Password" 
                  className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("password", { required: "Password is required" })} 
                />
              
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6">
              <button 
                type="submit" 
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not Registered? 
                <Link to="/Signup" className="underline text-blue-500 ml-1">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
