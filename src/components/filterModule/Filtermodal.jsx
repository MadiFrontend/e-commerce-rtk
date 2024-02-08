import React from "react";
import { Link } from "react-router-dom";

const Filtermodal = ({ searchMyData }) => {
  console.log(searchMyData);
  return (
    <>
      {searchMyData && searchMyData.length > 0 && (
        <div className="bg-white w-[28%] h-[450px] shadow-2xl border rounded-md fixed z-50 left-[300px] top-[90px]  overflow-y-scroll scrollbar-hide ">
          {searchMyData.map((search) => {
            return (
              <div className="flex items-center my-10 hover:shadow-sm pb-1 cursor-pointer pr-2">
                <div className="w-[120px] h-[100px] mx-5">
                  <Link to={`/products/${search.id}`}>
                    <img src={search.image} alt="" className="w-full h-full" />
                  </Link>
                </div>
                <div className=" w-[80%]">
                  <p className=" ">{search.title}</p>
                  <p className="text-primery font-bold mt-1">${search.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Filtermodal;
