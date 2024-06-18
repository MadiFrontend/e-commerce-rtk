import React from "react";
import Title from "../title/Title";

function NewArrival() {
  return (
    <section className="mt-28">
      <Title>
        <b>New Arrival</b>
      </Title>
      <div className="grid grid-cols-2 grid-rows-8 md:grid-cols-4 md:grid-rows-4 gap-4 w-full h-[650px] overflow-hidden">
        <div className="col-span-2 row-span-4 h-auto w-full">
          <img
            src="/images/frame1.jpg"
            alt="frame1 "
            className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90 cursor-pointer"
          />
        </div>
        <div className="col-span-2 row-span-2 row-start-5 md:col-start-3 md:row-start-1 w-full h-auto overflow-hidden">
          <img
            src="/images/frame2.jpg"
            alt="frame2"
            className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90 cursor-pointer"
          />
        </div>
        <div className="row-span-2 md:col-start-3 md:row-start-3 row-start-7 w-full h-auto overflow-hidden">
          <img
            src="/images/frame3.jpg"
            alt="frame3"
            className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90 cursor-pointer"
          />
        </div>
        <div className="row-span-2 md:col-start-4 md:row-start-3 row-start-7 w-full  h-auto overflow-hidden">
          <img
            src="/images/frame4.jpg"
            alt="frame4"
            className="object-cover w-full h-full transition-opacity duration-300 hover:opacity-90 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
