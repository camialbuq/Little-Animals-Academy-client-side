import React from "react"
import Modal from "react-modal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AnimalsImageHome from "../components/AnimalsImageHome"
import backgroundImage from "../assets/background.png"
import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"
import GamesOverview from "../components/GamesOverview"
import About from "../components/About"

function Home({ signUp, login }) {
    const [signUpVisible, setSignUpVisible] = useState(signUp)
    const [loginVisible, setLoginVisible] = useState(login)
    const navigate = useNavigate()

    return (
        <div className="HomeContent font-happyMonkey overflow-x-hidden">
            <section
                className="HeroBanner border-box relative border-y-8 border-y-green-500 bg-cover bg-center tracking-wider xl:h-5/6 dark:bg-gray-100"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className=" container mx-auto flex flex-col items-center overflow-hidden px-4 pt-10 text-center md:px-10 md:pb-36 md:pt-24 lg:px-16 xl:mt-40 xl:w-2/3 xl:text-5xl">
                    <AnimalsImageHome />
                    <h1 className="text-3xl font-bold leading-none text-indigo-700 drop-shadow-md md:text-4xl lg:text-5xl">
                        Play to learn the {""}
                        <span className="tracking-wider text-green-600">
                            alphabet, exercise your memory and start math
                            operations
                        </span>
                        {""} with the fun animal friends!
                    </h1>
                    <p className="z-50 mb-8 mt-8 rounded-md bg-white bg-opacity-80 px-8 py-4 text-lg text-indigo-700 drop-shadow-md md:mx-10 md:py-6 md:text-xl lg:bg-transparent lg:text-2xl">
                        Help your little one to learn and improve cognition
                        using simple daily games.
                    </p>
                    <div className="flex flex-col flex-wrap justify-center">
                        <button
                            onClick={() => navigate("/signup")}
                            className="z-20 mb-8 rounded bg-orange-500 px-10 py-4 text-lg font-semibold text-white drop-shadow-md hover:-translate-y-3 hover:rotate-3 hover:scale-110 md:py-6 md:text-2xl"
                        >
                            Get started
                        </button>
                        <Modal
                            isOpen={signUp}
                            onRequestClose={() => setSignUpVisible(false)}
                            ariaHideApp={false}
                            className="signUpmodal fixed inset-1 flex items-center justify-center"
                            overlayClassName="fixed inset-0 bg-black bg-opacity-50 cursor-pointer z-50"
                        >
                            <SignUpForm />
                        </Modal>
                        <Modal
                            isOpen={login}
                            onRequestClose={() => setLoginVisible(false)}
                            ariaHideApp={false}
                            className="signUpmodal fixed inset-1 flex items-center justify-center"
                            overlayClassName="fixed inset-0 bg-black bg-opacity-50 cursor-pointer z-50"
                        >
                            <LoginForm />
                        </Modal>
                    </div>
                </div>
            </section>
            <GamesOverview />
            <About />
        </div>
    )
}

export default Home
