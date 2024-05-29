import React from "react"
import { useState } from "react"
import CardIndividual from "./CardIndividual"

function Cards() {
    //idea: put the array of images outside of usestate, as consts A-H, then next, next
    //once clicking "next" user would setImages to next array and continue playing

    const [items, setItems] = useState(
        [
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
        ].sort(() => Math.random() - 0.5),
    ) //the sort needs -1 or 1 to sort array, so we add - 0.5 to math.random to generate negative

    const [prevSelected, setPrevSelected] = useState(-1)
    //because we haven't clicked any, id starts in -1, once we click it can be at least 0 index

    function checkIfMatches(current) {
        if (items[current].id === items[prevSelected].id) {
            items[current].stat = "correct"
            items[prevSelected].stat = "correct"
            setItems([...items])
            setPrevSelected(-1) //to restart the previous and user will click again
        } else {
            items[current].stat = "wrong"
            items[prevSelected].stat = "wrong"
            setItems([...items])
            //clear the stat with setTimeout because it was wrong, cards flip back
            setTimeout(() => {
                items[current].stat = ""
                items[prevSelected].stat = ""
                setItems([...items])
                setPrevSelected(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        // alert(id) - to test
        // items[id].stat = "active"
        // setItems([...items])

        if (prevSelected === -1) {
            items[id].stat = "active"
            setItems([...items])
            setPrevSelected(id)
        } else {
            checkIfMatches(id)
        }
    }

    return (
        <div className="memoryContainer">
            {items.map((item, index) => (
                <CardIndividual
                    key={index}
                    item={item}
                    //remember that the id here is the index, not the id we passed in the array bc needs to be unique
                    id={index}
                    handleClick={handleClick}
                />
            ))}
        </div>
    )
}

export default Cards
