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

function Cartpage() {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.product.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="grid grid-cols sm:grid-cols md:grid-cols-1 gap-5 mt-28">
      <Title>Shopping Cart</Title>
      {mainData ? (
        mainData.map((item) => {
          return (
            <div className="border p-5 flex justify-between items-center w-[70%] ">
              <div className="w-[150px] h-[150px] mr-10 bg-red-500">
                <img src={item.image} alt="image" className="w-full h-full" />
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
      ) : (
        <h2>your cart is empty!</h2>
      )}
    </div>
  );
}

export default Cartpage;
