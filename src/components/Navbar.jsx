import React from "react";
import logo from "./../assets/logo-ironhack-blue.png";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 items-center px-4">
        {/* Left flex container for burger icon and text */}
        <div className="flex items-center space-x-2 w-1/4">
          <button
            className="flex items-center text-l py-1"
            //onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
        {/* Center flex container for logo */}
        <div className="flex justify-center w-1/2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
