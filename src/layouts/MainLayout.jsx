import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../hooks/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MainLayout() {
  return (
    <>
      <div className="min-h-screen grid grid-rows-[90px_1fr_auto] text-[#222] text-myFont ">
        <Header />
        <main className="container min-h-[70vh]">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
      <ToastContainer />
    </>
  );
}

export default MainLayout;
