import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice/productSlice";
import Filtermodule from "../filterModule/FIlterModule";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState(" ");
  const [searchMyData, setSearchMyData] = useState([]);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const searchHandler = (e) => {
    const inputData = e.target.value;
    setSearch(inputData);
    const showData = myData.filter((items) =>
      items.category.toLowerCase().includes(search.toLowerCase())
    );
    setSearchMyData(showData);
  };

  const showHandler = () => {
    setShow((current) => !current);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center bg-white opacity-90 fixed top-[0px] pb-4 shadow-md ">
        <div className="flex justify-between items-center pt-8  w-[85%]   ">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul className=" text-xl font-semibold flex gap-2 overflow-hidden mr-10 ">
            <Link to="/">
              <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-8 py-2 hover:border-primery rounded-3xl transition duration-300 flex items-center gap-1">
                Home
                <IoIosArrowDown size={10} />
              </li>
            </Link>

            <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-8 py-2 hover:border-primery rounded-3xl transition duration-300 flex items-center gap-1">
              2023 Hot Products
              <IoIosArrowDown size={10} />
            </li>
            <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-8 py-2 hover:border-primery rounded-3xl transition duration-300 flex items-center gap-1">
              2023 New Products
              <IoIosArrowDown size={10} />
            </li>
            <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-8 py-2 hover:border-primery rounded-3xl transition duration-300 ease-in-out flex items-center gap-1">
              2023 Special Products
              <IoIosArrowDown size={10} />
            </li>
          </ul>

          <div className="flex gap-10 ">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-myRed dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
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
                  id="default-search"
                  className="block w-full p-[6px] pl-14 text-sm text-gray-900 border rounded-lg bg-[#fff] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </form>

            <Link to="/cartpage">
              <AiOutlineShoppingCart
                size={30}
                className="cursor-pointer text-[#6c757d] hover:text-primery"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          display: show ? "none" : "",
        }}
      >
        <Filtermodule searchMyData={searchMyData} />
      </div>
    </>
  );
};
