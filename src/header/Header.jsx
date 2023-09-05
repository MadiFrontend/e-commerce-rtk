import { AiOutlineShoppingCart } from "react-icons/ai";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white opacity-90 fixed top-[0px] pb-4 shadow-md ">
      <div className="flex justify-between items-center pt-8  w-[85%]   ">
        <img
          src="https://www.malls-10.top/assets/img/logo/logo.png"
          alt="logo"
        />

        <ul className=" text-xl font-semibold flex gap-2 overflow-hidden mr-48 ">
          <li className="hover:text-primery cursor-pointer border border-transparent hover:border px-8 py-2 hover:border-primery rounded-3xl transition duration-300 flex items-center gap-1">
            Home
            <IoIosArrowDown size={10} />
          </li>
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
          <PiMagnifyingGlassBold
            size={30}
            className="cursor-pointer text-[#6c757d] hover:text-primery"
          />
          <AiOutlineShoppingCart
            size={30}
            className="cursor-pointer text-[#6c757d] hover:text-primery"
          />
        </div>
      </div>
    </div>
  );
};
