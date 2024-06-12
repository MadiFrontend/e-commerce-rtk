import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../../components/rating/Rating";

function FavoritePage() {
  const mainData = useSelector((state) => state.product.favorite);

  function round(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  return (
    <>
      {!mainData.length ? (
        <div className="flex flex-col mt-36 justify-center items-center text-2xl ">
          <h2>Your Favorite page Is Empty!</h2>
          <Link to="/">
            <button className="border border-primery text-primery px-4 py-1 rounded-2xl mt-3 hover:bg-primery hover:text-white">
              Go To Shop and Add something to your favorites!
            </button>
          </Link>
        </div>
      ) : (
        <div className="min-h-screen mt-10">
          <h2 className="text-center font-bold text-3xl mb-10">
            Your Favorite Products❤️
          </h2>
          <div className="w-full items-center flex flex-col md:flex-row gap-10 flex-wrap justify-between ">
            {mainData.map((item) => {
              return (
                <div
                  className="flex items-center h-[300px] max-w-[250px] w-[250px] flex-col  border border-opacity-60"
                  key={item.id}
                >
                  <div className="flex justify-center w-[200px] h-[200px]">
                    <Link to={`/products/${item.id}`}>
                      <img
                        src={item.image}
                        alt="productImage"
                        className="w-full h-full object-contain p-5"
                      />
                    </Link>
                  </div>
                  <div>
                    <p className="text-center">
                      {item.title.substring(0, 40)}...
                    </p>
                  </div>
                  <div className="flex gap-5 my-3">
                    <Rating rating={item.rating} />
                    <p className="font-semibold text-sm text-gray-400">
                      (
                      {round(
                        item.rating.rate > 4
                          ? Math.floor(item.rating.rate)
                          : item.rating.rate
                      )}
                      )
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default FavoritePage;
