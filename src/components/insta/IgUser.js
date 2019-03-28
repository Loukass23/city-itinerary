import React from 'react'
import './ig.css'


const IgUser = ({ user }) => {
    return (

        <div className="col s12">
            <div className="card medium">
                <div className="card-title">{user.username}
                    <p>{user.full_name}</p>
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
