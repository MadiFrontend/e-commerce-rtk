import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../title/Title";
import { fetchProducts } from "../../redux/features/productSlice/productSlice";
import AddToCartBtn from "../addToCartBtn/AddToCartBtn";
import Rating from "../rating/Rating";
import AddToFavoriteBtn from "../addtofavorite/AddToFavorite";

function Card({ titleName, filterName, mainData }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  function calculateDiscountPercentage(originalPrice, discountedPrice) {
    const discountRate =
      ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discountRate.toFixed();
  }

  return (
    <div className="mt-28 w-[100%] ">
      <div>
        <Title>
          <b>{titleName}</b>
        </Title>
      </div>
      {!mainData.length == 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5">
          {mainData
            .filter((items) => items.category === filterName)
            .slice(0, 4)
            .map((item) => {
              return (
                <section
                  className=" flex flex-col justify-around w-[160px] h-[250px] md:w-[280px] md:h-[370px] bg-white  border overflow-hidden hover:shadow-lg cursor-pointer  transition duration-500 "
                  key={item.id}
                >
                  <div className="relative">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={item.image}
                        alt="aks"
                        className="md:w-[200px] md:h-[170px] w-[100px] h-[70px] object-contain overflow-hidden md:mt-10 mt-5 transition duration-300 ease-in-out hover:scale-110 m-auto "
                      />
                    </Link>

                    <span className="hover:bg-red-500 bg-gray-300 w-8 h-8  rounded-full absolute md:top-1 top-[-5px] right-2 flex justify-center items-center">
                      <AddToFavoriteBtn item={item} />
                    </span>
                    {item.category === "jewelery" ? (
                      ""
                    ) : (
                      <span className="bg-red-500 md:w-14 md:h-6 w-10 h-4 rounded-md absolute md:top-2 top-0 left-2 flex justify-center items-center text-white text-xs ">
                        %
                        {calculateDiscountPercentage(
                          item.price,
                          round(
                            item.price > 9 && item.price < 55
                              ? item.price - 5
                              : item.price - 50
                          )
                        )}
                      </span>
                    )}
                  </div>
                  {/* first section */}
                  <div className="md:pl-5 pl-2 flex justify-between  md:mt-5">
                    <div className="flex flex-col justify-around md:gap-6 gap-2">
                      <p
                        className=" text-sm hidden md:flex "
                        title={item.title}
                      >
                        {item.title.substring(0, 25)}...
                      </p>
                      <p className=" text-sm md:hidden" title={item.title}>
                        {item.title.substring(0, 20)}...
                      </p>

                      <div className="flex">
                        <p className="text-red-500 text-sm font-bold  ">
                          {item.category === "jewelery"
                            ? ""
                            : `$ ${round(
                                item.price > 9 && item.price < 55
                                  ? item.price - 5
                                  : item.price - 50
                              )}`}
                        </p>
                        <p
                          className={` text-gray-500 text-sm md:font-bold line-through md:ml-5 ml-1  ${
                            item.category === "jewelery" &&
                            " text-red-500 no-underline !ml-0"
                          }`}
                        >
                          ${item.price}
                        </p>
                      </div>

                      <div className="flex gap-5 mb-3">
                        <Rating rating={item.rating} />
                        <p className="font-semibold text-sm text-gray-400 hidden md:flex">
                          (
                          {round(
                            item.rating.rate > 4
                              ? Math.floor(item.rating.rate)
                              : item.rating.rate
                          )}
                          )
                        </p>
                      </div>
                    </div>

                    {/* second section */}

                    <div className="flex flex-col justify-end h-full p-2 md:pr-5">
                      <AddToCartBtn
                        item={item}
                        className={
                          "border bg-white text-black rounded-md p-2  justify-center items-center  hover:bg-primery hover:text-white transition-all ease-linear duration-300"
                        }
                      />
                    </div>
                  </div>
                </section>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Card;
