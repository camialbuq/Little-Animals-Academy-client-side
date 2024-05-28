import React from "react"

function UserProfile() {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            USER PROFILE
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                        <div className="mt-8">
                            <a
                                href="#"
                                className="font-medium text-blue-500 hover:text-blue-600"
                            >
                                Learn more about us
                                <span className="ml-2">&#8594;</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                            alt="About Us Image"
                            class="rounded-lg object-cover shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfile

//response from get router
// {"_id":"66508b9565e5fa751a1896ec","name":"test8","email":"test8@test8","image":"https://images.assetsdelivery.com/compings_v2/katyagolovchyn/katyagolovchyn2202/katyagolovchyn220200052.jpg","createdAt":"2024-05-24T12:44:05.143Z","updatedAt":"2024-05-24T12:44:05.143Z"}
