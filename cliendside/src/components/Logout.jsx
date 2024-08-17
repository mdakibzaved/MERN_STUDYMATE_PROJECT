import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

export default function Logout() {
  const [authUser,setAuthUser] = useAuth()


  //Handle click on Logout Button
  function handleLogout(){
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("Users")
        toast.success("Logout Succesfully")
        setTimeout(()=>{
            window.location.reload()
            localStorage.setItem("Users", JSON.stringify(res.data.user))
          },2000)
    } catch (error) {
        toast.error("Error: "+ error.message)
        setTimeout(()=>{},3000)    //for 3 second reload and shoe err msg
    }
  }


  return (
    <>
            <button className='px-3 py-2 bg-red-500 rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>

    </>
  )
}
