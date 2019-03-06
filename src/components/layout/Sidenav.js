import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import BerlinPhoto from '../../assets/img/Berlin.jpg'
import Notifications from '../dashboard/Notifications'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'





class Sidenav extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
        const options = {
            inDuration: 250,
            outDuration: 200,
            draggable: true
        };

    }
    render() {
        const { auth, profile, notifications } = this.props
        console.log(notifications)
        const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
        const avatar = profile.avatar ? <img width="50px" className="circle valign-wrapper" src={profile.avatar} alt="" /> : <div className='btn btn-floating teal lighten-1'>{profile.initials}</div>

        return (

            <>
                <nav>
                    <div className="nav-wrapper">

                        <Link to='/' className="brand-logo" >City Itineraries</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down valign-wrapper">
                            {links}

                            <li> {avatar}</li>



                        </ul>
                    </div>
                </nav>

                <ul class="sidenav" id="mobile-demo">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={BerlinPhoto} alt="" />
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    {avatar}
                                </div>
                                <div className="col s6">
                                    <span className="black-text name">{profile.firstName} {profile.lastName}</span>
                                </div>

                            </div>
                        </div>
                    </li>
                    {links}

                    <li>
                        <div className="divider" />
                        <Notifications notifications={notifications} />

                    </li>

                </ul>


            </>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        notifications: state.firestore.ordered.notifications
    }
}
//export default connect(mapStateToProps)(Sidenav);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Sidenav)