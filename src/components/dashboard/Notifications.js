import React from 'react'
import { Divider } from '@material-ui/core';
import moment from 'moment'

const Notifications = (props) => {
    const { notifications } = props
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Notifications</div>
                    <ul className="notifications">
                        {notifications && notifications.map(notif => {
                            return (
                                <li key={notif.id}>
                                    <span className="teal-text">{notif.user} </span>
                                    <span>{notif.content} </span>
                                    <div className="grey-text note-date">
                                        {moment(notif.time.toDate()).fromNow()}</div>
                                    <Divider />
                                </li>
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