import React from 'react'
import { Divider } from '@material-ui/core';
import moment from 'moment'
import { Link } from 'react-router-dom'


const Notifications = (props) => {
    const { notifications } = props
    console.log("notif", notifications)
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Notifications</div>
                    <ul className="notifications">
                        {notifications && notifications.map(notif => {
                            return (
                                <Link key={notif.id} to={{
                                    pathname: `/city/${notif.cityName}`,


                                }}

                                > <li >
                                        <span className="teal-text">{notif.user} </span>
                                        <span>{notif.content} </span>
                                        <div className="grey-text note-date">
                                            {moment(notif.time.toDate()).fromNow()}</div>
                                        <Divider />
                                    </li></Link>


                            )
                        }
                        )}

                    </ul>

                </div>
            </div>
        </div>

    )
}
export default Notifications