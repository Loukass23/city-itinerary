import React from 'react'
import './city.css'


const MarcusCity = ({ city }) => {
    return (
        <div className='card small' >
            <div className='card-image' style={{ maxHeight: "100%" }}>
                <img src={city.photoURL} alt='' />
                <span id="city-card" className='card-title black-text lighten-2 '>{city.cityName}, {city.countryName}</span>
            </div>
        </div>
    )
}

export default MarcusCity
