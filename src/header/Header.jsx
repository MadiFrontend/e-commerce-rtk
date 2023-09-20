import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  updateTotal,
} from "../redux/features/productSlice/productSlice";
import Filtermodal from "../filterModule/Filtermodal";
import Cartmodal from "../cartmodal/Cartmodal";

import { AiOutlineShoppingCart } from "react-icons/ai";
// import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState(" ");
  const [searchMyData, setSearchMyData] = useState([]);
  const [show, setShow] = useState(true);
  const [showCart, setShowCart] = useState(true);
  const dispatch = useDispatch();
  const { data, cart, amount } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(updateTotal());
  }, [dispatch, cart]);

  const searchHandler = (e) => {
    const inputData = e.target.value;
    setSearch(inputData);
    const showData = data.filter((items) =>
      items.category.toLowerCase().includes(search.toLowerCase())
    );
    setSearchMyData(showData);
  };

  const showHandler = () => {
    setShow((current) => !current);
    !showCart ? setShowCart((current) => !current) : "";
  };
  const showHandlerCart = () => {
    setShowCart((current) => !current);
    !show ? setShow((current) => !current) : "";
  };

  // const [isActive, setIsActive] = useState(false);

  // const handleDisplayOn = (id) =>

  //   // 👇️ toggle
  //   setIsActive((a) => !a);
  // };
  // const handleDisplayOut = (id) => {

  //   setIsActive((a) => !a);
  // };
  // const [ishover, sethover] = useState(false);

  // function MouseOver() {
  //   sethover(true);
  // }
  // function MouseOut() {
  //   sethover(false);
  // }

  return (
    <>
      <div className="w-full flex justify-center items-center bg-white opacity-95 fixed z-50 top-[0px] pb-4 shadow-md ">
        <div className="flex justify-between items-center pt-8  w-[85%]   ">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul className=" text-base font-semibold flex gap-2 overflow-hidden mr-10 ">
            <Link to="/">
              <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-8 py-2 hover:border-primery rounded-3xl transition duration-300 flex items-center gap-1">
                Home
                <IoIosArrowDown size={10} />
              </li>
            </Link>

            <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-4 py-2 hover:border-primery rounded-3xl transition duration-300 flex items-center gap-1">
              Jewelery Products
              <IoIosArrowDown size={10} />
            </li>
            <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-4 py-2 hover:border-primery rounded-3xl transition duration-300 flex items-center gap-1">
              Electronics Products
              <IoIosArrowDown size={10} />
            </li>
            <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-4 py-2 hover:border-primery rounded-3xl transition duration-300 ease-in-out flex items-center gap-1">
              Women's clothing
              <IoIosArrowDown size={10} />
            </li>
          </ul>

          <div className="flex gap-10 ">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4  text-primery dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={searchHandler}
                  onClick={showHandler}
                  autocomplete="off"
                  id="default-search"
                  className="block w-full p-[2px] pl-7 text-sm text-gray-900 border rounded-lg bg-[#fff] focus:ring-blue-500 focus:border-blue-500    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </form>

            {/* <Link to="/cartpage"> */}
            <div className="relative">
              <AiOutlineShoppingCart
                size={25}
                className="cursor-pointer text-[#6c757d] hover:text-primery"
                // onMouseOver={MouseOver}
                // onMouseOut={MouseOut}
                onClick={showHandlerCart}
              />
              <span className="px-[4px] py-[1px] text-xs rounded-full bg-primery absolute bottom-5 left-4 text-white">
                {amount}
              </span>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div
        style={{
          display: show ? "none" : "",
        }}
      >
        <Filtermodal searchMyData={searchMyData} />
      </div>
      <div
        style={{
          display: showCart ? "none" : "",
        }}
      >
        <Cartmodal cart={cart} />
      </div>
    </>
  );
};
