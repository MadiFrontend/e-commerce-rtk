import React, { useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../title/Title";
import {
  addToCart,
  fetchProducts,
} from "../../redux/features/productSlice/productSlice";
import { MdAddShoppingCart, MdFavoriteBorder } from "react-icons/md";

function Card(props) {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="mb-28 w-[100%] ">
      <div className="">
        <Title>
          <b>Flash Sales</b>
        </Title>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5">
        {mainData
          .filter((cat) => cat.category === props.filterName)
          .slice(0, 4)
          .map((item) => {
            return (
              <section
                className=" flex flex-col justify-around w-[280px] h-[370px] bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg cursor-pointer  transition duration-500 "
                key={item.id}
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt="aks"
                    className="w-[200px] h-[170px] overflow-hidden mt-5 transition duration-300 ease-in-out hover:scale-110 m-auto"
                  />
                </Link>
                {/* first section */}
                <div className="pl-5 flex justify-between h-[40%]">
                  <div className="flex flex-col justify-around">
                    <p className=" text-sm font-semibold" title={item.title}>
                      {item.title.substring(0, 20)}...
                    </p>

                    <div className="flex gap-5 ">
                      <span className="flex">
                        <FaStar size={18} color="gold" />
                        <FaStar size={18} color="gold" />
                        <FaStar size={18} color="gold" />
                        <FaStar size={18} color="gold" />
                        <FaStar size={18} color="gold" />
                        {/* <FaRegStar size={18} color="gold" /> */}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({item.rating.count})
                      </span>
                    </div>

                    <p className="text-red-500 text-sm font-bold mb-3 ">
                      ${item.price}
                    </p>
                  </div>

                  {/* second section */}

                  <div className="flex flex-col items-center justify-around pr-5">
                    <MdFavoriteBorder
                      size={21}
                      className="hover:text-red-500"
                    />
                    <button
                      className="border bg-white text-black rounded-md p-2  justify-center items-center  hover:bg-primery hover:text-white transition-all ease-linear duration-300  "
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
                      <MdAddShoppingCart />
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
