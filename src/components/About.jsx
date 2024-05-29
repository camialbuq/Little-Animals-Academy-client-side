import React from "react"

function About() {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="grid pb-16 pt-10 sm:grid-cols-1 sm:pb-40 sm:pt-24 md:grid-cols-2 lg:pb-20 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="font text-3xl font-bold tracking-tight text-customOrange sm:text-3xl">
                            Little Animals Academy
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            We know it's not optimal to let your kids have
                            screen time, but when needed, how about making it
                            useful? With this webapp your little one can keep
                            practicing and improving their development in any
                            daily 5 minutes exercises.
                        </p>
                        <p className="mt-10 text-xl text-gray-500">
                            This is a single user application project built with
                            React.
                            <br /> It uses{" "}
                            <span className="font-bold text-indigo-500">
                                html, TailwindCSS and Javascript.
                            </span>
                            <br />
                            Here I have combined two passions: coding and
                            travelling in a simple, fun and easy to read webapp.
                        </p>
                    </div>
                </div>
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h3 className="font mt-10 text-2xl font-bold tracking-tight text-indigo-500 sm:text-2xl">
                            I am Cami Albuquerque, junior web developer with a
                            Product Manager background, brazilian living in
                            Berlin.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
