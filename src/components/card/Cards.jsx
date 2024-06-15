import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function Cards() {
  const mainData = useSelector((state) => state.product.data);
  return (
    <section>
     
    </section>
  );
}

export default Cards;
