import React from 'react'

const Itinerary = ({ itinerary }) => {
    console.log(itinerary)
    return (
        <div className="card z-depth-0 project-summary" >
            <div className="card-content grey-text text-darken-3">
                <span className="teal-text card-title">{itinerary.name}</span>
            </div>
        </div>
    )
}


export default Itinerary
