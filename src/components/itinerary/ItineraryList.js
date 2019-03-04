import React from 'react'
import { Link } from 'react-router-dom'
import Itinerary from './Itinerary'
import MarcusItnerary from './MarcusItinerary'

const ItineraryList = ({ itineraries, city }) => {
    return (
        <div className="itineraries-list section">
            <h3>{city}</h3>
            {itineraries && itineraries.map(itinerary => {
                return (

                    <MarcusItnerary itinerary={itinerary} city={city} />



                )
            })}
        </div>
    )
}
export default ItineraryList

