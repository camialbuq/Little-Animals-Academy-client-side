/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "bounce-short": "bounce 1s ease-in-out 5",
                "bounce-medium": "bounce 2s ease-in-out 5",
                "bounce-long": "bounce 3s ease-in-out 5",
            },
            colors: {
                customGreen: "#015255",
                customDarkGreen: "#032c2d",
                customOrange: "#ff7245",
                customPink: "#ff7269",
            },
            fontFamily: {
                rem: "REM",
                abz: "ABeeZee",
                happyMonkey: "Happy Monkey",
            },
            plugins: [],
        },
    },
}
