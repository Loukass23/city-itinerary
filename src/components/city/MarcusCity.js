import React from 'react'

const MarcusCity = ({ city }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={city.photoURL} alt='' className='activator' />
                <span className='card-title'>{city.cityName}</span>
            </div>
        </div>
    )
}

export default MarcusCity
