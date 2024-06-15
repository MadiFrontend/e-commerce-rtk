import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHome2Fill, RiHome2Line } from "react-icons/ri";
import { BiCategory, BiHeart, BiSolidCategory } from "react-icons/bi";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";

const NavigationListItems = [
  {
    title: "Home",
    href: "/",
    iconOutline: <RiHome2Line size={25} />,
    iconActive: <RiHome2Fill size={25} />,
  },
  {
    title: "Categories",
    href: "/categories",
    iconOutline: <BiCategory size={25} />,
    iconActive: <BiSolidCategory size={25} />,
  },

  {
    title: "Cart",
    href: "/cartpage",
    iconOutline: <HiOutlineShoppingBag size={25} />,
    iconActive: <HiShoppingBag size={25} />,
  },
  {
    title: "Favorites",
    href: "/Favorite",
    iconOutline: <BiHeart size={25} />,
    iconActive: <BiHeart size={25} />,
  },
];

function MobileNavbar({ amount }) {
  const location = useLocation();
  const favoriteData = useSelector((state) => state.product.favorite);
  return (
    <div className="w-full md:hidden right-0 fixed bottom-[0] text-gray-500 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-[50] h-20 ">
      <ul className="grid grid-cols-4 pt-4">
        {NavigationListItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link key={`id_${item.title}_${item.href}`} to={item.href}>
              <li
                className={`flex flex-col items-center text-sm ${
                  isActive && "text-primery"
                } `}
              >
                <div className="flex relative">
                  {item.title === "Cart" && (
                    <span className="absolute left-6 w-[22px] h-[22px] flex justify-center items-center text-[11px] rounded-full bg-[#3dc47e] text-white">
                      {amount}
                    </span>
                  )}
                  {item.title === "Favorites" && (
                    <span className="absolute left-6 w-[22px] h-[22px] flex justify-center items-center text-[11px] rounded-full bg-red-500 text-white">
                      {favoriteData.length}
                    </span>
                  )}

                  {isActive ? (
                    <span>{item.iconActive}</span>
                  ) : (
                    <span>{item.iconOutline}</span>
                  )}
                </div>

                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileNavbar;
