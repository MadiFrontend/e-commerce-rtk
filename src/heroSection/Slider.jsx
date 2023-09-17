import React from "react";
import slider1 from "../../public/images/slider1.jpg";
import Card from "../card/Card";

function Slider() {
  return (
    <div className="w-full mt-16 pt-16">
      <img src={slider1} alt="slider" className="w-full" />
      <Card filterName="jewelery" titleName="Jewelery Products" />
      <Card filterName="electronics" titleName="Electronics Products" />
      <Card filterName="women's clothing" titleName="Women's clothing" />
    </div>
  );
}

export default Slider;
