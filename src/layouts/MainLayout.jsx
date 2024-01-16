import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[90px_1fr_auto] text-[#222] text-myFont ">
      <div className="bg-black">.</div>
      <main className="container">
        <Outlet />
      </main>
      <footer className="w-full bg-gray-300 ">hi this is footer</footer>
    </div>
  );
}

export default MainLayout;
