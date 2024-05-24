import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { categoryItemsList } from "../../data/categoryItemsList";

export const CategoriesMobile = ({ navigationItems }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="absolute left-0 top-0 z-20 flex w-[100%] flex-col items-center gap-7 bg-white ">
        <div className="flex w-[75%] items-center justify-between pt-12">
          <div className="flex items-center gap-2">
            <h2>Menu</h2>
          </div>
          <RxCross2 onClick={() => navigate("/")} size={20} />
        </div>
        {/* <Search /> */}

        <div className="grid w-3/4 grid-cols-2 grid-rows-4 gap-10 py-4">
          {categoryItemsList.map((item, index) => (
            <ul
              className={`${
                index === 3 && "row-span-2 col-start-2 row-start-3"
              }`}
            >
              <p className=" text-black font-semibold  ">{item.title}</p>
              {item.list.map((i) => {
                return (
                  <li className="text-gray-500 text-base py-1 hover:text-primery cursor-pointer">
                    {i}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};
