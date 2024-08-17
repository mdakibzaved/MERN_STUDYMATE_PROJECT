import React from "react";
import Card from "./Card";
import axios from 'axios'
import { useState,useEffect } from "react";

//React Slider import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Freebooks() {
  
  const [book ,setBook] = useState([])
  // Getting Data With API
  useEffect(()=>{
    const getBook = async ()=>{
      try{
        const res = await axios.get("http://localhost:3000/book")   //API Connected with Frontend!
        
        // Filter Data of Free Book
        const filterData = res.data.filter((list_item) => list_item.category === "Free");

        console.log(filterData)
        setBook(filterData)
      }catch(e){
        console.log("Data Fetching Error " + e)
      }
    }
    getBook()
  },[])

  //React Slider Setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen container mx-auto md:px-20 mt-28 md:mt-22">
        <h1 className="tracking-tigher text-center text-3xl font-semibold pb-6 ">
          Best Free Ebooks Here.
        </h1>
        <p className="text-center pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          voluptatem sapiente facilis ut necessitatibus rerum laboriosam optio
          eveniet sint .
        </p>


        <div className="" >
          <Slider {...settings}>
          {book.map((item) => (
            <Card item={item} key={item.id} className="mb-4"/>
          ))}
          </Slider>
        </div>
        

      </div>
    </>
  );
}

export default Freebooks;
