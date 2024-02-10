import React from "react";
import { useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { removeItem } from "../../redux/features/productSlice/productSlice";

const Cartmodal = ({ cart, shown, close }) => {
  const dispatch = useDispatch();

  return shown ? (
    <>
      <div className="modal-backdrop" onClick={() => close()}>
        {" "}
      </div>
      <div
        className="bg-white w-[22%] h-[450px]  shadow-2xl border rounded-2xl absolute z-10 right-[15px] top-[80px] overflow-y-scroll scrollbar-hide "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {cart.length === 0 ? (
          <div className="h-full flex justify-center items-center text-2xl text-black">
            <h2>Your Cart Is Empty!</h2>
          </div>
        ) : (
          cart.slice(0, 3).map((search) => {
            return (
              <div
                className="flex items-center my-3 hover:shadow-sm pb-1 cursor-pointer pr-2"
                key={search.id}
              >
                <div className="w-[90px] h-[70px] mx-5">
                  <Link to={`/products/${search.id}`}>
                    <img src={search.image} alt="" className="w-full h-full" />
                  </Link>
                </div>
                <div className=" w-[80%] flex flex-col gap-4">
                  <p className="text-black">
                    {search.title.substring(0, 35)}...
                  </p>
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
        ) : null}
      </div>
    </>
  ) : (
    ""
  );
};

export default Cartmodal;
