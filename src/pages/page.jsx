import React from "react";
import Slider from "../components/heroSection/Slider";
import Cards from "../components/card/Cards";

function Page() {
  return (
    <>
      <Slider />
      <div className="mt-16">
        <Cards />
      </div>
    </>
  );
}

export default Page;
