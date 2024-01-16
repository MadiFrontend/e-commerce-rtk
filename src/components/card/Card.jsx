import React, { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../title/Title";
import {
  addToCart,
  fetchProducts,
} from "../../redux/features/productSlice/productSlice";

function Card(props) {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="mb-28 w-[100%] ">
      <div className="text-center xl:mx-5">
        <Title>
          <b>2023</b> {props.titleName}
        </Title>
        {console.log(mainData)}
      </div>
      <div className="grid grid-cols justify-center md:grid-cols-4  gap-5">
        {mainData.slice(0, 4).map((item) => {
          return (
            <div
              className="flex flex-col items-center justify-around w-[280px] h-[500px] bg-white border rounded-[40px] overflow-hidden hover:shadow-lg cursor-pointer "
              key={item.id}
            >
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.images[0]}
                  alt="aks"
                  className="w-[200px] h-[170px] overflow-hidden mt-5"
                />
              </Link>
              <div className="flex justify-center">
                <IoIosStarOutline size={18} color="red" />
                <IoIosStarOutline size={18} color="red" />
                <IoIosStarOutline size={18} color="red" />
                <IoIosStarOutline size={18} color="red" />
                <IoIosStarOutline size={18} color="red" />
              </div>
              <p className="text-center text-base font-semibold mb-14  h-[10px]">
                {item.title}
              </p>
              <div className=" mb-10 ">
                <p className="text-primery text-center text-2xl font-bold mb-3  ">
                  ${item.price}
                </p>
                <button
                  className="border bg-white text-black rounded-2xl w-[150px] h-[50px]  justify-center items-center  hover:bg-primery hover:text-white transition-all ease-linear duration-300  "
                  id="abc"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                      })
                    )
                  }
                >
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* {mainData.map(item=>{
        return(
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        )
      })} */}
    </div>
  );
}

export default Card;
