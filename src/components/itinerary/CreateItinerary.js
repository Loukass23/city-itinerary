import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createItinerary } from '../../store/action/itineraryAction'
import { Redirect } from 'react-router-dom'


class CreateItinerary extends Component {
    state = {
        title: '',
        cityName: ''

    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createItinerary(this.state)
        this.props.history.push('/')
    }
    render() {
        //const { auth } = this.props
        //if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Itinerary</h5>
                    <div className="input-field">
                        <label htmlFor="title" >Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="cityName" >City Name</label>
                        <textarea id="cityName" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createItinerary: (itinerary) => dispatch(createItinerary(itinerary))

    }
}
// const mapStateToProp = (state) => {
//     return {
//         auth: state.firebase.auth
//     }
// }

export default connect(null, mapDispatchToProps)(CreateItinerary)
