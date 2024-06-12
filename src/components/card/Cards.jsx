import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function Cards() {
  const mainData = useSelector((state) => state.product.data);
  return (
    <section>
      <Card
        filterName="jewelery"
        titleName="Jewelery Products"
        mainData={mainData}
      />
      <Card
        filterName="electronics"
        titleName="Electronics Products"
        mainData={mainData}
      />
      <Card
        filterName="women's clothing"
        titleName="Women's clothing"
        mainData={mainData}
      />
    </section>
  );
}

export default Cards;
