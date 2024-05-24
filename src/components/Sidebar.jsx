import { Link } from "react-router-dom"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

function Sidebar() {
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/")
    }

    return (
        <div className="sidebar w-full bg-orange-300 p-3 text-base text-customDarkGreen">
            <div className="flex flex-row items-center justify-center space-x-8">
                <ul className="flex flex-row space-x-8">
                    <li>
                        <Link
                            to="/"
                            className=" text-lg hover:animate-bounce hover:underline hover:decoration-blue-700 hover:underline-offset-4 active:underline active:decoration-blue-600  active:underline-offset-4"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className=" text-lg hover:animate-bounce hover:underline hover:decoration-blue-700 hover:underline-offset-4 active:underline active:decoration-blue-600  active:underline-offset-4"
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/games"
                            className="text-lg hover:animate-bounce hover:underline hover:decoration-blue-700 hover:underline-offset-4 active:underline active:decoration-blue-600  active:underline-offset-4"
                        >
                            Games
                        </Link>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <button
                                onClick={handleLogout}
                                className="text-lg hover:animate-bounce hover:underline hover:decoration-blue-700 hover:underline-offset-4 active:underline active:decoration-blue-600  active:underline-offset-4"
                            >
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
