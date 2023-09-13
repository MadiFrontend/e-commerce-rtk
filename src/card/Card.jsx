import React, { useEffect, useRef, useState } from "react";
import Title from "../tilte/Title";
import { IoIosStarOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice/productSlice";

function Card(props) {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.product.data);
  // const [mainData, setMainData] = useState([
  //   { name: 225, image: "dfdfdf", id: 1 },
  //   { name: 225, image: "dfdfdf", id: 2 },
  //   { name: 225, image: "dfdfdf", id: 3 },
  //   { name: 225, image: "dfdfdf", id: 4 },
  // ]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleDisplayOn = (id) => {
    // const a = mainData.filter((item) => item.id === id);

    // 👇️ toggle
    setIsActive((a) => !a);
  };
  const handleDisplayOut = (id) => {
    // const a = mainData.filter((item) => item.id === id);
    // 👇️ toggle
    setIsActive((a) => !a);
  };

  return (
    <div className="mb-28 w-[100%] ">
      <div>
        <Title>
          <b>2023</b> {props.titleName}
        </Title>
      </div>
      <div className="grid grid-cols sm:grid-cols md:grid-cols-4 gap-5">
        {mainData
          .filter((cat) => cat.category === props.filterName)
          .map((item) => {
            return (
              <div
                className="flex flex-col items-center justify-around w-[350px] h-[600px] bg-white border rounded-[40px] overflow-hidden hover:shadow-lg cursor-pointer "
                onMouseOver={() => handleDisplayOn(item.id)}
                onMouseOut={() => handleDisplayOut(item.id)}
                key={item.id}
              >
                <img
                  src={item.image}
                  alt="aks"
                  className="w-[100%] h-[50%] overflow-hidden"
                />
                <div className="flex justify-center">
                  <IoIosStarOutline size={18} color="red" />
                  <IoIosStarOutline size={18} color="red" />
                  <IoIosStarOutline size={18} color="red" />
                  <IoIosStarOutline size={18} color="red" />
                  <IoIosStarOutline size={18} color="red" />
                </div>
                <p className="text-center text-xl font-semibold mb-10">
                  {item.title}
                </p>
                <div className="relative mb-10 ">
                  <p
                    className="text-primery text-2xl font-bold mb-3  absolute left-[-40px] bottom-[-10px] "
                    style={{
                      display: isActive ? "none" : "",
                    }}
                  >
                    ${item.price}
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
            );
          })}
      </div>
    </div>
  );
}

export default Card;
