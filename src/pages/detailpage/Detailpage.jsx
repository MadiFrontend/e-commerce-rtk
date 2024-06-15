import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/productSlice/productSlice";
import { MdAddShoppingCart, MdFavoriteBorder } from "react-icons/md";
import Related from "../../components/relatedproducts/Related";
import AddToCartBtn from "../../components/addToCartBtn/AddToCartBtn";

const sizeListItems = [
  {
    size: "xs",
    isAvailable: false,
  },
  {
    size: "s",
    isAvailable: true,
  },
  {
    size: "m",
    isAvailable: true,
  },
  {
    size: "l",
    isAvailable: true,
  },
  {
    size: "xl",
    isAvailable: false,
  },
];

const ColorListItems = [
  {
    color: "bg-[#750430]",
    isAvailable: false,
  },
  {
    color: "bg-[#00a95d]",
    isAvailable: true,
  },
  {
    color: "bg-[#a2d2fc]",
    isAvailable: true,
  },
  {
    color: "bg-[#ff7a00]",
    isAvailable: false,
  },
];

function Detailpage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const { productId } = useParams();

  const singlePost = data.find((item) => item.id === parseInt(productId));

  function calculateDiscountPercentage(originalPrice, discountedPrice) {
    const discountRate =
      ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discountRate.toFixed();
  }

  function round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  return (
    <section className="max-h-max w-full ">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 md:h-screen"
        key={singlePost.id}
      >
        <div className="overflow-hidden w-full h-[350px] md:h-[500px] md:w-[80%] md:mt-14 flex justify-center items-center  ">
          <div className="w-full h-full flex justify-center items-center ">
            <img
              src={singlePost.image}
              alt="productImage"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </div>

        <div className="w-full flex justify-center flex-col gap-8 ">
          <div>
            <p className="text-[25px] font-bold" title={singlePost.title}>
              {singlePost.title.substring(0, 100)} ...
            </p>
            {/* <span className="text-xl font-semibold text-gray-500">
              ${singlePost.price}
            </span> */}
          </div>
          {/* sizes */}
          <ul className="flex gap-5">
            <p>Size</p>
            {sizeListItems.map((item) => (
              <li
                className={`border px-3 py-1 rounded-md hover:shadow-md ${
                  !item.isAvailable && "text-gray-200"
                } `}
              >
                <button>{item.size.toUpperCase()}</button>
              </li>
            ))}
          </ul>

          {/* colors */}
          <div className="flex gap-5">
            <p>Color</p>
            {ColorListItems.map((item) => (
              <div
                className={`rounded-full w-5 h-5 hover:shadow-md cursor-pointer ${item.color} `}
              ></div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pl-4 w-full py-3 h-auto rounded-md bg-[#e9e9e9]">
            <div className="flex gap-5 text-lg font-bold text-gray-500 ">
              {singlePost.category === "jewelery" ? (
                ""
              ) : (
                <span className="bg-red-500 w-16 h-6 rounded-md flex justify-center items-center singlePosts-center text-white text-xs ">
                  %
                  {calculateDiscountPercentage(
                    singlePost.price,
                    round(
                      singlePost.price > 9 && singlePost.price < 55
                        ? singlePost.price - 5
                        : singlePost.price - 50
                    )
                  )}
                  <p className="font-normal pl-1">OFF</p>
                </span>
              )}
              <p className="text-red-500 ">
                {singlePost.category === "jewelery"
                  ? ""
                  : `$ ${round(
                      singlePost.price > 9 && singlePost.price < 55
                        ? singlePost.price - 5
                        : singlePost.price - 50
                    )}`}
              </p>
              <p
                className={` text-gray-500 line-through ml-5  ${
                  singlePost.category === "jewelery" &&
                  " text-red-500 no-underline !ml-0"
                }`}
              >
                ${singlePost.price}
              </p>
              |<p className="font-normal"> + Delivery </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <AddToCartBtn
              item={singlePost}
              className="hover:text-white rounded-md hover:bg-primery hover:border-primery flex gap-2 items-center  border border-gray-500 px-5 py-3"
            >
              {" "}
              Add to cart
            </AddToCartBtn>
            <button
              className="hover:text-white rounded-full hover:bg-red-500 hover:border-red-500 flex gap-2 items-center border border-gray-500 px-3 py-3"
              title="add to favorite"
            >
              <MdFavoriteBorder size={21} />
            </button>
          </div>
        </div>
      </div>
      <Related data={data} singlePost={singlePost} />
    </section>
  );
}

export default Detailpage;
