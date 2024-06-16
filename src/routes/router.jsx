import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Cartpage from "../pages/cartPage/Cartpage";
import FP from "../pages/finalpage/FP";
import ContactUs from "../pages/contact-us/ContactUs";
import MainPage from "../pages/page";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Detailpage from "../pages/detailpage/Detailpage";
import SignIn from "../pages/signin/SignIn";
import { CategoriesMobile } from "../pages/categories/CategoriesMobile";
import FavoritePage from "../pages/favoritePage/FavoritePage";

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
      // {
      //   path: "products",
      //   element: <Cards />,
      // },
      {
        path: "cartpage",
        element: <Cartpage />,
      },
      {
        path: "finalpage",
        element: <FP />,
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
      {
        path: "favorite",
        element: <FavoritePage />,
      },
    ],
  },
]);
export default router;
