import React from 'react'
import MarcusItnerary from './MarcusItinerary'
import './itinerary.css'


const ItineraryList = ({ itineraries, city }) => {
    return (
        <div className="itineraries-list section">

            <div className="" id="iti-List">

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

