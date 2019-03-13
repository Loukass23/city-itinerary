import React from 'react'
import './ig.css'


const IgUser = ({ user }) => {
    return (

        <div className="col s12">
            <div className="card medium">
                <div className="card-title">{user.username}
                </div>
                <div className="card-content">
                    <img id='user-img' className="circle" src={user.profile_picture} alt='' />

                    <p>{user.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default IgUser
