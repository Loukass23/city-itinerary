import React, { Component } from 'react'
import CityList from '../city/CityList'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class CityChoice extends Component {
    render() {
        const { cities } = this.props;
        return (
            <div className="cities container">
                <div className="row valign-wrapper">
                    <div style={{ paddingTop: '10px' }} className="col s1" >
                        <Link to='/'>
                            <div className="btn-floating btn-medium waves-effect waves-light red lighten-3"><i className="material-icons">home</i></div>
                        </Link>
                    </div>
                    <h4 className="col s11" >
                        Cities
                        </h4>

                </div>
                <div className="">

                    <CityList cities={cities} />

                </div>
                <div className="row">
                    <Link to='/createCity'><div className="btn-floating btn-large waves-effect waves-light red lighten-3">
                        <i className="material-icons">add</i></div></Link>
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