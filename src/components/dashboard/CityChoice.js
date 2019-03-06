import React, { Component } from 'react'
import CityList from '../city/CityList'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class CityChoice extends Component {
    render() {
        const { cities, notifications } = this.props;
        console.log(notifications)
        return (
            <div className="cities container">
                <div className="row valign-wrapper">
                    <div className="col s1" >
                        <Link to='/'>
                            <div className="btn-floating btn-large waves-effect waves-light red lighten-3"><i className="material-icons">home</i></div>
                        </Link>
                    </div>
                    <h3 className="col s11" >
                        Cities
                        </h3>

                </div>
                <div className="">

                    <CityList cities={cities} />

                </div>

            </div>

        )
    }
}
const mapStatetoProps = (state) => {
    //console.log(state)
    return {
        //cities: state.city.cities,
        cities: state.firestore.ordered.cities,
        // auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
//export default connect(mapStatetoProps)(Dashboard)
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'cities', orderBy: ['createdAt', 'desc'] }
    ])
)(CityChoice)