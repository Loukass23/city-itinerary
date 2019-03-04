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
    const city = ownProps.match.params.name
    console.log(state.firestore)
    const itinerariesList = state.firestore.ordered.itineraries
    const itineraries = itinerariesList ? itinerariesList.filter(e => {
        return e.cityName === city
    }) : null
    return {
        itineraries: itineraries,
        city: city
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
        { collection: 'itineraries', orderBy: ['createdAt', 'desc'] }

    ]))(ItineraryChoice)
