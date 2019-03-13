import React from 'react'



const IgItem = ({ post }) => {
    return (

        <div className="col s12 m6 l4">
            <div className="card medium">
                <div className="card-image">
                    <img src={post.images.standard_resolution.url} alt='' />

                    <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                    <p>{post.caption.text}</p>
                </div>
            </div>
        </div>
    )
}

export default IgItem
