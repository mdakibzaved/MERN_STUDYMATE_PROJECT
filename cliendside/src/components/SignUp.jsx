import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function SignUp() {
  
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }

    await axios.post("http://localhost:3000/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('SignUp Successfully!');
        setTimeout(()=>{
          navigate(from,{replace:true})
        },1000)   //Navigate after 1 second
      }
    }).catch((e)=>{
      if(e.response)
      toast.error(e.response.data.message);
    })
  } 

  return (
    <>
      <div className="flex justify-center items-center h-screen  ">

        {/* //removing dialog class due it not open via dialog */}
        <div id="my_modal_3" className="w-full md:w-1/2 ">
          <div className="modal-box dark:bg-slate-800 mx-auto py-10">

            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-2xl text-gray-700 dark:text-yellow-600">
                Sign Up
              </h3>

              <div className="input input-bordered flex items-center gap-2 mt-4">
                <input type="text" placeholder="Name" {...register("fullname", { required: true })}/>
              </div>

              <label className="input input-bordered flex items-center  mt-4">
                <input
                  type="email"
                  className="grow"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              {errors.email && (
                <span className="text-sm text-red-300">
                  This field is required
                </span>
              )}

              <div className="input input-bordered flex items-center gap-2 mt-4 dark:text-gray-800">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
              {errors.password && (
                <span className="text-sm text-red-300">
                  This field is required
                </span>
              )}


              <div className="flex justify-between pt-6">
                <button  type="submit" className="bg-yellow-600 hover:bg-yellow-700 py-2 px-3 text-white rounded shadow-md  w-full text-center">
                  SignUp
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
