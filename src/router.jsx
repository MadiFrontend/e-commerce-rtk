import { createBrowserRouter } from "react-router-dom";
import Slider from "./heroSection/Slider";
import Cards from "./card/Cards";
import Cartpage from "./cartPage/Cartpage";
import Finalpage from "./Finalpage/Finalpage";
import ContactUs from "./contact-us/ContactUs";
import Detailpage from "./Detailpage/Detailpage";
import MainLayouts from "./layouts/MainLayout";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Slider />,
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
