import React from 'react'
import { Link } from 'react-router-dom'
import MarcusCity from './MarcusCity'

const CityList = ({ cities }) => {
    return (
        <div className="cities-list section">
            {cities && cities.map(city => {
                return (
                    <Link to={'/city/' + city.name} key={city.name}>
                        <MarcusCity city={city} />
                    </Link>
                )
            })}
        </div>
    )
}
export default CityList

