import React from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="font-happyMonkey bottom-0 flex w-full flex-nowrap items-center justify-center bg-customOrange py-2 text-center text-base text-gray-50">
            Little Animals Academy - Cami Albuquerque -{" "}
            <span className="inline-block">
                <Link
                    to="https://github.com/camialbuq/LAA-client-side"
                    className="mx-2 font-bold text-indigo-700 hover:-translate-y-3 hover:rotate-3 hover:scale-110"
                >
                    Git Hub repository
                </Link>
            </span>
        </div>
    )
}

export default Footer
