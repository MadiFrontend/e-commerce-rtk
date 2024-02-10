import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Cartpage from "../pages/cartPage/Cartpage";
import Finalpage from "../pages/Finalpage/Finalpage";
import Detailpage from "../pages/Detailpage/Detailpage";
import ContactUs from "../pages/contact-us/ContactUs";
import Page from "../pages/page";
import Cards from "../components/card/Cards";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

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
        element: <Page />,
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
        element: <Finalpage />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "products/:productId",
        element: <Detailpage />,
      },
    ],
  },
]);
export default router;
