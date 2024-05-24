import React from "react"
import Modal from "react-modal"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AnimalsImageHome from "../components/AnimalsImageHome"
import backgroundImage from "../assets/background.png"
import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"

function Home({ signUp, login }) {
    const [signUpVisible, setSignUpVisible] = useState(signUp)
    const [loginVisible, setLoginVisible] = useState(login)
    const navigate = useNavigate()

    return (
        <section
            className="dark:text-gr relative bg-cover bg-center dark:bg-gray-100"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container mx-auto flex h-full flex-col items-center overflow-hidden px-4 pt-10 text-center md:px-10 md:pb-36 md:pt-24 lg:px-20 xl:max-w-3xl">
                <AnimalsImageHome />
                <h1
                    className="text-4xl font-bold leading-none sm:text-5xl"
                    style={{ color: "#032c2d" }}
                >
                    Play to learn the {""}
                    <span className="dark:text-green-600">
                        alphabet, exercise your memory and start to count
                    </span>
                    {""} with the fun animal friends!
                </h1>
                <p
                    className="z-50 mb-8 mt-8 px-8 text-lg"
                    style={{ color: "#032c2d" }}
                >
                    Help your little one to learn, improve cognition and develop
                    writting skills using simple daily games.
                </p>
                <div className="flex flex-col flex-wrap justify-center">
                    <button
                        onClick={() => navigate("/signup")}
                        className="mb-8 rounded bg-green-500 px-10 py-4 text-lg font-semibold text-white"
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
    )
}

export default Home
