import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1 className="text-white"> this is menu</h1> */}
      <NavBar />
      <div className="heroDiv md:h-[85vh] flex justify-center md:items-center align-middle">
        <Hero />
      </div>
      <div className="w-full bg-white ">
      <Analytics />
      </div>
      <div className="w-full bg-[#000300] text-white ">
      <Newsletter />
      </div>
      <div className="w-full bg-white text-black ">
      <Cards />
      </div>
      <div className="w-full bg-black text-white ">
      <Footer />
      </div>
    </div>
  );
}

export default App;
