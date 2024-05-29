import React from "react"

function CardIndividual({ item }) {
    return (
        <div className="card">
            <img src={item.img} alt="memory images" />
        </div>
    )
}

export default CardIndividual
