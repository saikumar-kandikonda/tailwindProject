import React from "react";
import Typed from "react-typed";
function Hero() {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <p className="text-[#00df9a]  uppercase md:text-2xl text-xl font-bold m-4">
        Growing with Data analytics
      </p>
      <h1 className="md:text-7xl text-3xl font-bold m-4">Grow with DATA</h1>
      <div className="m-2">
      
        Fast, Flexible financing for
        <span className="px-2 text-[#00df9a]">
          <Typed
            strings={["BTB","BTC","SASS"]}
            typeSpeed={150}
            backSpeed={170}
            loop
          />
        </span>
        platforms
      </div>
      <p className="text-xl text-gray-500 py-2">Monitor your data analytics to increase revenue for BTB, BTC, & SASS Platforms</p>
      <button className="bg-[#00df9a] text-gray-900 h-[40px] w-[120px] rounded-md my-10 mx-auto">Get Started</button>
    </div>
  );
}
export default Hero;
