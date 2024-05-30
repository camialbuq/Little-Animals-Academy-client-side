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
        <div className="navbar font-happyMonkey">
            <header className="mx-auto flex max-w-full flex-col items-center justify-between bg-customDarkGreen px-2 py-4 md:flex-row md:px-6 md:py-6 lg:px-20">
                <Link to="/" className="active z-10">
                    <h1 className="text-xl font-black tracking-wider text-white active:text-customGreen lg:text-3xl">
                        LITTLE ANIMALS ACADEMY
                    </h1>
                </Link>
                <nav className="z-10">
                    <ul className="flex flex-row items-center rounded-lg bg-green-500 px-6 py-4 text-customDarkGreen md:text-lg lg:text-xl">
                        <li className="mx-4 font-black hover:-translate-y-2 hover:rotate-3 hover:scale-110 hover:text-indigo-100">
                            <Link to="/" className="font-extrabold">
                                Home
                            </Link>
                        </li>
                        <li className="mx-4 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-indigo-100">
                            <Link to="/profile" className="font-bold">
                                Profile
                            </Link>
                        </li>
                        <li className="mx-4 hover:-translate-y-2 hover:rotate-3 hover:scale-110 hover:text-indigo-100">
                            <Link to="/games" className="font-bold">
                                Games
                            </Link>
                        </li>
                        {!isLoggedIn && (
                            <li className="mx-4 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-indigo-100">
                                <Link to="/login" className="font-bold">
                                    Login
                                </Link>
                            </li>
                        )}
                        {isLoggedIn && (
                            <li className="mx-4 hover:-translate-y-2 hover:-rotate-3 hover:scale-110 hover:text-indigo-100">
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
