import React from 'react'

const MarcusCity = ({ city }) => {
    return (
        <div className='card itinerary-list-item-card col s12 m6 xl4 mx-4'>
            <div className='card-image'>
                <img src={city.photoURL} alt='' className='activator' />
            </div>
            <div className='card-content'>
                <span className='card-title itinerary-list-item-title activator'>
                    {city.cityName}

                </span>
            </div>
        </div>
    )
}

export default MarcusCity

