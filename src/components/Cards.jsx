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
    ) //the sort needs -1 or 1 to sort , so we add - 0.5 to math.random to generate negative

    return (
        <div className="memoryContainer">
            {items.map((item, index) => (
                <CardIndividual key={index} item={item} />
            ))}
        </div>
    )
}

export default Cards
