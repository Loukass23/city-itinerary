import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/action/authActions'
import { googleSignIn } from '../../store/action/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    handleGoogleButton = (e) => {
        e.preventDefault();
        this.props.googleSignIn()
    }
    render() {
        const { authErr, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container w-50">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email" >Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn teal lighten-1 z-depth-0">LOGIN</button>

                        <div className="red-text-center">
                            {authErr ? <p>{authErr}</p> : null}
                        </div>
                    </div>
                    <button onClick={this.handleGoogleButton} className="btn teal lighten-1 z-depth-0">Google SignIn</button>

                </form>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        authErr: state.auth.authErr,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
        googleSignIn: () => dispatch(googleSignIn())

    }
}
export default connect(mapStateToProp, mapDispatchToProps)(SignIn)
