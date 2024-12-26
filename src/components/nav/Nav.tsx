"use client";

//import { useState } from "react";
//import Navbar from "../navbar/Navbar";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import Icon from "../icon/Icon";
import Brand from "../brand/Brand";


const Nav = () => {
  //const [barIsOpen, setBarIsOpen] = useState(false);

//   const openBar = () => setBarIsOpen(true);
//   const closeBar = () => setBarIsOpen(false);

  return (
    <>
      <nav>
        <Brand />
        <div>
          <button>Connect wallet</button>
          <Icon icon={MenuIcon} />
        </div>
      </nav>
      {/* {barIsOpen && <Navbar closeBar={closeBar} />} */}
    </>
  );
};



// const SolanaCoin = () => {
//   return (
//     <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
//   {/* <!-- Rotating Group --> */}
//   <g>
//     {/* <!-- Coin Base --> */}
//     <circle cx="100" cy="100" r="80" fill="#9945FF" />

//     {/* <!-- Coin Inner Circle --> */}
//     <circle cx="100" cy="100" r="60" fill="#14F195" />

//     {/* <!-- Rotating Animation --> */}
//     <animateTransform 
//       attributeName="transform" 
//       type="rotate" 
//       from="0 100 100" 
//       to="360 100 100" 
//       dur="2s" 
//       repeatCount="indefinite" />
//   </g>
// </svg>
//   )
// }

export default Nav;
