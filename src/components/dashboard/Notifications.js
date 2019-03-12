import React from 'react'
import { Divider } from '@material-ui/core';
import moment from 'moment'
import { Link } from 'react-router-dom'


const Notifications = (props) => {
    const { notifications } = props
    console.log("notif", notifications)
    return (

        <ul className="notifications">
            {notifications && notifications.map(notif => {
                return (
                    <Link key={notif.id} to={{
                        pathname: `/city/${notif.cityName}`,
                    }}
                    > <li style={{ lineHeight: '15px' }} >
                            <p className="teal-text">{notif.user}</p>
                            <p>{notif.content} </p>
                            <p className="grey-text note-date">
                                {moment(notif.time.toDate()).fromNow()}</p>
                            <Divider />
                        </li></Link>
                )
            }
            )}

        </ul>



    )
}
export default Notifications