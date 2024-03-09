import React from "react";

function HeroSection() {
  return (
    <section className="w-full rounded-2xl overflow-hidden mt-10 h-auto bg-[#f2f0ff]">
      {/* <div className="container grid grid-cols-[1fr_1fr] overflow-x-hidden">
        <div className="flex flex-col justify-center gap-10 ">
          <h1 className="font-bold text-4xl">Collections</h1>
          <p className="text-lg">
            you can explore ans shop many differnt collection
            <br />
            from various barands here.
          </p>
          <button className="p-4 w-[30%] bg-cyan-400">Shop now!</button>
        </div>
        
      </div> */}
      <img src="/images/slider1.jpg" className="bg-cover w-full" />
    </section>
  );
}

export default HeroSection;
