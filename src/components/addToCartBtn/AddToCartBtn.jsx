import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCart } from "../../redux/features/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function AddToCartBtn({ item, className, children }) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.product.cart);

  const handleClick = () => {
    const existingItem = cartData.find((i) => i.id === item.id);
    if (existingItem) {
      toast.warn(`🛒 It's already added!`, {
        className: "bottom-[80px] md:bottom-0 w-full",
        position: "bottom-right",
      });
    } else {
      dispatch(
        addToCart({
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
        })
      );
      toast.success(`🛒 Successfully Added To Cart!`, {
        className: "bottom-[80px] md:bottom-0 w-full",
        position: "bottom-right",
      });
    }
  };
  return (
    <>
      <button className={`${className}`} id="abc" onClick={handleClick}>
        <MdAddShoppingCart />
        {children}
      </button>
    </>
  );
}

export default AddToCartBtn;
