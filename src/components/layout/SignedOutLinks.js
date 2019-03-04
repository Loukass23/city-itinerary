import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
   return (

      <ul className="right hide-on-sm-and-down">
         <li><NavLink to='/signup'>Sign Up</NavLink></li>
         <li><NavLink to='/signin'>Log In</NavLink></li>
      </ul>




   )
}
export default SignedOutLinks;