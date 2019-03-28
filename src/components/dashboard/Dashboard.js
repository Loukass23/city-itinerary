import React, { Component } from 'react'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Insta from './Insta'



class Dashboard extends Component {
    render() {

        const { cities } = this.props;
        console.log(cities)
        return (
            <div className="dashboard container">
                <h1>City Intinerary</h1>
                <div className="row">
                    <Link to='/city'>
                        <div className='card red lighten-2 small' style={{ maxHeight: "200px" }} >
                            <div className='card-title white-text lighten-2 '><h1>Cities</h1></div>

                        </div></Link>
                    {/* <Link to='/instagram'>
                        <div className='card red lighten-2 small' style={{ maxHeight: "200px" }} >
                            <div className='card-title white-text lighten-2 '><h1>Instagram</h1></div>

                        </div></Link> */}




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

    }
}
//export default connect(mapStatetoProps)(Dashboard)
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'cities', orderBy: ['createdAt', 'desc'] }
    ])
)(Dashboard)