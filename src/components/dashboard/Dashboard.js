import React, { Component } from 'react'
import CityChoice from './CityChoice'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CoverImg from '../../assets/img/cover.png'
import Insta from './Insta'



class Dashboard extends Component {
    render() {

        const { cities, notifications } = this.props;
        console.log(cities)
        return (
            <div className="dashboard container">
                <h1>FlightOclock</h1>
                <div className="row">
                    <Link to='/city'>
                        <div className='card small' style={{ maxHeight: "200px" }} >
                            <div className='card-image' style={{ maxHeight: "200px" }}>
                                {cities && <img src={cities[0].photoURL} alt='' />}
                                <span id="dash-city" style={{ height: '100%' }} className='card-title black-text lighten-2 '><h1>Cities</h1></span>
                            </div>
                        </div></Link>
                    <Link to='/instagram'>
                        <div className='card small' style={{ maxHeight: "200px" }} >
                            <div className='card-image' style={{ maxHeight: "200px" }}>
                                {cities && <img src={cities[1].photoURL} alt='' />}
                                <span id="dash-city" style={{ height: '100%' }} className='card-title black-text lighten-2 '><h1>Instagram</h1></span>
                            </div>
                        </div></Link>




                </div>

                <div className="dashboard container">

                </div>

            </div>

        )
    }
}
const mapStatetoProps = (state) => {
    console.log(state)

    return {
        cities: state.firestore.ordered.cities,
        // projects: state.firestore.ordered.projects,
        // auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
//export default connect(mapStatetoProps)(Dashboard)
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'cities', limit: 2, orderBy: ['createdAt', 'desc'] }
    ])
)(Dashboard)