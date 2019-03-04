import React from 'react'
import { Link } from 'react-router-dom'
import MarcusActivity from './MarcusActivity'

const ActivityList = ({ activities }) => {
    return (
        <div className="itineraries-list section">

            {
                activities && activities.map(activity => {
                    return (

                        <MarcusActivity activity={activity} />



                    )
                })}
        </div>
    )
}
export default ActivityList

