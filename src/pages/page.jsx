import { useSelector } from "react-redux";
import HeroSection from "../components/heroSection/Hero-Section";
import NewArrival from "../components/newArrivals/NewArrival";
import Card from "../components/card/Card";

function MainPage() {
  const mainData = useSelector((state) => state.product.data);
  return (
    <>
      <HeroSection />
      <div className="mt-16">
        <Card
          filterName="jewelery"
          titleName="Jewelery Products"
          mainData={mainData}
        />
        <Card
          filterName="women's clothing"
          titleName="Women's clothing"
          mainData={mainData}
        />
        <div className="mt-20 w-full relative">
          {/* <span className="absolute top-32 left-10">
            <Timer />
          </span> */}
          <img
            src="/images/offerbanner1.png"
            alt="offerbanner1"
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90 cursor-pointer"
          />
        </div>
        <Card
          filterName="electronics"
          titleName="Electronics Products"
          mainData={mainData}
        />
        <NewArrival />
      </div>
    </>
  );
}

export default MainPage;
