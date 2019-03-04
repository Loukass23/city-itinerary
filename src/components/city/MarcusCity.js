import React from 'react'

const MarcusCity = ({ city }) => {
    console.log(city)
    return (
        <div className='card itinerary-list-item-card'>
            <div className='card-image'>
                <img src={city.photo} alt='' className='activator' />
            </div>
            <div className='card-content'>
                <span className='card-title itinerary-list-item-title activator'>
                    {city.name}
                    <i className='material-icons right'>more_vert</i>
                </span>

            </div>
            <div className='card-reveal white-text' id='card-reveal'>
                <span className='center-align itinerary-list-item-title activator card-title'>
                    <i className='material-icons right'>close</i>
                </span>
                <p className='itinerary-list-item-summary'>{city.details}</p>
                {/* <div className='hashtags'>{hashtagDisplay}</div> */}
                <div className='explore-itinerary-btn center-align'>

                </div>
            </div>
        </div>
    )
}

export default MarcusCity

