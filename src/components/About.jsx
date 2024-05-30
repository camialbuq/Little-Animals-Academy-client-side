import React from "react"

function About() {
    return (
        // <div className="font-happyMonkey relative overflow-hidden bg-white">
        //     <div className="grid pb-16 pt-10 sm:grid-cols-1 sm:pb-40 sm:pt-24 md:grid-cols-2 lg:pb-20 lg:pt-40">
        //         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        //             <div className="sm:max-w-lg">
        //                 <h1 className="font text-3xl font-bold tracking-tight text-customOrange sm:text-3xl">
        //                     Little Animals Academy
        //                 </h1>
        //                 <p className="mt-4 text-xl text-gray-500">
        //                     We know it's not optimal to let your kids have
        //                     screen time, but when needed, how about making it
        //                     useful? With this webapp your little one can keep
        //                     practicing and improving their development in any
        //                     daily 5 minutes exercises.
        //                 </p>
        //                 <p className="mt-10 text-xl text-gray-500">
        //                     This is a single user application project built with
        //                     React.
        //                     <br /> It uses{" "}
        //                     <span className="font-bold text-indigo-500">
        //                         html, TailwindCSS and Javascript.
        //                     </span>
        //                     <br />
        //                     Here I have combined two passions: coding and
        //                     travelling in a simple, fun and easy to read webapp.
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        //             <div className="sm:max-w-lg">
        //                 <h3 className="font mt-10 text-2xl font-bold tracking-tight text-indigo-500 sm:text-2xl">
        //                     I am Cami Albuquerque, junior web developer with a
        //                     Product Manager background, brazilian living in
        //                     Berlin.
        //                 </h3>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <section class="bg-gray-200 py-12">
            <div class="container mx-auto px-4">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="mb-6 text-3xl font-bold text-customGreen">
                        Find out more:
                    </h2>
                    <p class="mb-12 text-base tracking-wider text-gray-600 md:text-lg">
                        We know it's not optimal to let your kids have screen
                        time, but when needed, how about making it useful?
                    </p>
                </div>
                <div class="-mx-4 mt-8 flex flex-wrap">
                    <div class="mb-4 w-full px-4 md:w-1/3">
                        <div class="rounded-md bg-white p-8 shadow-md">
                            <div class="mb-4 text-4xl font-bold text-indigo-700">
                                01
                            </div>
                            <h3 class="mb-4 text-2xl font-bold text-green-600">
                                For the kids
                            </h3>
                            <p class="mb-4 tracking-wider text-gray-600">
                                With this webapp your little one can keep
                                practicing and improving their development in
                                any daily 5 minutes exercises, such memory game,
                                math operations and alphabet learning
                            </p>
                        </div>
                    </div>
                    <div class="mb-4 w-full px-4 md:w-1/3">
                        <div class="rounded-md bg-white p-8 shadow-md">
                            <div class="mb-4 text-4xl font-bold text-indigo-700">
                                02
                            </div>
                            <h3 class="mb-4 text-2xl font-bold text-green-600">
                                Project
                            </h3>
                            <p class="mb-4 tracking-wider text-gray-600">
                                This is a single user application project built
                                with React. It uses{" "}
                                <span className="font-bold text-indigo-500">
                                    html, TailwindCSS, Javascript and NodeJS.
                                </span>{" "}
                                Developed as part of Software Dev Bootcamp -
                                Ironhack Berlin.
                            </p>
                        </div>
                    </div>

                    <div class="mb-4 w-full px-4 md:w-1/3">
                        <div class="rounded-md bg-white p-8 shadow-md">
                            <div class="mb-4 text-4xl font-bold text-indigo-700">
                                03
                            </div>
                            <h3 class="mb-4 text-2xl font-bold text-green-600">
                                About me
                            </h3>
                            <p class="mb-4 tracking-wider text-gray-600">
                                I am Cami Albuquerque, a junior web developer
                                with a Product Manager background, brazilian
                                living in Berlin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
