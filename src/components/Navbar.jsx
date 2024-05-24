import React from "react"
import logo from "../assets/abclogo.png"

function Navbar({ toggleSidebar }) {
    return (
        <nav
            className="fixed left-0 top-0 z-50 w-full text-white shadow-md"
            style={{ backgroundColor: "#015255" }}
        >
            <div className="flex h-16 w-full justify-between px-4">
                {/* Left flex container for burger icon and text */}
                <div className="flex w-full items-center space-x-4">
                    <button
                        className=" flex items-center py-1 text-4xl"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>

                    <span className="flex items-center px-4 text-2xl text-white">
                        {" "}
                        Little Animals Academy
                    </span>
                    {/* <img
                        className="ml-4 h-12 w-auto"
                        src={logo}
                        alt="abclogo"
                    /> */}
                </div>
                {/* Center flex container for logo */}
                {/* <div className="flex w-1">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div> */}
            </div>
        </nav>
    )
}

export default Navbar
