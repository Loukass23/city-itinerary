import React from 'react'
import ModalImage from 'react-modal-image'



const IgItem = ({ post }) => {
    return (

        <div className="col s12 m6 l4">
            <div className="card large" id="ig-post">
                <div className="card-image">
                    <img src={post.images.standard_resolution.url} alt='' />

                </div>
                <div className="card-content">
                    <p>{post.caption.text}</p>
                </div>
            </div>
        </div>
    )
}

export default IgItem
