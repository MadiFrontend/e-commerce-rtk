import React from "react";

function HeroSection() {
  return (
    <section className="w-screen h-auto relative left-[50.4%] py-5 translate-x-[-51%] bg-[#f2f0ff]">
      <div className="container grid grid-cols-[1fr_1fr] overflow-x-hidden">
        <div className="flex flex-col justify-center gap-10 ">
          <h1 className="font-bold text-4xl">Collections</h1>
          <p className="text-lg">
            you can explore ans shop many differnt collection
            <br />
            from various barands here.
          </p>
          <button className="p-4 w-[30%] bg-cyan-400">Shop now!</button>
        </div>
        <img src="/images/hero.png" width={500} />
      </div>
    </section>
  );
}

export default HeroSection;
