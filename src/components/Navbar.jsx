import React from "react"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Navbar() {
    const { isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/")
    }

    return (
        <div className="navbar">
            <header className="mx-auto flex max-w-full flex-col items-center justify-between bg-customDarkGreen px-2 py-4 md:flex-row md:px-6">
                <Link to="/" className="active z-10">
                    <h1 className="text-2xl font-extrabold text-white active:text-customGreen">
                        Little Animals Academy
                    </h1>
                </Link>
                <nav className="z-10">
                    <ul className="flex flex-row items-center rounded-lg bg-green-500 px-6 py-4 text-indigo-100">
                        <li className="mx-4 hover:-translate-y-2 hover:rotate-3 hover:scale-110 hover:text-customDarkGreen">
                            <Link to="/" className="font-bold">
                                Home
                            </Link>
                        </li>
                        <li className="mx-4 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-customDarkGreen">
                            <Link to="/profile" className="font-bold">
                                Profile
                            </Link>
                        </li>
                        <li className="mx-4 hover:-translate-y-2 hover:rotate-3 hover:scale-110 hover:text-customDarkGreen">
                            <Link to="/games" className="font-bold">
                                Games
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li className="mx-4 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-customDarkGreen">
                                <button
                                    onClick={handleLogout}
                                    className="font-bold"
                                >
                                    Logout
                                </button>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
