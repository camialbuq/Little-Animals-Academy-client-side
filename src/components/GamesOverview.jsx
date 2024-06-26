import React from "react"
import lazy from "..//assets/lazy.png"
import gameCardMemory from "../assets/gameCardMemory.png"
import gameCardMath from "../assets/gameCardMath.png"
import gameCardAlphabet from "../assets/gameCardAlphabet.png"
import { useNavigate } from "react-router-dom"
import texture1 from "../assets/5510579.jpg"

function GamesOverview() {
    const navigate = useNavigate()

    return (
        // <div
        //     className="font-happyMonkey relative flex w-full flex-wrap items-center justify-center bg-orange-200 lg:py-10"
        //     style={{
        //         backgroundImage: `url(${texture1})`,
        //         backgroundRepeat: "no-repeat",
        //         backgroundPosition: "center",
        //         backgroundSize: "cover",
        //     }}
        // >
        //     {/* <img src={lazy} className="absolute right-0 top-0 w-1/5" /> */}
        //     <div className="CardsContainer mx-auto my-14 flex w-5/6 justify-center rounded-3xl border-2 border-gray-100 bg-orange-200 bg-opacity-90 py-16 shadow-lg md:border-4">
        //         <div
        //             className="Card relative mx-4 w-1/4 origin-bottom transform overflow-hidden rounded-xl object-cover shadow-lg duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110"
        //             onClick={() => navigate("/games/memory")}
        //         >
        //             <a className="relative overflow-hidden rounded-2xl">
        //                 <div className="relative h-full w-full rounded-2xl">
        //                     <img
        //                         className="h-full w-full rounded object-cover"
        //                         src={gameCardMemory}
        //                         alt="Writey A.I"
        //                         loading="lazy"
        //                     />

        //                     <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
        //                         <h2 className="self-center text-xl font-bold text-indigo-700 md:text-2xl">
        //                             Memory Game
        //                         </h2>
        //                     </div>
        //                 </div>
        //             </a>
        //         </div>
        //         <div
        //             className="Card relative mx-4 w-1/4 origin-bottom transform overflow-hidden rounded-xl object-cover shadow-lg duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110"
        //             onClick={() => navigate("/games/math")}
        //         >
        //             <a className="relative overflow-hidden rounded-2xl">
        //                 <div className="relative h-full w-full rounded-2xl">
        //                     <img
        //                         className="h-full w-full rounded object-cover"
        //                         src={gameCardMath}
        //                         alt="Writey A.I"
        //                         loading="lazy"
        //                     />

        //                     <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
        //                         <h2 className="self-center text-xl font-bold text-indigo-700 md:text-2xl">
        //                             Monkey Math
        //                         </h2>
        //                     </div>
        //                 </div>
        //             </a>
        //         </div>
        //         <div
        //             className="Card relative mx-4 w-1/4 origin-bottom transform overflow-hidden rounded-xl object-cover shadow-lg duration-500 hover:-translate-y-2 hover:-rotate-2 hover:scale-110"
        //             onClick={() => navigate("/games/alphabet")}
        //         >
        //             <a className="relative overflow-hidden rounded-2xl">
        //                 <div className="relative h-full w-full rounded-2xl">
        //                     <img
        //                         className="h-full w-full rounded object-cover"
        //                         src={gameCardAlphabet}
        //                         alt="Writey A.I"
        //                         loading="lazy"
        //                     />

        //                     <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
        //                         <h2 className="self-center text-xl font-bold text-indigo-700 md:text-2xl">
        //                             Animal Alphabet
        //                         </h2>
        //                     </div>
        //                 </div>
        //             </a>
        //         </div>
        //     </div>
        // </div>
        <div
            className="font-happyMonkey relative flex w-full flex-wrap items-center justify-center bg-orange-200 lg:py-10"
            style={{
                backgroundImage: `url(${texture1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* <img src={lazy} className="absolute right-0 top-0 w-1/5" /> */}
            <div className="CardsContainer mx-auto my-14 flex w-5/6 flex-col justify-center rounded-3xl border-2 border-gray-100 bg-orange-200 bg-opacity-90 py-8 shadow-lg md:flex-row md:border-4 md:py-16">
                <div
                    className="Card relative mx-auto mb-6 w-4/5 origin-bottom transform overflow-hidden rounded-xl object-cover shadow-lg duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110 md:w-1/4"
                    onClick={() => navigate("/games/memory")}
                >
                    <a className="relative overflow-hidden rounded-2xl">
                        <div className="relative h-full w-full rounded-2xl">
                            <img
                                className="h-full w-full rounded object-cover"
                                src={gameCardMemory}
                                alt="Memory Game"
                                loading="lazy"
                            />
                            <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
                                <h2 className="self-center text-xl font-bold text-indigo-700 md:text-2xl">
                                    Memory Game
                                </h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div
                    className="Card relative mx-auto mb-6 w-4/5 origin-bottom transform overflow-hidden rounded-xl object-cover shadow-lg duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110 md:w-1/4"
                    onClick={() => navigate("/games/math")}
                >
                    <a className="relative overflow-hidden rounded-2xl">
                        <div className="relative h-full w-full rounded-2xl">
                            <img
                                className="h-full w-full rounded object-cover"
                                src={gameCardMath}
                                alt="Monkey Math"
                                loading="lazy"
                            />
                            <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
                                <h2 className="self-center text-xl font-bold text-indigo-700 md:text-2xl">
                                    Monkey Math
                                </h2>
                            </div>
                        </div>
                    </a>
                </div>
                <div
                    className="Card relative mx-auto mb-6 w-4/5 origin-bottom transform overflow-hidden rounded-xl object-cover shadow-lg duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-110 md:w-1/4"
                    onClick={() => navigate("/games/alphabet")}
                >
                    <a className="relative overflow-hidden rounded-2xl">
                        <div className="relative h-full w-full rounded-2xl">
                            <img
                                className="h-full w-full rounded object-cover"
                                src={gameCardAlphabet}
                                alt="Animal Alphabet"
                                loading="lazy"
                            />
                            <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 text-white">
                                <h2 className="self-center text-xl font-bold text-indigo-700 md:text-2xl">
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
