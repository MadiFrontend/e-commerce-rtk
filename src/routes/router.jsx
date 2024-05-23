import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Cartpage from "../pages/cartPage/Cartpage";
// import Finalpage from "../pages/finalpage/Finalpage";
import ContactUs from "../pages/contact-us/ContactUs";
import MainPage from "../pages/page";
import Cards from "../components/card/Cards";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Detailpage from "../pages/detailpage/Detailpage";
import SignIn from "../pages/signin/SignIn";
import { CategoriesMobile } from "../pages/categories/CategoriesMobile";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "products",
        element: <Cards />,
      },
      {
        path: "cartpage",
        element: <Cartpage />,
      },
      {
        path: "finalpage",
        element: <Cartpage />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "categories",
        element: <CategoriesMobile />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "products/:productId",
        element: <Detailpage />,
      },
    ],
  },
]);
export default router;
