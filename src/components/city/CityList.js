import React from 'react'
import { Link } from 'react-router-dom'
import MarcusCity from './MarcusCity'

const CityList = ({ cities }) => {
    return (
        <div className="cities-list section">
            {cities && cities.map(city => {
                return (
                    <Link to={'/city/' + city.cityName} key={city.cityName}>
                        <MarcusCity city={city} />
                    </Link>
                )
            })}
        </div>
    )
}
export default CityList

