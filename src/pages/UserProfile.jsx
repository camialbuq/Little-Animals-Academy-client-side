import React from "react"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Modal from "react-modal"

import { AuthContext } from "../context/auth.context"
import EditForm from "../components/EditForm"

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

    return (
        <section className="bg-gray-100">
            {userProfile && (
                <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-orange-500 sm:text-4xl">
                                {userProfile.playerName}
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                You are such a great developing little animal,
                                keep up the good work!
                            </p>
                            <div className="editInfo mt-8">
                                <Link
                                    href="#"
                                    className="font-medium text-blue-500 hover:text-blue-600"
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
                        <div className="mx-12 max-w-sm overflow-hidden rounded-full shadow-md">
                            <img
                                src={userProfile.image}
                                alt="User Profile Image"
                                className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default UserProfile
