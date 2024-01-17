import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[90px_1fr_auto] text-[#222] text-myFont ">
      <Header />
      <main className="container mt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
