import React from "react";
import Slider from "../components/heroSection/Slider";
import Cards from "../components/card/Cards";

function Page() {
  return (
    <div>
      <Slider />
      <div className="mt-16">
        <Cards />
      </div>
    </div>
  );
}

export default Page;
