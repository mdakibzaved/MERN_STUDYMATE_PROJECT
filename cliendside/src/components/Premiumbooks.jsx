import React, { useEffect, useState } from "react";
import Card from './Card'
import { Link } from "react-router-dom";
import axios from "axios"

function Premiumbooks() {
  const [book,setBooks] =useState([])

  // Getting Data With API
  useEffect(()=>{
    const getBook = async ()=>{
      try{
        const res = await axios.get("http://localhost:3000/book")   //API Connected with Frontend!
        console.log(res.data)
        setBooks(res.data)
      }catch(e){
        console.log("Data Fetching Error " + e)
      }
    }
    getBook()
  },[])


  return (
    <>
      <div className="max-w-screen2xl mx-auto mt-22 md:px-20 px-4  md:mt-26 pt-24 ">
        {/* 1st Info */}
        <div>
          <h1 className="md:text-center text-2xl md:text-3xl ">
            Welcome to Premium ebooks{" "}
            <span className="text-yellow-500 font-semibold">Club!</span>
          </h1>
          <p className="md:text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            eos voluptate fuga voluptatem! Sit nihil inciduntnemo!
          </p>
          <Link to="/" className="btn bg-slate-900 hover:bg-slate-600 delay-200 transition-all text-white mt-6">Back</Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
            <Card item={item} key={item.id}/>
          ))}
        </div>

      </div>
    </>
  );
}

export default Premiumbooks;
