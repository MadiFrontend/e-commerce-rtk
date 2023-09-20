import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice/productSlice";
import { BsFillTrashFill } from "react-icons/bs";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/features/productSlice/productSlice";
import Title from "../tilte/Title";
import { Link } from "react-router-dom";

function Cartpage() {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.product.cart);
  const { total } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <div className="mt-28">
        <Title>Shopping Cart</Title>
      </div>
      <div className="flex">
        <div className="grid w-[100%] grid-cols sm:grid-cols md:grid-cols-1 gap-5  mb-28">
          {mainData.length === 0 ? (
            <div className="flex flex-col justify-center items-center text-2xl ">
              <h2>Your Cart Is Empty!</h2>
              <Link to="/">
                <button className="border border-primery text-primery px-4 py-1 rounded-2xl mt-3 hover:bg-primery hover:text-white">
                  Go To Shop!
                </button>
              </Link>
            </div>
          ) : (
            mainData.map((item) => {
              return (
                <div className="border p-5 flex justify-between items-center w-[70%] ">
                  <div className="w-[150px] h-[150px] mr-10 bg-red-500">
                    <img
                      src={item.image}
                      alt="image"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-[50%]">
                    <p className="font-bold text-2xl  ">{item.title}</p>
                    <p className="font-bold text-2xl text-primery mt-4">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex gap-8 ml-auto items-center ">
                    <BsFillTrashFill
                      color="red"
                      size={25}
                      className="cursor-pointer"
                      onClick={() => dispatch(removeItem(item.id))}
                    />
                    <div className="flex gap-3">
                      <button
                        className="border px-3 py-1 cursor-pointer"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                      <p className="bg-[#eee] rounded-full px-3 py-1">
                        {item.quantity}
                      </p>
                      <button
                        className="border px-3 py-1 cursor-pointer"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="w-[25%] h-[293px] flex flex-col items-center justify-center fixed right-0 mr-24  border-[2px] border-[#eee]">
          <h2 className="font-bold text-[20px]">Total Price</h2>
          <h2 className="font-bold text-primery text-[18px]">
            ${parseFloat(total).toFixed(2)}
          </h2>
          <button className="border border-primery text-primery px-4 py-1 rounded-[10px] mt-3 hover:bg-primery hover:text-white">
            Purches!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
