import React, { useRef, useState } from "react";
import Title from "../tilte/Title";
import { IoIosStarOutline } from "react-icons/io";
import { useSelector } from "react-redux";

function Card() {
  const mainData = useSelector((state) => state.product);
  console.log(mainData);

  const [isActive, setIsActive] = useState(false);

  const handleDisplayOn = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };
  const handleDisplayOut = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
  };

  return (
    <div className="mb-28">
      <Title>
        <b>2023</b> Hot Products
      </Title>
      <div>
        <div
          className="flex flex-col items-center justify-around w-[350px] h-[600px] bg-white border rounded-[40px] overflow-hidden hover:shadow-lg cursor-pointer "
          onMouseOver={handleDisplayOn}
          onMouseOut={handleDisplayOut}
        >
          <img
            src="https://m.puritoen.com/web/product/extra/big/202103/785e66a900ce79d617c727239599f395.png"
            alt="aks"
          />

          <div className="flex justify-center">
            <IoIosStarOutline size={18} color="red" />
            <IoIosStarOutline size={18} color="red" />
            <IoIosStarOutline size={18} color="red" />
            <IoIosStarOutline size={18} color="red" />
            <IoIosStarOutline size={18} color="red" />
          </div>

          <p className="text-center text-xl font-semibold mb-10">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="relative mb-10 ">
            <p
              className="text-primery text-2xl font-bold mb-3  absolute left-[-40px] bottom-[-10px] "
              style={{
                display: isActive ? "" : "",
              }}
            >
              $22.80
            </p>
            <button
              className="border bg-white text-black rounded-2xl w-[150px] h-[50px]  justify-center items-center  hidden absolute left-[-75px] bottom-[-10px] hover:bg-primery hover:text-white transition-all ease-linear duration-300  "
              id="abc"
              style={{
                display: isActive ? "flex" : "",
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
