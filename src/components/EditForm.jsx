import React, { useContext } from "react"
import logo from "../assets/abclogo.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { AuthContext } from "../context/auth.context"

function EditForm() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [playerName, setPlayerName] = useState("")
    const [messageError, setMessageError] = useState("")
    const [messageSuccess, setMessageSuccess] = useState("")
    const { storeToken } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const putData = async () => {
            try {
                const response = await axios.put(
                    "http://localhost:5005/api/users/:id",
                    {
                        name,
                        image,
                        playerName,
                    },
                )
                storeToken(response.data.authToken)
                navigate("/profile")
                if (response.status === 200) {
                    console.log(response.message)
                    console.log(response)
                    setMessageSuccess(response.data.message)
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
        putData()
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
                        Edit your user information
                    </h2>
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
                                        placeholder="name"
                                        autoComplete="name"
                                        required
                                        className="mb-4 w-full rounded-md border-2 border-blue-600 px-4 py-2 focus:ring dark:border-gray-300 focus:dark:ring-indigo-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="playerName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Player's name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="playerName"
                                        value={playerName}
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            setPlayerName(e.target.value)
                                        }}
                                        name="playerName"
                                        type="text"
                                        placeholder="Your little animal name"
                                        autoComplete="playerName"
                                        required
                                        className="mb-4 w-full rounded-md border-2 border-blue-600 px-4 py-2 focus:ring dark:border-gray-300 focus:dark:ring-indigo-600"
                                    />
                                </div>
                            </div>

                            <div className="mt-1">
                                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                    Choose your image avatar example goes here
                                </h2>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    // onClick={() => navigate("/games")}
                                    className="flex w-full justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Change
                                </button>
                            </div>
                        </form>

                        {messageError && (
                            <div className="signUpSucess mt-4 flex flex-col items-center justify-center">
                                <p className="text-base text-red-500">
                                    {messageError}, please try again.
                                </p>
                            </div>
                        )}
                        {messageSuccess && (
                            <div className="signUpSucess mt-4 flex flex-col items-center justify-center">
                                <p className="text-base text-red-500">
                                    {messageSuccess}, changes were sucessful.
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

export default EditForm
