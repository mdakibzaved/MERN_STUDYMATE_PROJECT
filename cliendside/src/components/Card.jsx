import React from "react";

function Card({item}) {
  return (
    <>
      <div className="my-3 p-3 ">
        <div className="card bg-base-100 w-88 shadow-xl dark:bg-slate-800 hover:scale-105 duration-500">
          <figure>
            <img
              src={item.image}
              alt="ebooks"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              EBooks!
              <div className="badge bg-yellow-700 border-none text-white">{item.category}</div>
            </h2>
            <p>{item.Title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:bg-yellow-400 hover:text-white">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
