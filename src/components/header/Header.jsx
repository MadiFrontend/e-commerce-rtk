import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram, BiLogoFacebook } from "react-icons/bi";
import logo from "/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateTotal } from "../../redux/features/productSlice/productSlice";
import Navbar from "../navbar/Navbar";
import { Hamburger } from "./HamburgerMenu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SerachBox from "../search/SerachBox";
import MobileNavbar from "../mobileNavbar/MobileNavbar";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/Aboutus" },
  { title: "Blog", href: "/blog" },
  { title: "Contact us", href: "/contactus" },
];
const SmIcons = [
  { comp: <AiFillInstagram size={20} color="gray" /> },
  { comp: <BiLogoFacebook size={20} color="gray" /> },
  { comp: <BiLogoTelegram size={20} color="gray" /> },
];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, cart, amount } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(updateTotal());
  }, [dispatch, cart]);

  return (
    <>
      <header className="w-full flex justify-center items-center  bg-white shadow-md ">
        <div className="flex justify-between items-center container ">
          <div className="lg:hidden">
            <Hamburger navigationItems={navigationItems} />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
          </Link>

          <div className="lg:flex hidden">
            <SerachBox data={data} />
          </div>

          <ul className=" gap-16 hidden lg:flex">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link to={item.href}>
                  <li
                    className={`hover:text-primery cursor-pointer rounded-3xl transition duration-300 flex items-center ${
                      isActive && "text-primery"
                    }`}
                    key={`id-${item.href}-${item.title}`}
                  >
                    {item.title}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div
            className="flex md:hidden gap-1 "
            onClick={() => navigate("/cartpage")}
          >
            <HiOutlineShoppingBag size={20} />
            <span className="w-[22px] h-[22px] flex justify-center items-center text-[11px] rounded-full bg-[#3dc47e] text-white">
              {amount}
            </span>
          </div>

          <div className=" gap-2 hidden lg:flex ">
            {SmIcons.map((item) => (
              <span
                className="cursor-pointer"
                onMouseOver={({ target }) => (target.style.color = "#4E66EC")}
                onMouseOut={({ target }) => (target.style.color = "gray")}
              >
                {item.comp}
              </span>
            ))}
          </div>
        </div>
      </header>

      <Navbar
        data={data}
        cart={cart}
        updateTotal={updateTotal}
        amount={amount}
      />

      <div className="flex container lg:hidden mt-10">
        <SerachBox data={data} />
      </div>

      <MobileNavbar amount={amount} />
    </>
  );
};
