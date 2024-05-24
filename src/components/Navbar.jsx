import React from "react"
import { useNavigate } from "react-router-dom"

function Navbar({ toggleSidebar }) {
    const navigate = useNavigate()

    return (
        <nav className="fixed left-0 top-0 z-50 w-full bg-customGreen text-white shadow-md">
            <div className="flex h-16 w-full justify-between px-4">
                {/* Left flex container for burger icon and text */}
                <div className="flex w-full items-center space-x-4">
                    <button
                        className=" flex items-center py-1 text-4xl"
                        onClick={toggleSidebar}
                    >
                        ☰
                    </button>

                    <button
                        className="flex items-center px-4 text-2xl text-white"
                        onClick={() => navigate("/")}
                    >
                        {" "}
                        Little Animals Academy
                    </button>
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
