import React from "react"
import Modal from "react-modal"
import { useState } from "react"
import AnimalsImageHome from "../components/AnimalsImageHome"
import backgroundImage from "../assets/background.png"

function Home() {
    const [visible, setVisible] = useState(false)

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
                        onClick={() => setVisible(true)}
                        className="mb-8 rounded bg-green-500 px-10 py-4 text-lg font-semibold text-white"
                    >
                        Get started
                    </button>
                    <Modal
                        isOpen={visible}
                        onRequestClose={() => setVisible(false)}
                        ariaHideApp={false}
                        className="signUpmodal fixed inset-2 flex items-center justify-center"
                        overlayClassName="fixed inset-0 bg-black bg-opacity-50 cursor-pointer z-50"
                    >
                        <form noValidate="" action="" className="">
                            <div className="min-h-1/2 flex w-full flex-col justify-center bg-gray-100 px-6 py-12 lg:px-8">
                                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                    <img
                                        className="mx-auto h-12 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Workflow"
                                    />
                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                        Create your account
                                    </h2>
                                    <p className="max-w mt-2 text-center text-sm text-gray-600">
                                        Already registered? {""}
                                        <a
                                            href="#"
                                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        >
                                            Sign in
                                        </a>
                                    </p>
                                </div>

                                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                    <div className="rounded-lg bg-white px-6 py-8 shadow sm:px-10">
                                        <form
                                            class="mb-0 space-y-6"
                                            action="#"
                                            method="POST"
                                        >
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="username"
                                                        name="username"
                                                        type="text"
                                                        placeholder="Your name"
                                                        autocomplete="name"
                                                        required
                                                        className="mb-4 w-full rounded-md border-2 border-blue-600 px-4 py-2 focus:ring dark:border-gray-300 focus:dark:ring-indigo-600"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="email@littleanimals.com"
                                                        autocomplete="email"
                                                        required
                                                        className="mb-4 w-full rounded-md border-2 border-blue-600 px-4 py-2 focus:ring dark:border-gray-300 focus:dark:ring-indigo-600"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="password"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Password
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        autocomplete="current-password"
                                                        placeholder="exampleNum&Letters123"
                                                        required
                                                        className="mb-4 w-full rounded-md border-2 border-blue-600 px-4 py-2 focus:ring dark:border-gray-300 focus:dark:ring-indigo-600"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="flex w-full justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Sign up
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </section>
    )
}

export default Home
