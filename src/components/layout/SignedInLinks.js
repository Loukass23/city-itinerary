import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/action/authActions'

const style = {
   margin: '15px',
   border: '3px solid teal'
};
const SignedInLinks = (props) => {
   return (

      <>
         <li><NavLink to='/createItinerary'>New itinerary</NavLink></li>
         <li><NavLink to='/createCity'>New City</NavLink></li>
         <li><a onClick={props.signOut}>Log Out</a></li>
      </>

   )
}
const mapDispatchToprops = (dispatch) => {
   return {
      signOut: () => dispatch(signOut())
   }
}

export default connect(null, mapDispatchToprops)(SignedInLinks)