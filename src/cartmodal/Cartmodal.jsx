import React from "react";
import { removeItem } from "../redux/features/productSlice/productSlice";
import { useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Cartmodal = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white w-[22%] h-[500px]  shadow-2xl border rounded-2xl fixed z-30 right-[0px] top-[12%] overflow-y-scroll scrollbar-hide ">
      {cart.length === 0 ? (
        <div className="h-full flex justify-center items-center text-2xl">
          <h2>Your Cart Is Empty!</h2>
        </div>
      ) : (
        cart.slice(0, 3).map((search) => {
          return (
            <div className="flex items-center my-10 hover:shadow-sm pb-1 cursor-pointer pr-2">
              <div className="w-[90px] h-[70px] mx-5">
                <img src={search.image} alt="" className="w-full h-full" />
              </div>
              <div className=" w-[80%] flex flex-col gap-4">
                <p className=" ">{search.title}</p>
                <div className="flex items-center gap-4">
                  <p className="text-primery font-bold mt-1 ">
                    ${search.price}
                  </p>
                  <BsFillTrashFill
                    color="red"
                    size={18}
                    className="cursor-pointer mt-1"
                    onClick={() => dispatch(removeItem(search.id))}
                  />
                </div>
              </div>
            </div>
          );
        })
      )}
      {cart.length !== 0 ? (
        <div className="flex justify-center items-center pb-5">
          <Link to="/cartpage">
            <button className="border border-primery text-primery px-4 py-1 rounded-2xl mt-3 hover:bg-primery hover:text-white">
              All Cart Items
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cartmodal;
