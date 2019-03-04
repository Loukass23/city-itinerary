import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/action/authActions'
import Avatar from '@material-ui/core/Avatar';

const style = {
   margin: '15px',
   border: '3px solid teal'
};
const SignedInLinks = (props) => {
   console.log(props)
   return (

      <ul className="right hide-on-med-and-down">
         <li><NavLink to='/create'>New itinerary</NavLink></li>
         <li><a onClick={props.signOut}>Log Out</a></li>
         <li>{props.profile.avatar ? <Avatar src={props.profile.avatar} style={style} alt='' /> : <NavLink to='/' className='btn btn-floating teal lighten-1'>{props.profile.initials}</NavLink>}</li>
      </ul>




   )
}
const mapDispatchToprops = (dispatch) => {
   return {
      signOut: () => dispatch(signOut())
   }
}

export default connect(null, mapDispatchToprops)(SignedInLinks)