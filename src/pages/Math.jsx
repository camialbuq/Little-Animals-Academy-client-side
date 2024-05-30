import React from "react"
import texture02 from "../assets/5452709.jpg"

function Math() {
    return (
        <div
            className="font-happyMonkey flex h-full w-full items-center justify-center text-center"
            style={{
                backgroundImage: `url(${texture02})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex h-96 items-center justify-center">
                <h1 className="bg-white p-10">Math game coming soon</h1>
            </div>
        </div>
    )
}

export default Math
