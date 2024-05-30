import React from "react"
import texture03 from "../assets/5510579.jpg"

function Alphabet() {
    return (
        <div
            className="font-happyMonkey flex h-full w-full items-center justify-center text-center"
            style={{
                backgroundImage: `url(${texture03})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex h-96 items-center justify-center">
                <h1 className="bg-white p-10">Alphabet game coming soon</h1>
            </div>
        </div>
    )
}

export default Alphabet
