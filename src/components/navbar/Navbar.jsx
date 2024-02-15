import { BiUser, BiHeart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import Cartmodal from "../cartmodal/Cartmodal";
import { Suspense, useEffect, useState } from "react";
import Category from "../category/Category";
import { Link, useLocation } from "react-router-dom";
import { fetchProducts } from "../../redux/features/productSlice/productSlice";

const listItems = [
  {
    title: "Sign in",
    icon: <BiUser />,
  },
  {
    title: "Favorite",
    icon: <BiHeart />,
  },
  {
    title: "Card",
    icon: <HiOutlineShoppingBag />,
  },
];

function Navbar({ cart, updateTotal, amount }) {
  const [shown, setShown] = useState(false);
  const [product, setProduct] = useState(null);
  const data = useSelector((state) => state.product.data);
  const location = useLocation();

  // This effect runs when the history (route) changes
  useEffect(() => {
    setShown(false);
  }, [location]);

  const handlechange = (index) => {
    index === 2 && setShown(!shown);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [dispatch, cart]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    // Function to select a random product from the array
    if (data && data.length > 0) {
      const selectRandomProduct = () => {
        const index = Math.floor(Math.random() * data.length);
        return data[index];
      };

      const storedProductData = localStorage.getItem("selectedProduct");
      const storedDate = storedProductData
        ? JSON.parse(storedProductData).date
        : null;
      const currentDate = new Date().toISOString().split("T")[0];

      if (!storedDate || storedDate !== currentDate) {
        // If it's a new day or no product is stored, select a random product
        const randomProduct = selectRandomProduct();
        // Store the selected product and the current date
        localStorage.setItem(
          "selectedProduct",
          JSON.stringify({ date: currentDate, product: randomProduct })
        );
        setProduct(randomProduct);
      } else {
        // If a product is already stored for today, use it
        const storedProduct = JSON.parse(storedProductData).product;
        setProduct(storedProduct);
      }
    }

    // Set the random product when the component mounts or products update
  }, [data]);

  return (
    <>
      <div className="w-full h-20 hidden md:flex items-center bg-[#262626] text-white sticky top-0 z-[99]">
        <div className="container flex items-center justify-between ">
          {/* first part */}
          <Category />
          <div className="flex gap-5 items-center">
            <select className="text-xs bg-[#262626] duration-300 text-gray-400 border-none outline-none px-1 py-1">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <select className="text-xs bg-[#262626] duration-300 text-gray-400 border-none outline-none px-1 py-1">
              <option>English</option>
              <option>Persian</option>
              <option>Arabic</option>
            </select>
          </div>

          <span className="border-r-[1px] border-gray-500 w-[1px] h-[50px]"></span>
          {/* middle part */}
          <Suspense fallback={<div className="w-[50%]"></div>}>
            {product && (
              <Link to={`/products/${product.id}`}>
                <div className="flex gap-2 items-center">
                  <div className="rounded-2xl w-[50px] h-[50px] overflow-hidden bg-white ">
                    <img
                      src={product.image}
                      className=" w-[80%] h-[80%] m-auto pt-2 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm truncate">
                      {product.title.substring(0, 20)}...
                    </p>
                    <p className="text-xs text-gray-400">
                      {product.description.substring(0, 30)}...
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </Suspense>

          <span className="border-r-[1px] border-gray-500 w-[1px] h-[50px]"></span>
          {/* third part */}
          <ul className="flex gap-5">
            {listItems.map((item, index) => (
              <li
                className="flex gap-1 items-center hover:text-primery cursor-pointer"
                onClick={() => handlechange(index)}
              >
                <span className="">{item.icon}</span>
                {item.title}
                {index === 2 && (
                  <span className="w-6 h-5 flex justify-center items-center text-xs rounded-full bg-[#3dc47e] text-white">
                    {amount}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Cartmodal
          cart={cart}
          shown={shown}
          close={() => {
            setShown(false);
          }}
        />
      </div>
    </>
  );
}

export default Navbar;
