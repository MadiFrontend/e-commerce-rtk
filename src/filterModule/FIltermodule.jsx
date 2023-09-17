import React from "react";

const Filtermodule = ({ searchMyData }) => {
  return (
    <div className="bg-[#fffffff8] opacity-100 w-[30%] h-[900px] shadow-lg fixed right-0 top-[15%] overflow-y-auto ">
      {searchMyData.map((search) => {
        return (
          <div className="flex items-center my-10">
            <div className="w-[100px] h-[100px] mx-5">
              <img src={search.image} alt="" className="w-[100px] h-[100px]" />
            </div>
            <p className="text-center truncate">{search.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Filtermodule;
