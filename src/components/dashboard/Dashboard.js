import React, { Component } from 'react'
import CityChoice from './CityChoice'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render() {

        const { cities, notifications } = this.props;
        console.log(notifications)
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <CityChoice />
                    </div>

                    <div className="col sm8 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>

                </div>
                <div className="dashboard container">

                </div>

            </div>

        )
    }
}
const mapStatetoProps = (state) => {
    //console.log(state)
    return {
        cities: state.city.cities,
        // projects: state.firestore.ordered.projects,
        // auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
//export default connect(mapStatetoProps)(Dashboard)
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)