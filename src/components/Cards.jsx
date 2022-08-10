import React from "react";
import Single from "../assets/single.jpg";
import Double from "../assets/double.jpg";
import Triple from "../assets/triple.jpg";

function Cards() {
  return (
    <div className="p-12 md:p-36 max-w-[1240px] my-auto md:flex justify-between items-center mx-auto">
      {/* card1 */}
      <div className="card flex flex-col border mb-20 border-gray-200 w-full md:w-1/4   items-center rounded-md ease-in-out duration-100  hover:scale-110">
        <img
          src={Single}
          alt="/"
          className="h-[50px] w-[80px] mt-[-60px] bg-white"
        />
        <h1 className="text-2xl font-bold py-2">Single User</h1>
        <p className="py-2 text-2xl font-extrabold">$149</p>
        <ul className="my-4 w-full text-center">
          <li className="border-b border-gray-400 py-1 my-2">500 GB Storage</li>
          <li className="border-b border-gray-400 py-1 my-2">1 User allowed</li>
          <li className="border-b border-gray-400 py-1 my-2">send upto 2GB</li>
        </ul>
        <button className="text-[#000300] bg-[#00df9a] h-[40px] w-[120px] rounded-md mx-auto my-auto">
          Start Trail
        </button>
      </div>
      {/*card2 */}
      <div className="card flex flex-col border mb-20 bg-gray-200 border-gray-200  w-full md:w-1/4  items-center rounded-md ease-in-out duration-100  hover:scale-110">
        <img
          src={Double}
          alt="/"
          className="h-[50px] w-[80px] mt-[-60px] bg-white"
        />
        <h1 className="text-2xl font-bold py-2">Partnership</h1>
        <p className="py-2 text-2xl font-extrabold">$199</p>
        <ul className="my-4 w-full text-center">
          <li className="border-b border-gray-400 py-1 my-2">1 TB Storage</li>
          <li className="border-b border-gray-400 py-1 my-2">3 Users allowed</li>
          <li className="border-b border-gray-400 py-1 my-2">send upto 10GB</li>
        </ul>
        <button className="text-[#00df9a] bg-[#000300]  h-[40px] w-[120px] rounded-md mx-auto my-auto">
          Start Trail
        </button>
      </div>
      {/* card3 */}
      <div className="card flex flex-col border mb-20 border-gray-200 w-full md:w-1/4   items-center rounded-md ease-in-out duration-100  hover:scale-110">
        <img
          src={Triple}
          alt="/"
          className="h-[50px] w-[80px] mt-[-60px] bg-white"
        />
        <h1 className="text-2xl font-bold py-2">Group Account</h1>
        <p className="py-2 text-2xl font-extrabold">$299</p>
        <ul className="my-4 w-full text-center">
          <li className="border-b border-gray-400 py-1 my-2">5 TB Storage</li>
          <li className="border-b border-gray-400 py-1 my-2">10 Users allowed</li>
          <li className="border-b border-gray-400 py-1 my-2">send upto 20 GB</li>
        </ul>
        <button className="text-[#000300] bg-[#00df9a] h-[40px] w-[120px] rounded-md mx-auto my-auto">
          Start Trail
        </button>
      </div>
    </div>
  );
}

export default Cards;
