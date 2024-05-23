import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div className="sidebar w-full p-3 text-base text-black">
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
                            to=""
                            className="text-lg hover:animate-bounce hover:underline hover:decoration-blue-700 hover:underline-offset-4 active:underline active:decoration-blue-600  active:underline-offset-4"
                        >
                            Games
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
