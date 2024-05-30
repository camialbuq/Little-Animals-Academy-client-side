import React from "react"
import greenTexture from "../assets/greenTexture.png"

function NotFound() {
    return (
        <div
            className="font-happyMonkey flex h-full w-full items-center justify-center text-center"
            style={{
                backgroundImage: `url(${greenTexture})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="flex h-96 items-center justify-center">
                <h1 className="bg-white p-10">
                    Nothing in this page yet! <br></br>Go back to home page.
                </h1>
            </div>
        </div>
    )
}

export default NotFound
