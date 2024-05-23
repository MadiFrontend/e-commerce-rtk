import React, { useEffect, useState } from "react";
import SearchIco from "../../assets/icons/SearchIco";
import Filtermodal from "../filterModule/Filtermodal";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice/productSlice";
import { useLocation } from "react-router-dom";

function SerachBox({ data }) {
  const [search, setSearch] = useState(null);
  const [searchMyData, setSearchMyData] = useState([]);
  const [shown, setShown] = useState(false);
  const location = useLocation();

  // This effect runs when the history (route) changes
  useEffect(() => {
    setShown(false);
    setSearch("");
  }, [location]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const searchHandler = (e) => {
    const inputData = e.target.value;
    setSearch(inputData);
    const showData = data.filter((items) =>
      items.title.toLowerCase().includes(search.toLowerCase())
    );
    if (inputData) {
      setSearchMyData(showData);
      setShown(true);
    } else {
      setShown(false);
    }
  };

  return (
    <div>
      {" "}
      <form>
        <div className="relative ">
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
            className="rounded-md container py-[.8rem]  pr-[15rem]  lg:py-[6px]  lg:pr-12 lg:pl-2 outline-none text-sm text-gray-900 border"
            required
          />
        </div>
      </form>
      <Filtermodal
        searchMyData={searchMyData}
        search={search}
        shown={shown}
        close={() => {
          setShown(false);
        }}
      />
    </div>
  );
}

export default SerachBox;
