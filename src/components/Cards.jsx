// import React, { useState } from "react"
// import CardIndividual from "./CardIndividual"
// import { useNavigate } from "react-router-dom"

// const initialItems = [
//     { id: 1, img: "../../public/memoryCards/a.png", stat: "" },
//     { id: 1, img: "../../public/memoryCards/a.png", stat: "" },
//     { id: 2, img: "../../public/memoryCards/b.png", stat: "" },
//     { id: 2, img: "../../public/memoryCards/b.png", stat: "" },
//     { id: 3, img: "../../public/memoryCards/c.png", stat: "" },
//     { id: 3, img: "../../public/memoryCards/c.png", stat: "" },
//     { id: 4, img: "../../public/memoryCards/d.png", stat: "" },
//     { id: 4, img: "../../public/memoryCards/d.png", stat: "" },
//     { id: 5, img: "../../public/memoryCards/e.png", stat: "" },
//     { id: 5, img: "../../public/memoryCards/e.png", stat: "" },
//     { id: 6, img: "../../public/memoryCards/f.png", stat: "" },
//     { id: 6, img: "../../public/memoryCards/f.png", stat: "" },
//     { id: 7, img: "../../public/memoryCards/g.png", stat: "" },
//     { id: 7, img: "../../public/memoryCards/g.png", stat: "" },
//     { id: 8, img: "../../public/memoryCards/h.png", stat: "" },
//     { id: 8, img: "../../public/memoryCards/h.png", stat: "" },
//     { id: 9, img: "../../public/memoryCards/i.png", stat: "" },
//     { id: 9, img: "../../public/memoryCards/i.png", stat: "" },
//     { id: 10, img: "../../public/memoryCards/j.png", stat: "" },
//     { id: 10, img: "../../public/memoryCards/j.png", stat: "" },
// ]

// //     //idea: put the array of images outside of usestate, as consts A-H, then next, next
// //     //once clicking "next" user would setImages to next array and continue playing

// function Cards() {
//     const [items, setItems] = useState(
//         initialItems.sort(() => Math.random() - 0.5),
//     ) //the sort needs -1 or 1 to sort array, so we add - 0.5 to math.random to generate negative

//     const [prevSelected, setPrevSelected] = useState(-1)
//     //because we haven't clicked any, id starts in -1, once we click it can be at least 0 index

//     function checkIfMatches(current) {
//         if (items[current].id === items[prevSelected].id) {
//             items[current].stat = "correct"
//             items[prevSelected].stat = "correct"
//             setItems([...items])
//             setPrevSelected(-1) //to restart the previous and user will click again
//         } else {
//             items[current].stat = "wrong"
//             items[prevSelected].stat = "wrong"
//             setItems([...items]) //clear the stat with setTimeout because it was wrong, cards flip back
//             setTimeout(() => {
//                 items[current].stat = ""
//                 items[prevSelected].stat = ""
//                 setItems([...items])
//                 setPrevSelected(-1)
//             }, 1000)
//         }
//     }

//     function handleClick(id) {
//         if (prevSelected === -1) {
//             items[id].stat = "active"
//             setItems([...items])
//             setPrevSelected(id)
//         } else {
//             checkIfMatches(id)
//         }
//     }

//     function handleRestart() {
//         setItems(initialItems.sort(() => Math.random() - 0.5))
//         setPrevSelected(-1)
//         window.location.reload()
//     }

//     return (
//         <div className="gameContainer font-happyMonkey my-12 flex w-full flex-col items-center justify-center bg-customDarkGreen bg-opacity-90 px-2 md:w-4/5 md:rounded-xl md:px-10 lg:my-20 lg:h-full lg:px-20 lg:py-20">
//             <h1 className="mt-6 text-xl font-bold text-white lg:mb-4 lg:mt-4 lg:text-3xl">
//                 Find the cards with the animals that match :D
//             </h1>
//             <div className="memoryContainer w-full md:h-full">
//                 {items.map((item, index) => (
//                     <CardIndividual
//                         key={index}
//                         item={item}
//                         id={index}
//                         handleClick={handleClick}
//                     />
//                 ))}
//             </div>
//             <button
//                 onClick={handleRestart}
//                 // onClick={location.reload}
//                 className="mb-8 rounded bg-orange-500 px-10 py-4 text-lg font-semibold text-white hover:-translate-y-3 hover:rotate-3 hover:scale-110 lg:mt-10 lg:text-2xl"
//             >
//                 Restart game
//             </button>
//         </div>
//     )
// }

// export default Cards

import React, { useState, useEffect } from "react"
import CardIndividual from "./CardIndividual"
import { useNavigate } from "react-router-dom"

const initialItems = [
    { id: 1, img: "../../public/memoryCards/a.png", stat: "" },
    { id: 1, img: "../../public/memoryCards/a.png", stat: "" },
    { id: 2, img: "../../public/memoryCards/b.png", stat: "" },
    { id: 2, img: "../../public/memoryCards/b.png", stat: "" },
    { id: 3, img: "../../public/memoryCards/c.png", stat: "" },
    { id: 3, img: "../../public/memoryCards/c.png", stat: "" },
    { id: 4, img: "../../public/memoryCards/d.png", stat: "" },
    { id: 4, img: "../../public/memoryCards/d.png", stat: "" },
    { id: 5, img: "../../public/memoryCards/e.png", stat: "" },
    { id: 5, img: "../../public/memoryCards/e.png", stat: "" },
    { id: 6, img: "../../public/memoryCards/f.png", stat: "" },
    { id: 6, img: "../../public/memoryCards/f.png", stat: "" },
    { id: 7, img: "../../public/memoryCards/g.png", stat: "" },
    { id: 7, img: "../../public/memoryCards/g.png", stat: "" },
    { id: 8, img: "../../public/memoryCards/h.png", stat: "" },
    { id: 8, img: "../../public/memoryCards/h.png", stat: "" },
    { id: 9, img: "../../public/memoryCards/i.png", stat: "" },
    { id: 9, img: "../../public/memoryCards/i.png", stat: "" },
    { id: 10, img: "../../public/memoryCards/j.png", stat: "" },
    { id: 10, img: "../../public/memoryCards/j.png", stat: "" },
    { id: 11, img: "../../public/memoryCards/k.png", stat: "" },
    { id: 11, img: "../../public/memoryCards/k.png", stat: "" },
    { id: 12, img: "../../public/memoryCards/l.png", stat: "" },
    { id: 12, img: "../../public/memoryCards/l.png", stat: "" },
    { id: 13, img: "../../public/memoryCards/m.png", stat: "" },
    { id: 13, img: "../../public/memoryCards/m.png", stat: "" },
    { id: 14, img: "../../public/memoryCards/awesome.png", stat: "" },
    { id: 14, img: "../../public/memoryCards/awesome.png", stat: "" },
]

function Cards() {
    const [items, setItems] = useState(
        initialItems.sort(() => Math.random() - 0.5),
    )
    const [prevSelected, setPrevSelected] = useState(-1)

    useEffect(() => {
        const allCorrect = items.every((item) => item.stat === "correct")
        if (allCorrect) {
            window.alert("Congratulations! You've found all matching cards!")
        }
    }, [items])

    function checkIfMatches(current) {
        if (items[current].id === items[prevSelected].id) {
            items[current].stat = "correct"
            items[prevSelected].stat = "correct"
            setItems([...items])
            setPrevSelected(-1)
        } else {
            items[current].stat = "wrong"
            items[prevSelected].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prevSelected].stat = ""
                setItems([...items])
                setPrevSelected(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if (prevSelected === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrevSelected(id)
        } else {
            checkIfMatches(id)
        }
    }

    function handleRestart() {
        setItems(initialItems.sort(() => Math.random() - 0.5))
        setPrevSelected(-1)
        window.location.reload
    }

    return (
        <div className="gameContainer font-happyMonkey my-12 flex w-full flex-col items-center justify-center bg-customDarkGreen bg-opacity-90 px-2 md:w-4/5 md:rounded-xl md:px-10 lg:my-20 lg:h-full lg:px-20 lg:py-20">
            <h1 className="mt-6 text-xl font-bold text-white lg:mb-4 lg:mt-4 lg:text-3xl">
                Find the cards with the animals that match :D
            </h1>
            <div className="memoryContainer w-full md:h-full">
                {items.map((item, index) => (
                    <CardIndividual
                        key={index}
                        item={item}
                        id={index}
                        handleClick={handleClick}
                    />
                ))}
            </div>
            <button
                onClick={handleRestart}
                className="mb-8 rounded bg-orange-500 px-10 py-4 text-lg font-semibold text-white hover:-translate-y-3 hover:rotate-3 hover:scale-110 lg:mt-10 lg:text-2xl"
            >
                Restart game
            </button>
        </div>
    )
}

export default Cards
