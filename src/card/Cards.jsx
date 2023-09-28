import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="mt-16">
      <Card filterName="jewelery" titleName="Jewelery Products" />
      <Card filterName="electronics" titleName="Electronics Products" />
      <Card filterName="women's clothing" titleName="Women's clothing" />
    </div>
  );
}

export default Cards;
