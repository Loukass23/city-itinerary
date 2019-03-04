import React, { Component } from 'react'
import CityList from '../city/CityList'
import { connect } from 'react-redux'
//import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends Component {
    render() {

        const { cities } = this.props;
        console.log(cities)
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <CityList cities={cities} />
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
const mapStatetoProps = (state) => {
    //console.log(state)
    return {
        cities: state.city.cities
        // projects: state.firestore.ordered.projects,
        // auth: state.firebase.auth,
        // notifications: state.firestore.ordered.notifications
    }
}


export default connect(mapStatetoProps)(Dashboard)
// export default compose(
//     connect(mapStatetoProps),
//     firestoreConnect([
//         { collection: 'projects', orderBy: ['createdAt', 'desc'] },
//         { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
//     ])
// )(Dashboard)