import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  updateTotal,
} from "../../redux/features/productSlice/productSlice";
import SearchIco from "../../assets/icons/searchIco";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/Aboutus" },
  { title: "Blog", href: "/blog" },
  { title: "Contact us", href: "/contactus" },
];

export const Header = () => {
  const [search, setSearch] = useState(" ");
  const [searchMyData, setSearchMyData] = useState([]);
  const [shown, setShown] = useState(false);

  const dispatch = useDispatch();
  const { data, cart, amount } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(updateTotal());
  }, [dispatch, cart]);

  const searchHandler = (e) => {
    const inputData = e.target.value;
    setSearch(inputData);
    const showData = data.filter((items) =>
      items.title.toLowerCase().includes(search.toLowerCase())
    );
    if (inputData) {
      setSearchMyData(showData);
    } else {
      setSearchMyData([]);
    }
  };

  return (
    <>
      <header className="w-full flex justify-center items-center bg-white opacity-95 shadow-md sticky top-0 z-10">
        <div className="flex justify-between items-center container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <form>
            <div className="relative">
              <div className="absolute inset-y-0  flex items-center pr-3 pointer-events-none right-0">
                <SearchIco width={15} />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={searchHandler}
                // onClick={showHandler}
                autoComplete="off"
                id="default-search"
                className=" w-full py-[6px] pr-12 pl-2 outline-none text-sm text-gray-900 border"
                required
              />
            </div>
          </form>

          <ul className="flex gap-16">
            {navigationItems.map((item) => (
              <Link to={item.href}>
                <li
                  className="hover:text-primery cursor-pointer rounded-3xl transition duration-300 flex items-center"
                  key={`id-${item.href}-${item.title}`}
                >
                  {item.title}
                  {/* <IoIosArrowDown size={10} /> */}
                </li>
              </Link>
            ))}
          </ul>

          <div className="flex gap-10 ">
            {/* <Link to="/cartpage"> */}
            <div className="relative">
              <AiOutlineShoppingCart
                size={25}
                className="cursor-pointer text-[#6c757d] hover:text-primery"
                onClick={() => {
                  setShown(!shown);
                }}
              />
              <span className="px-[4px] py-[1px] text-xs rounded-full bg-primery absolute bottom-5 left-4 text-white">
                {amount}
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
