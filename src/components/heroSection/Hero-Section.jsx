import React from "react";

function HeroSection() {
  return (
    <section className="w-screen  h-auto relative left-[50%] translate-x-[-50%] bg-[#ECD2FA] ">
      <div className="container grid grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-center gap-10 ">
          <h1 className="font-bold text-4xl">Collections</h1>
          <p className="text-lg">
            you can explore ans shop many differnt collection
            <br />
            from various barands here.
          </p>
          <button className="p-4 w-[30%] bg-cyan-400">Shop now!</button>
        </div>
        <img src="/images/hero.png" />
      </div>
    </section>
  );
}

export default HeroSection;
