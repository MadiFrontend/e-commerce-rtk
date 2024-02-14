import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

import {
  incrementQuantity,
  decrementQuantity,
  fetchProducts,
  removeCartItems,
  removeItem,
} from "../../redux/features/productSlice/productSlice";
import Related from "../../components/relatedproducts/Related";

function Cartpage() {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.product.cart);
  const { total, data } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {!mainData.length ? (
        <div className="flex flex-col mt-36 justify-center items-center text-2xl ">
          <h2>Your Cart Is Empty!</h2>
          <Link to="/">
            <button className="border border-primery text-primery px-4 py-1 rounded-2xl mt-3 hover:bg-primery hover:text-white">
              Go To Shop!
            </button>
          </Link>
        </div>
      ) : (
        <div className="container min-h-screen mt-10 grid w-full grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 mb-12 ">
          <div className="max-w-full flex flex-col gap-5">
            {mainData.map((item) => {
              return (
                <div
                  className="md:flex w-full md:justify-between md:items-center grid grid-cols-[1fr_2fr] "
                  key={item.id}
                >
                  <div className="flex justify-center  w-[100px] h-[110px] border rounded-[10px] border-opacity-60">
                    <Link to={`/products/${item.id}`}>
                      <div className="overflow-hidden w-full h-[100px] ">
                        <div className="w-full h-full flex justify-center items-center ">
                          <img
                            src={item.image}
                            alt="productImage"
                            className="max-w-[80%] h-full object-contain"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className=" flex w-full flex-col lg:flex-row gap-3 items-center mt-5  ">
                    <div className="mr-auto w-full md:pl-5 ">
                      <p className="">{item.title.substring(0, 20)}...</p>
                    </div>
                    <div className="flex mr-auto w-full justify-between lg:gap-20 items-center">
                      <p className="font-semibold text-gray-500 ">
                        ${item.price}
                      </p>

                      <div className="flex items-center gap-5 pr-3">
                        <button
                          className="border w-[28px] h-[28px] flex items-center justify-center text-xs cursor-pointer"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                        <p className="bg-[#eee] rounded-full w-[25px] h-[25px] flex items-center justify-center text-xs">
                          {item.quantity}
                        </p>
                        <button
                          className="border w-[28px] h-[28px] flex items-center justify-center text-xs cursor-pointer"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                        <FaRegTrashCan
                          size={16}
                          className="cursor-pointer text-gray-400"
                          onClick={() => dispatch(removeItem(item.id))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full">
            {mainData.length && (
              <div className="bg-[#e9e9e9] rounded-md w-full h-[293px] flex flex-col px-5 py-5 lg:sticky lg:top-32 lg:z-12 lg:ml-auto  mb-12">
                <h2 className="font-semibold text-sm pb-5">Order Summary</h2>
                <div className="flex  justify-between items-center">
                  <div className="flex flex-col gap-4 text-gray-500">
                    <p>Price</p>
                    <p>Shipping</p>
                    <p>Tax</p>
                    <p className="font-semibold text-black">Total Price</p>
                  </div>
                  <div className="flex flex-col gap-4 ">
                    <span>${parseFloat(total).toFixed(2)}</span>
                    <span>$0</span>
                    <span>$0</span>

                    <span className="font-semibold">
                      ${parseFloat(total).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link to="/finalpage">
                  <button
                    className="border border-gray-500 text-gray-500 w-full py-1 mt-6 text-[20px] rounded-[10px] hover:border-primery hover:bg-primery hover:text-white"
                    onClick={() => dispatch(removeCartItems())}
                  >
                    SHOP NOW
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {mainData.length ? <Related data={data} singlePost={data[0]} /> : ""}
    </>
  );
}

export default Cartpage;
