import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/productSlice/productSlice";

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
    isAvailable: true,
  },
];

function Detailpage() {
  const navigat = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const { productId } = useParams();

  const singlePost = data.find((item) => item.id === parseInt(productId));
  console.log(productId);
  return (
    <div className="h-screen w-full ">
      <div className="grid grid-cols-2 h-screen" key={singlePost.id}>
        <div className="overflow-hidden w-full h- flex justify-center items-center ">
          <div className="w-3/4 h-3/4 flex justify-center items-center ">
            <img
              src={singlePost.image}
              alt="productImage"
              className="w-5/6 h-5/6 object-contain"
            />
          </div>
        </div>

        <div className="w-full flex justify-center flex-col gap-10 ">
          <p className="text-[30px] font-bold">{singlePost.title}</p>
          <span className="text-xl font-semibold ">${singlePost.price}</span>
          {/* sizes */}
          <ul className="flex gap-5">
            <p>Size</p>
            {sizeListItems.map((item) => (
              <li
                className={`border px-3 py-1 rounded-md ${
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
              <div className={`rounded-full w-5 h-5 ${item.color}`}></div>
            ))}
          </div>
          <span className=" w-[80%] h-[22%] overflow-hidden">
            <p className="text-[16px]">
              {singlePost.description.substring(0, 300)}...
            </p>
          </span>
          <div className="flex justify-between items-center">
            <button
              id="abc"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: singlePost.id,
                    title: singlePost.title,
                    image: singlePost.image,
                    price: singlePost.price,
                  })
                )
              }
            >
              add to cart
            </button>
            <button onClick={() => navigat(-1)} className="hover:text-primery">
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailpage;
