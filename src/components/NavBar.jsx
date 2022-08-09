import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#00df9a]">Logo</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">About</li>
        <li className="p-4">Resources</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav == true
            ? "fixed top-0 h-full left-0 w-[50%] border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] pt-16  ml-10">Logo</h1>
        <ul className="pt-16 uppercase  ml-10">
          <li className="p-3 border-b border-b-gray-700">Home</li>
          <li className="p-3 border-b border-b-gray-700">Company</li>
          <li className="p-3 border-b border-b-gray-700">About</li>
          <li className="p-3 border-b border-b-gray-700">Resources</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
