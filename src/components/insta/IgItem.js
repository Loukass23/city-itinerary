import React from 'react'



const IgItem = ({ img }) => {
    return (
        <div className="col s12 m6 l4">
            <div className='card large'  >
                <div className='card-image' >
                    <img src={img.images.standard_resolution.url} alt='' />

                </div>
                <div className="card-content">
                    <span className='black-text lighten-2 '><p>{img.caption.text}</p></span>
                </div>
            </div>
        </div>
    )
}

export default IgItem
