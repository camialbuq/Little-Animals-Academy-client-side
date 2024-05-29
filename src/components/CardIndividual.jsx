import React from "react"

function CardIndividual({ item, id, handleClick }) {
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="memory images" />
        </div>
    )
}

export default CardIndividual
