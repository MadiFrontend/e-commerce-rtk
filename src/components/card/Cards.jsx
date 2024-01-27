import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <section>
      <Card filterName="jewelery" titleName="Jewelery Products" />
      <Card filterName="electronics" titleName="Electronics Products" />
      <Card filterName="women's clothing" titleName="Women's clothing" />
    </section>
  );
}

export default Cards;
