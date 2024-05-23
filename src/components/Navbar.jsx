import React from "react";
// import logo from "./../assets/logo-ironhack-blue.png";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-green-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between h-20 px-4 w-full">
        {/* Left flex container for burger icon and text */}
        <div className="flex items-center space-x-4 w-full">
          <button
            className="flex items-center text-4xl py-1"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <span className="text-white text-2xl px-4 flex items-center">
            {" "}
            Little Animals Academy
          </span>
        </div>
        {/* Center flex container for logo */}
        {/* <div className="flex w-1">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
