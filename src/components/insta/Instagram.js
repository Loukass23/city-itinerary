import React, { Component } from 'react'
import IgItem from './IgItem'
import Instafeed from "react-instafeed";
import buildUrl from "react-instafeed";
import { options } from '../../config/instaConfig'
import { getIgProfile } from '../../store/action/igActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


class Instagram extends Component {

    componentDidMount() {
        Instafeed(options).then((res) => this.setState({ data: res.data }))
        this.props.getIgProfile()

    }
    state = {
        data: null,
    }

    render() {
        const { igUser } = this.props
        const data = this.state.data
        console.log(igUser)
        return (
            <div className="section">
                {data && data.map(img => {
                    return (
                        // <Link to={'/city/' + city.cityName} key={city.cityName}>
                        <IgItem img={img} key={img.id} />
                        // </Link>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    console.log(state)
    return {
        igUser: state.igUser.igUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getIgProfile: () => dispatch(getIgProfile())
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Instagram)