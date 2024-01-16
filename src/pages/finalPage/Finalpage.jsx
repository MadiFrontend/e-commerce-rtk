import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { Link } from "react-router-dom";

function Finalpage() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 ">
        <div className=" flex text-4xl font-bold gap-5 ">
          <MdOutlineDone color="green" />
          <h2>Thanks For Your Shopping !</h2>
        </div>
        <Link to="/">
          <button className="border border-primery text-primery px-4 py-1 rounded-2xl mt-3 hover:bg-primery hover:text-white text-xl">
            Go Back To Shop !
          </button>
        </Link>
      </div>
    </>
  );
}

export default Finalpage;
