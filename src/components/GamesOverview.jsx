import React from "react"
import lazy from "..//assets/lazy.png"

function GamesOverview() {
    return (
        <div className="relative flex w-full flex-wrap items-center justify-center bg-orange-300">
            <img src={lazy} className="absolute right-0 top-0 w-1/4" />
            <div className="mx-auto my-14 flex w-5/6 flex-col justify-center rounded-lg border-2 border-gray-100 bg-white py-16 sm:flex-row">
                <img
                    src="https://www.bakerross.ie/craft-ideas/wp-content/uploads/2022/06/K485.jpg"
                    className=" mx-4 w-1/4 origin-bottom transform rounded-xl object-cover duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110"
                />
                <img
                    src="https://www.bakerross.ie/craft-ideas/wp-content/uploads/2022/06/K485.jpg"
                    className=" mx-4 w-1/4 origin-bottom transform rounded-xl object-cover duration-500 hover:-translate-y-2 hover:-rotate-3 hover:scale-110"
                />
                <img
                    src="https://www.bakerross.ie/craft-ideas/wp-content/uploads/2022/06/K485.jpg"
                    className="mx-4 w-1/4 origin-bottom transform rounded-xl object-cover duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110"
                />
            </div>
        </div>
    )
}

export default GamesOverview
