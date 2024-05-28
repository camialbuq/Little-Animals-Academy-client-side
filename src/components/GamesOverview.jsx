import React from "react"
import lazy from "..//assets/lazy.png"
import gameCardMemory from "../assets/gameCardMemory.png"
import gameCardMath from "../assets/gameCardMath.png"
import gameCardAlphabet from "../assets/gameCardAlphabet.png"

function GamesOverview() {
    return (
        <div className="relative flex w-full flex-wrap items-center justify-center bg-orange-200">
            <img src={lazy} className="absolute right-0 top-0 w-1/5" />
            <div className="CardsContainer mx-auto my-14 flex w-5/6 justify-center rounded-3xl border-2 border-gray-100 bg-white bg-opacity-30 py-16">
                <div className="Card relative mx-4 w-1/4 origin-bottom transform overflow-hidden rounded-xl object-cover duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110">
                    <a
                        className="relative overflow-hidden rounded-2xl"
                        href="/tool/writey-ai"
                    >
                        <div className="relative h-full w-full rounded-2xl">
                            <img
                                className="h-full w-full rounded object-cover"
                                src={gameCardMemory}
                                alt="Writey A.I"
                                loading="lazy"
                            />

                            <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
                                <h2 className="self-center text-xl font-bold text-customDarkGreen">
                                    Memory Game
                                </h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="Card relative mx-4 w-1/4 origin-bottom transform overflow-hidden rounded-xl object-cover duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110">
                    <a
                        className="relative overflow-hidden rounded-2xl"
                        href="/tool/writey-ai"
                    >
                        <div className="relative h-full w-full rounded-2xl">
                            <img
                                className="h-full w-full rounded object-cover"
                                src={gameCardMath}
                                alt="Writey A.I"
                                loading="lazy"
                            />

                            <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
                                <h2 className="self-center text-xl font-bold text-customDarkGreen">
                                    Monkey Math
                                </h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="Card relative mx-4 w-1/4 origin-bottom transform overflow-hidden rounded-xl object-cover duration-500 hover:-translate-y-2 hover:-rotate-2 hover:scale-110">
                    <a
                        className="relative overflow-hidden rounded-2xl"
                        href="/tool/writey-ai"
                    >
                        <div className="relative h-full w-full rounded-2xl">
                            <img
                                className="h-full w-full rounded object-cover"
                                src={gameCardAlphabet}
                                alt="Writey A.I"
                                loading="lazy"
                            />

                            <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
                                <h2 className="self-center text-xl font-bold text-customDarkGreen">
                                    Animal Alphabet
                                </h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GamesOverview
