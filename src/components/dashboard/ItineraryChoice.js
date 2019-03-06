import React, { Component } from 'react'
import ItineraryList from '../itinerary/ItineraryList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'


class ItineraryChoice extends Component {
    render() {
        const { itineraries, city } = this.props;
        console.log(this.props)
        return (
            <div className="dashboard container">
                <div className="row valign-wrapper">
                    <div className="col s1" >
                        <Link to='/city'><a class="btn-floating btn-large waves-effect waves-light red lighten-3">
                            <i className=" white-text lighten-3 fas fa-2x fa-arrow-left " /></a></Link>
                    </div>
                    <h3 className="col s11" >
                        {city}
                    </h3>
                </div>

                <div className="">
                    <ItineraryList itineraries={itineraries} city={city} />
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
