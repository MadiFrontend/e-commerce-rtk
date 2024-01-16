import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";

function MainLayout() {
  return (
    <div className="grid grid-rows-[200px, 1fr, 200px] text-[#222]">
      <Header />
      <main className=" text-myFont  ">
        {/* <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/products" element={<Cards />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/finalpage" element={<Finalpage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="products/:productId" element={<Detailpage />} />
        </Routes> */}
        <Outlet />
      </main>
      <footer className="bg-red ">hi this is footer</footer>
    </div>
  );
}

export default MainLayout;
