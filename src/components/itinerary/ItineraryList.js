import React from 'react'
import { Link } from 'react-router-dom'
import Itinerary from './Itinerary'
import MarcusItnerary from './MarcusItinerary'
import './itinerary.css'


const ItineraryList = ({ itineraries, city }) => {
    return (
        <div className="itineraries-list section">
            <div className="row valign-wrapper">
                <div className="col s1" >
                    <Link to='/'><i class=" my-auto black-text fas fa-2x fa-arrow-left "></i></Link>


                </div>
                <div className="col s11" >
                    <h3>{city}</h3>
                </div>
            </div>
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

