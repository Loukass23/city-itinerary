import React, { Component } from 'react'
import CityChoice from './CityChoice'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CoverImg from '../../assets/img/cover.png'



class Dashboard extends Component {
    render() {

        const { cities, notifications } = this.props;
        console.log(notifications)
        return (
            <div className="dashboard container">
                <h1>Dashboard</h1>
                <div className="row">
                    <Link to='/city'>
                        <div className='card small' style={{ maxHeight: "200px" }} >
                            <div className='card-image' style={{ maxHeight: "200px" }}>
                                <img src={CoverImg} alt='' />
                                <span id="city-card" className='card-title white-text lighten-2 '>Cities</span>
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
    //console.log(state)
    return {
        //cities: state.city.cities,
        // projects: state.firestore.ordered.projects,
        // auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default connect(mapStatetoProps)(Dashboard)
// export default compose(
//     connect(mapStatetoProps),
//     firestoreConnect([
//         { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
//     ])
// )(Dashboard)