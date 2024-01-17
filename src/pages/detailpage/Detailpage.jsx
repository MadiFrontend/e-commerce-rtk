import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/productSlice/productSlice";

function Detailpage() {
  const navigat = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const { productId } = useParams();

  const singlePost = data.find((item) => item.id === parseInt(productId));
  console.log(productId);
  return (
    <div className="h-full flex justify-center items-center ">
      <div className="flex justify-between items-center" key={singlePost.id}>
        <div className="overflow-hidden w-[50%] h-[50%] ">
          <img
            src={singlePost.image}
            alt="productImage"
            className="w-[50%] h-[30%]"
          />
        </div>
        <div className="w-[50%] h-[100%]  flex flex-col gap-10">
          <p className="text-[30px] font-bold mt-10 ">{singlePost.title}</p>
          <span className=" w-[80%] h-[22%] overflow-hidden">
            <p className="text-[16px]">
              {singlePost.description.substring(0, 300)}...
            </p>
          </span>
          <div className="flex justify-between items-center">
            <button
              className="border bg-white text-primery rounded-2xl w-[150px] h-[50px]  justify-center items-center border-primery  hover:bg-primery  hover:text-white transition-all ease-linear duration-300  "
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
