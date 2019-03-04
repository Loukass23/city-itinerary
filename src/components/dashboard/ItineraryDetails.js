import React, { Component } from 'react'
import ItineraryList from '../itinerary/ItineraryList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class ItineraryChoice extends Component {
    render() {
        const { itineraries, city } = this.props;
        console.log(this.props)
        return (
            <div className="dashboard container">
                <div className="row">
                    <h3>{city}</h3>
                    <div className="col s12 m6">
                        <ItineraryList itineraries={itineraries} city={city} />
                    </div>

                    <div className="col sm8 offset-m1">

                    </div>

                </div>
                <div className="dashboard container">

                </div>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const itinerary = ownProps.match.params.id
    const activitiesList = state.firestore.ordered.activities
    const activities = activitiesList ? activitiesList.filter(e => {
        return e.itineraryId === itinerary
    }) : null
    return {
        activities: activities

        // auth: state.firebase.auth,
        //         // notifications: state.firestore.ordered.notifications
    }
}
/*
const mapStateToProps = (state, ownProps) => {
    const city = ownProps.match.params.name
    const itineraries = state.itinerary.itineraries.filter(e => {
        return e.cityName === city
    })
    return {
        itineraries: itineraries
    }
}*/


//export default connect(mapStateToProps)(ItineraryChoice)
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'activities', orderBy: ['createdAt', 'desc'] }

    ]))(ItineraryChoice)
