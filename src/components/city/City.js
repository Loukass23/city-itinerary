import React from 'react'

const City = ({ city }) => {
    console.log(city)
    return (
        <div className="card z-depth-0 project-summary col s12 m6 xl4 mx-4" >
            <div className="card-content grey-text text-darken-3">
                <span className="teal-text card-title">{city.name}</span>
            </div>
        </div>
    )
}

export default City
