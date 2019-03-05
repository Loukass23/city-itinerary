import React from 'react'
import { Link } from 'react-router-dom'
import Itinerary from './Itinerary'
import MarcusItnerary from './MarcusItinerary'
import './itinerary.css'


const ItineraryList = ({ itineraries, city }) => {
    return (
        <div className="itineraries-list section">
            <h3>{city}</h3>
            <div id="iti-List">

                {itineraries && itineraries.map(itinerary => {
                    return (

                        <MarcusItnerary itinerary={itinerary} city={city} key={itinerary.id} />

                    )
                })}

            </div>
        </div>
    )
}
export default ItineraryList

