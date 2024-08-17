import React from "react";
import owner from "../../public/owner.png"
function AboutBody() {
  return (
    <>
       <div className="max-w-screen container mx-auto md:px-20 px-4 flex flex-col md:flex-row h-screen items-center ">
      
      {/* Left div */}
      <div className="w-full left md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">
            About <span className="text-yellow-500 font-bold">Us!</span>
          </h1>
          <p className="text-xl text-gray-300 " >
          Founded by <span className="text-yellow-600">Akib Zaved</span>, our ebook learning website is dedicated to making quality education accessible to everyone. We offer a diverse collection of ebooks that cater to all learning needs and interests. Our mission is to empower learners with valuable knowledge and foster a love for reading. Discover our carefully curated selection and join a community committed to lifelong learning.
          </p>
        </div>
      </div>

      {/* Right div*/}
      <div className="w-full right md:w-1/2 order-1">
        <img  src={owner} className="w-90 m-auto p-8 sm:pt-22" alt="" />
      </div>
    </div>
    </>
  );
}

export default AboutBody;
