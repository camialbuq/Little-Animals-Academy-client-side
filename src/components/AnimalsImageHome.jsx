import React from "react"
import dear from "../assets/dear.png"
import sheep from "../assets/sheep.png"
import tiger from "../assets/tiger.png"
import lion from "../assets/lion.png"

function AnimalsImageHome() {
    return (
        <div className="animalsImages">
            <img
                src={dear}
                alt="Background Image 1"
                className="delay-00 animate-bounce-long absolute -bottom-4 left-2 z-0 h-3/5 object-cover ease-in-out"
            />
            <img
                src={sheep}
                alt="Background Image 1"
                className="duration-400 animate-bounce-medium absolute -bottom-2 left-28 z-10 h-2/5 object-cover ease-in-out"
            />

            <img
                src={tiger}
                alt="Background Image 1"
                className="animate-bounce-short absolute -bottom-4 left-48 z-0 ml-4 h-2/5 object-cover duration-200 ease-in"
            />
            <img
                src={lion}
                alt="Background Image 1"
                className="duration-600 animate-bounce-long absolute -bottom-2 left-60 z-10 ml-16 h-1/3 object-cover ease-in-out"
            />
        </div>
    )
}

export default AnimalsImageHome
