import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {

  // React Hook Form for Validation
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{
    const userInfo = {
      email:data.email,
      password:data.password,
    }

    await axios.post("http://localhost:3000/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success('Logged Successfully!');
        document.getElementById("my_modal_3").close();

        setTimeout(()=>{
          window.location.reload()
          localStorage.setItem("Users", JSON.stringify(res.data.user))
        },1000)

      }
    }).catch((e)=>{
      if(e.response) 
      toast.error(e.response.data.message);
      setTimeout(()=>{},2000)  //for 3 second reload and shoe err msg
    })
  } 

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close();
  };


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-800 dark:text-slate-800">
          <h3 className="font-bold text-2xl dark:text-white">Login</h3>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white"
              onClick={closeModal}
            >
              ✕
            </button>


            <label className="input input-bordered flex items-center gap-2 mt-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:text-slate-800"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            
            <input type="email" className="grow" placeholder="Email"  {...register("email", { required: true })}/>
          </label>
          {errors.email && <span className="text-sm text-red-300">This field is required</span>}
          
          
          
          <label className="input input-bordered flex items-center gap-2 mt-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 dark:text-slate-800"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" placeholder="Password"  {...register("password", { required: true })}/>
          </label>
          {errors.password && <span className="text-sm text-red-300">This field is required</span>}

          <div className="flex justify-between pt-6">
            
            {/* button should be here other input type =submit */}
            <button type="submit" className="bg-yellow-600 py-2 px-3 text-white rounded shadow-md ">Login</button>
            <p>
              Not registred?{" "}
              <Link className="text-blue-600 underline"  to={"/signup"}>
                SignUp
              </Link>
            </p>
          </div>
          </form>
          
        </div>
      </dialog>
    </div>
  );
}

export default Login;
