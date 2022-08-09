import React from "react";
import Laptop from "../assets/laptop.jpg";

function Newsletter() {
  return (
    <div className="grid md:grid-cols-2 grid-col text-middle align-middle py-8 max-w-[1240px] mx-auto">
      <div className="flex justify-center flex-col align-middle my-auto md:p-8 p-2">
      {/* text-[#00df9a] bg-[#000300]  */}
       <h1 className="text-4xl font-extrabold my-4">Want tips & tricks to optimize your flow?</h1>
       <p className="my-4">Sign up to our newsletter and stay up to date. </p>
      </div>
      <div className="md:p-16 p-2">
            <input type="text" placeholder="Enter your email" className="h-[40px] w-[280px] rounded-md p-4 mr-4 mb-8 text-black border-none outline-none" />
            <button className="text-[#000300] bg-[#00df9a] h-[40px] w-[120px] rounded-md mx-auto my-auto">
          Notify Me
        </button>
        <p className="text-medium">we care about the protection of your data. Read our <span className="text-medium text-[#00df9a] underline">Privacy Policy</span></p>
      </div>
    </div>
  );
}

export default Newsletter;
