import React from 'react'
import { Link } from 'react-router-dom'



const MarcusItinerary = ({ itinerary, city }) => {
    console.log(itinerary)
    return (
        <div className='card medium itinerary-list-item-card col s12 m6 l4'>
            <div className='card-image'>
                <img src={itinerary.photoURL} alt='' className='activator' />
            </div>
            <div className='card-content'>
                <span className='card-title itinerary-list-item-title activator'>
                    {itinerary.title}
                    <i className='material-icons right'>more_vert</i>
                </span>
                <div className='itinerary-list-item-details'>
                    <i className='far fa-clock small red-text text-lighten-2' />
                    <p>{itinerary.duration}</p>
                    <i className='fas fa-2x fa-euro-sign small red-text text-lighten-2' />
                    <p>{itinerary.price}</p>
                    <i className='far fa-2x fa-star red-text text-lighten-2' />
                    <p>{itinerary.rating}</p>
                </div>
            </div>
            <div className='card-reveal white-text' id='card-reveal'>
                <span className='center-align itinerary-list-item-title activator card-title'>
                    <i className='material-icons right black'>close</i>
                </span>
                <p className='itinerary-list-item-summary black-text'>{itinerary.summary}</p>

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

