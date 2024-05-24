import React from "react"
import logo from "../assets/abclogo.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function SignUpForm() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [messageSuccess, setMessageSucess] = useState("")
    const [messageError, setMessageError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const postData = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:5005/auth/signup",
                    {
                        name,
                        email,
                        password,
                    },
                )
                if (response.status === 200) {
                    console.log(response.message)

                    setMessageSucess(response.data.message)
                }
                if (response.status === 500) {
                    console.log(response.message)

                    setMessageError(response.data.message)
                }
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        }
        postData()
    }

    return (
        <section className="Form w-1/2">
            <div className="min-h-1/2 flex w-full flex-col justify-center bg-gray-100 px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create your account
                    </h2>
                    <p className="max-w mt-2 text-center text-sm text-gray-600">
                        Already registered? {""}
                        <a
                            href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Login
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="rounded-lg bg-white px-6 py-8 shadow sm:px-10">
                        <form
                            className="mb-0 space-y-6"
                            action="#"
                            method="POST"
                            onSubmit={(e) => handleSubmit(e)}
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
                                        id="name"
                                        value={name}
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            setName(e.target.value)
                                        }}
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        autoComplete="name"
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
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        value={email}
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            setEmail(e.target.value)
                                        }}
                                        name="email"
                                        type="email"
                                        placeholder="email@littleanimals.com"
                                        autoComplete="email"
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
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
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
                        {messageSuccess && (
                            <div className="signUpSucess mt-4 flex flex-col items-center justify-center">
                                <p className="text-base text-customDarkGreen">
                                    {messageSuccess}, please go to {""}
                                </p>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="items-center justify-center self-center text-base font-bold text-customOrange"
                                >
                                    Login
                                </button>
                            </div>
                        )}
                        {messageError && (
                            <div className="signUpSucess mt-4 flex flex-col items-center justify-center">
                                <p className="text-base text-red-500">
                                    {messageError}, please try again.
                                </p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="mt-4 active:underline active:underline-offset-4 sm:mx-auto sm:w-full sm:max-w-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SignUpForm
