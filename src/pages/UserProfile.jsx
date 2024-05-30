import React from "react"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Modal from "react-modal"

import { AuthContext } from "../context/auth.context"
import EditForm from "../components/EditForm"

import greenTexture from "../assets/greenTexture.png"
import texture02 from "../assets/5452709.jpg"
import texture03 from "../assets/5510579.jpg"

// Import the string from the .env with URL of the API/server - http://localhost:5005
const API_URL = import.meta.env.VITE_API_URL

function UserProfile() {
    const [userProfile, setUserProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(undefined)
    const [editVisible, setEditVisible] = useState(false)

    useEffect(() => {
        const getUser = () => {
            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                axios
                    .get(`${API_URL}/api/users/${user._id}`, {
                        headers: { Authorization: `Bearer ${storedToken}` },
                    })
                    .then((response) => {
                        setUserProfile(response.data)
                        setLoading(false)
                    })
                    .catch((error) => {
                        const errorDescription = error.response.data.message
                        setErrorMessage(errorDescription)
                    })
            } else {
                setErrorMessage("User not logged in")
            }
        }

        getUser()
    }, [user._id])

    if (errorMessage) return <div>{errorMessage}</div>

    if (loading) return <div>Loading...</div>

    const headerImages = [
        { id: 1, img: greenTexture },
        { id: 2, img: texture02 },
        { id: 3, img: texture03 },
    ]

    function getRandomHeaderImage() {
        const randomIndex = Math.floor(Math.random() * headerImages.length)
        return headerImages[randomIndex].img
    }

    const randomImage = getRandomHeaderImage()

    return (
        <section class="font-happyMonkey w-full overflow-hidden">
            <div class="mx-auto w-full">
                <img
                    src={randomImage}
                    alt="User Cover"
                    class="hidden w-full object-cover sm:h-[5rem] md:block md:h-[12rem] lg:h-[12rem]"
                />

                <div class="mx-auto my-4 flex w-1/2 justify-center md:w-full ">
                    <img
                        src={userProfile.image}
                        alt="User Profile"
                        className="HeaderImage relative rounded-full object-cover shadow-xl outline outline-2 outline-offset-2 outline-white sm:bottom-[5rem] sm:h-[4rem] sm:w-[4rem] md:bottom-[6rem] md:h-[12rem] md:w-[12rem] lg:bottom-[8rem] lg:h-[16rem] lg:w-[16rem] xl:bottom-[7rem] xl:h-[16rem] xl:w-[16rem]"
                    />
                </div>

                <div class=" relative mx-auto flex flex-col items-center justify-center gap-4 sm:-top-[3rem] sm:w-[96%] md:-top-[4rem] md:w-[94%] lg:-top-[6rem] lg:w-[90%] xl:-top-[6rem] xl:w-[80%]">
                    <h1 class="text-center text-4xl tracking-wider text-indigo-700">
                        {userProfile.name}
                        <br></br> {userProfile.playerName}
                    </h1>

                    <p class="text-md w-3/4 text-pretty text-gray-600 sm:text-center md:w-4/5 md:max-w-3xl md:text-lg">
                        You are such a great little animal, keep up the good
                        work! Have you practiced some math today? Here's what
                        you've been doing:
                    </p>

                    <div class="mx-4 mt-10 flex items-center justify-center gap-4">
                        <div class="flex items-center justify-center rounded-sm border-2 border-dashed border-indigo-400 px-6 py-4 text-center text-lg text-customOrange sm:h-[5rem] sm:w-1/3 md:h-28 md:w-1/5 lg:h-32 lg:w-1/5 xl:h-32 xl:w-1/4 dark:border-2 dark:border-dashed ">
                            Memory Game:<br></br> Level 2
                        </div>

                        <div class=" flex items-center justify-center rounded-sm border-2 border-dashed border-indigo-400 px-6 py-4 text-center text-lg text-customOrange  sm:h-[5rem] sm:w-1/3 md:h-28 md:w-1/5 lg:h-32 lg:w-1/5 xl:h-32 xl:w-1/4 dark:border-2 dark:border-dashed  ">
                            Math Monkey: <br></br>Level 1
                        </div>

                        <div class=" flex items-center justify-center rounded-sm border-2 border-dashed border-indigo-400 px-6 py-4 text-center text-lg text-customOrange sm:h-[5rem] sm:w-1/3 md:h-28 md:w-1/5 lg:h-32 lg:w-1/5 xl:h-32 xl:w-1/4 dark:border-2 dark:border-dashed ">
                            Animal Alphabet:<br></br> Level 4
                        </div>
                    </div>
                    <div className="editInfo my-6 md:my-8">
                        <Link
                            href="#"
                            className="font-bold text-indigo-500 hover:text-customOrange lg:text-lg"
                            onClick={() => setEditVisible(true)}
                        >
                            Edit your info
                            <span className="ml-2">&#8594;</span>
                        </Link>
                        <Modal
                            isOpen={editVisible}
                            onRequestClose={() => setEditVisible(false)}
                            ariaHideApp={false}
                            className="signUpmodal fixed inset-1 flex items-center justify-center"
                            overlayClassName="fixed inset-0 bg-black bg-opacity-50 cursor-pointer z-50"
                        >
                            <EditForm />
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile
