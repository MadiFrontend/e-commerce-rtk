import React from "react";
import { BiCategory } from "react-icons/bi";

const categoryItemsList = [
  {
    title: "SHOE & BAG",
    list: ["Casual shoes", "boots", "sandals", "slippers"],
  },
  {
    title: "SHOE & BAG",
    list: ["Casual shoes", "boots", "sandals", "slippers"],
  },
  {
    title: "SHOE & BAG",
    list: ["Casual shoes", "boots", "sandals", "slippers"],
  },
  {
    title: "SHOE & BAG",
    list: [
      "Casual shoes",
      "boots",
      "sandals",
      "slippers",
      "boots",
      "sandals",
      "slippers",
      "boots",
      "sandals",
      
    ],
  },
  {
    title: "SHOE & BAG",
    list: ["Casual shoes", "boots", "sandals", "slippers"],
  },
  {
    title: "SHOE & BAG",
    list: ["Casual shoes", "boots", "sandals", "slippers"],
  },
  {
    title: "SHOE & BAG",
    list: ["Casual shoes", "boots", "sandals", "slippers"],
  },
];

function Category() {
  return (
    <div className="group py-7 hover:text-primery">
      <button className="flex items-center gap-1">
        <BiCategory />
        <p className="font-semibold text-lg ">Categories</p>
      </button>

      <div className="w-[85%] h-auto top-[220px] bg-white rounded-md absolute left-1/2 transform -translate-x-1/2 hidden -translate-y-1/2 group-hover:grid grid-cols-[2fr_1fr] px-5 items-center shadow">
        <div className="grid grid-cols-4 grid-rows-2 gap-10 py-4">
          {categoryItemsList.map((item, index) => (
            <ul className={index === 3 && "row-span-2 col-start-4 row-start-1"}>
              <p className=" text-black font-semibold ">{item.title}</p>
              {item.list.map((i) => {
                return (
                  <li className="text-gray-500 text-sm hover:text-primery cursor-pointer">
                    {i}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>

        <img
          src="/public/images/lady-menu.png"
          alt="lady"
          className="ml-auto w-[200px]"
        />
      </div>
    </div>
  );
}

export default Category;
