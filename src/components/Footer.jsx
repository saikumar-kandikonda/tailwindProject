import React from "react";
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="text-white md:flex  justify-evenly items-start h-full max-w-[1240px] mx-auto px-4 my-10">
      <div className="icons w-3/5 mr-8">
        <h1 className="text-2xl font-bold text-[#00df9a] my-2">React.</h1>
        <p className="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          blanditiis deserunt sunt vero culpa officia saepe, ab vel suscipit
          enim dolore alias illo? Debitis labore exercitationem in culpa tenetur
          ex!
        </p>
        <div className="flex justify-start py-5">
          <FaFacebookSquare size={30} className="mr-12 md:mr-12" />
          <FaDribbbleSquare size={30} className="mr-12 md:mr-12" />
          <FaGithubSquare size={30} className="mr-12 md:mr-12" />
          <FaInstagramSquare size={30} className="mr-12 md:mr-12" />
          <FaTwitterSquare size={30} className="mr-12 md:mr-12" />
        </div>
      </div>
      <div className="ol md:w-2/5 sm:w-2/5">
        <h5 className="font-medium text-gray-400">Solutions</h5>
        <ol>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Insights</li>
        </ol>
      </div>
      <div className="ol md:w-2/5 sm:w-2/5 ">
        <h5 className="font-medium text-gray-400">Support</h5>
        <ol>
          <li className="py-2 text-sm">Pricing</li>
          <li className="py-2 text-sm">Documentation</li>
          <li className="py-2 text-sm">Guides</li>
          <li className="py-2 text-sm">API Status</li>
        </ol>
      </div>
      <div className="ol md:w-2/5 sm:w-2/5">
        <h5 className="font-medium text-gray-400">Company</h5>
        <ol>
          <li className="py-2 text-sm">Blogs</li>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Jobs</li>
          <li className="py-2 text-sm">Press</li>
          <li className="py-2 text-sm">Careers</li>
        </ol>
      </div>
      <div className="ol md:w-2/5 sm:w-2/5">
        <h5 className="font-medium text-gray-400">Legal</h5>
        <ol>
          <li className="py-2 text-sm">Policy</li>
          <li className="py-2 text-sm">Claim</li>
          <li className="py-2 text-sm">Terms</li>
       
        </ol>
      </div>
    </div>
  );
}
export default Footer;
