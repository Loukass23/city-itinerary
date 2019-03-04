import React from 'react'
import { Link } from 'react-router-dom'



const MarcusItinerary = ({ itinerary, city }) => {
    console.log(city)
    return (
        <div className='card itinerary-list-item-card'>
            <div className='card-image'>
                <img src={itinerary.profilePic} alt='' className='activator' />
            </div>
            <div className='card-content'>
                <span className='card-title itinerary-list-item-title activator'>
                    {itinerary.title}
                    <i className='material-icons right'>more_vert</i>
                </span>
                <div className='itinerary-list-item-details'>
                    <i className='far fa-clock small red-text text-lighten-2' />
                    <p>{itinerary.duration}</p>
                    <i className='fas fa-euro-sign small red-text text-lighten-2' />
                    <p>{itinerary.price}</p>
                    <i className='far fa-star small red-text text-lighten-2' />
                    <p>{itinerary.rating}</p>
                </div>
            </div>
            <div className='card-reveal white-text' id='card-reveal'>
                <span className='center-align itinerary-list-item-title activator card-title'>
                    <i className='material-icons right'>close</i>
                </span>
                <p className='itinerary-list-item-summary'>{itinerary.summary}</p>

                <div className='explore-itinerary-btn center-align'>
                    <Link to={{
                        pathname: `/city/${city}/itineraries/${itinerary.id}`,
                        state: {
                            itinerary_id: itinerary._id
                        }
                    }}
                        className='btn red lighten-2 '
                    >
                        Explore This Itinerary
           </Link>
                </div>
            </div>
        </div>
    )
}

export default MarcusItinerary

