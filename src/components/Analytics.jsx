import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="grid md:grid-cols-2 grid-col align-middle py-8 max-w-[1240px] mx-auto">
      <div className="flex justify-center align-middle">
        <img src={Laptop} alt="/" className="mx-auto my-4 w-[500px]" />
      </div>
      <div className="p-10">
        <p className="uppercase text-md font-bold my-2">
          Data Analytics Dashboard
        </p>
        <h1 className="text-2xl font-bold text-[#00df9a] my-2">
          Manage data analytics centrally!
        </h1>
        <p className="my-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nemo
          error magni, consequuntur commodi beatae reprehenderit obcaecati iste
          iure culpa, earum ipsa. Rerum consequuntur sapiente dolorum dolor
          quidem, officiis quam.
        </p>
        <button className="text-[#00df9a] bg-[#000300] h-[40px] w-[120px] rounded-md mx-auto my-20">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Analytics;
