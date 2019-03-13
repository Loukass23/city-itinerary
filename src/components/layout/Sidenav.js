import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Notifications from '../dashboard/Notifications'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import SignIn from '../auth/SignIn'
import { NavLink } from 'react-router-dom'






class Sidenav extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
        const options = {
            inDuration: 250,
            outDuration: 200,
            draggable: true
        };

        var drop = document.querySelectorAll('.dropdown-trigger')
        var instanceDrop = M.Dropdown.init(drop, {
            coverTrigger: false,
            constrainWidth: false,

        });


    }
    render() {
        const { auth, profile, notifications } = this.props

        const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
        const avatar = profile.avatar ? <img width="50px" className="circle valign-wrapper" src={profile.avatar} alt="" /> : <div className='btn btn-floating teal lighten-1'>{profile.initials}</div>

        return (

            <div className="container-fluid px-3">
                <nav>
                    <div className="nav-wrapper">

                        <Link to='/' className="brand-logo" >F.O.C</Link>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul style={{ paddingRight: "10px" }} className="right hide-on-med-and-down valign-wrapper pr3">
                            {links}

                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">notifications</i></a></li>

                            <li> {avatar}</li>



                        </ul>
                    </div>
                </nav>
                <ul id="dropdown1" className="dropdown-content">
                    <li><Notifications notifications={notifications} /></li>

                </ul>

                <ul className="sidenav" id="mobile-demo">
                    <li>
                        {auth.uid && <div className="user-view valign-wrapper">
                            <div className="background indigo lighten-4">
                                {/* <img src={BerlinPhoto} alt="" /> */}
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    {avatar}
                                </div>
                                <div className="col s8">
                                    <span className="black-text name">{profile.firstName} {profile.lastName}</span>
                                </div>
                            </div>
                        </div>}
                        {!auth.uid && <div className="row">
                            <div className="col s12">
                                <SignIn />
                                Not a user? <NavLink to='/signup'> Sign Up</NavLink>
                            </div>


                        </div>}
                    </li>
                    {auth.uid && <SignedInLinks profile={profile} />}

                    <li>
                        <div className="divider" />
                        <span className="teal-text">Notifications</span>

                        <Notifications notifications={notifications} />

                    </li>

                </ul>


            </div>
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