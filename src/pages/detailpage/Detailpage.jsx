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

  return (
    <section className="max-h-max w-full ">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 md:h-screen"
        key={singlePost.attributes.id}
      >
        <div className="overflow-hidden w-full h-[350px] md:h-[500px] md:w-[80%] md:mt-14 flex justify-center items-center  ">
          <div className="w-full h-full flex justify-center items-center ">
            <img
              src={
                import.meta.env.VITE_REACT_APP_URL +
                singlePost.attributes.img.data.attributes.url
              }
              alt="productImage"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </div>

        <div className="w-full flex justify-center flex-col gap-8 ">
          <div>
            <p className="text-[25px] font-bold" title={singlePost.title}>
              {singlePost.attributes.title.substring(0, 100)} ...
            </p>
            <span className="text-xl font-semibold text-gray-500">
              ${singlePost.attributes.price}
            </span>
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
            <p className="text-lg font-bold">
              ${singlePost.attributes.price * 2}
            </p>
            <div className="w-[95%] border border-b-gray-300 mr-auto"></div>
            <p className="text-gray-500">+ Delivery = Total price</p>
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
      {/* <Related data={data} singlePost={singlePost} /> */}
    </section>
  );
}

export default Detailpage;
