"use client";

import { Economica } from "next/font/google";
//import { useState } from "react";
//import Navbar from "../navbar/Navbar";
import "./nav.css";
//import { philosopherFont } from "@/app/fonts";
import MenuIcon from "@mui/icons-material/Menu";
//import Image from "next/image";

export const economica = Economica({
  subsets: ["latin"],
  weight: "700",
});

const Nav = () => {
  //const [barIsOpen, setBarIsOpen] = useState(false);

//   const openBar = () => setBarIsOpen(true);
//   const closeBar = () => setBarIsOpen(false);

  return (
    <>
      <nav>
        <div className={economica.className}>
          <span>fundmesol</span>
        </div>
        <div>
          <button>Connect wallet</button>
          <i>
          <MenuIcon style={{ color: "inherit", fontSize: "inherit" }} />
        </i>
        </div>
      </nav>
      {/* {barIsOpen && <Navbar closeBar={closeBar} />} */}
    </>
  );
};

export default Nav;
