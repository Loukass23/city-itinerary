import React from 'react'
import Instagram from '../insta/Instagram'
import { Link } from 'react-router-dom'

const Insta = () => {
    return (
        <div className="container">
            <div className="row valign-wrapper" >
                <div className="col s1" >
                    <Link to='/'><div className="btn-floating btn-medium waves-effect waves-light red lighten-3">
                        <i className=" white-text lighten-3 fas fa-2x fa-arrow-left " /></div></Link>
                </div>
                <h4 className="col s11" >
                    Instagram Posts
                </h4>
            </div>
            <div className="row">
                <Instagram />
            </div>
        </div>
    )
}

export default Insta
