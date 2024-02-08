import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTelegram, BiLogoFacebook } from "react-icons/bi";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  updateTotal,
} from "../../redux/features/productSlice/productSlice";
import SearchIco from "../../assets/icons/searchIco";
import Filtermodal from "../filterModule/Filtermodal";
import Cartmodal from "../cartmodal/Cartmodal";
import Navbar from "../navbar/Navbar";

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/Aboutus" },
  { title: "Blog", href: "/blog" },
  { title: "Contact us", href: "/contactus" },
];
const SmIcons = [
  { comp: <AiFillInstagram size={20} color="gray" /> },
  { comp: <BiLogoFacebook size={20} color="gray" /> },
  { comp: <BiLogoTelegram size={20} color="gray" /> },
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
      <header className="w-full flex justify-center items-center bg-white shadow-md sticky top-0 z-10">
        <div className="flex justify-between items-center container">
          <Link to="/">
            <img src={logo} alt="logo" width={150} />
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
                autoComplete="off"
                id="default-search"
                className="rounded-md py-[6px] pr-12 pl-2 outline-none text-sm text-gray-900 border"
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
                </li>
              </Link>
            ))}
          </ul>

          <div className="flex gap-2 ">
            {SmIcons.map((item) => (
              <span
                onMouseOver={({ target }) => (target.style.color = "#4E66EC")}
                onMouseOut={({ target }) => (target.style.color = "gray")}
              >
                {item.comp}
              </span>
            ))}
          </div>
        </div>
      </header>
      <Navbar />
      <Filtermodal
        searchMyData={searchMyData}
        shown={shown}
        close={() => {
          setShown(false);
        }}
      />
      <Cartmodal
        cart={cart}
        shown={shown}
        close={() => {
          setShown(false);
        }}
      />
    </>
  );
};
