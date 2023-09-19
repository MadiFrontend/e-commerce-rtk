import "./App.css";
import Card from "./card/Card";
import { Header } from "./header/Header";
import Slider from "./heroSection/Slider";
// import { Provider, useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cartpage from "./cartPage/Cartpage";
// import { useEffect } from "react";
// import { updateTotal } from "./redux/features/productSlice/productSlice";

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-[#222] ">
      <Header />
      <div className=" text-myFont w-[85%] ">
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/cartpage" element={<Cartpage />} />
          {/* <Route path="/newproducts" element={<Newproducts />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
