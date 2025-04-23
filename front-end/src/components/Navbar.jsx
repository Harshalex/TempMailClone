import React from "react";
import { Image } from "../common/image";

function Navbar() {
  return (
    <nav className="w-full flex justify-center h-16 py-4">
      <img className="" src={Image.logo} alt="logo" />
    </nav>
  );
}

export default Navbar;
