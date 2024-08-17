import React from 'react'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './Home/Home'
import Course from './Course/Course'
import Contact from './Contact/Contact'
import About from './About/About'
import SignUp from './components/SignUp'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'


function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser)
  return (
    <> 
        <div className='dark:bg-slate-900  dark:text-gray-300'>
        <Routes>
              <Route path='/' element={<Home/>}/>  
              <Route path='/course' element={authUser?<Course/>:<Navigate to="/signup"/>}/>  
              <Route path='/about' element={<About/>}/>  
              <Route path='/contact' element={<Contact/>}/>  
              <Route path='/signup' element={<SignUp/>}/>  
        </Routes>
        <Toaster/>
        </div>
       
    </>
  );
}

export default App



