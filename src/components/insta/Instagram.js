import React, { Component } from 'react'
import IgItem from './IgItem'
import IgUser from './IgUser'
import { getIgProfile, getIgData } from '../../store/action/igActions'
import { connect } from 'react-redux'



class Instagram extends Component {
    componentDidMount() {
        this.props.getIgProfile()
        this.props.getIgData()

    }

    render() {
        const { igUser, igData } = this.props
        console.log(igUser)
        return (
            <div className="section">
                <div className="row">
                    {igUser && <IgUser user={igUser} />
                    }
                </div>
                {igData && igData.map(post => {
                    return (
                        // <Link to={'/city/' + city.cityName} key={city.cityName}>
                        <IgItem post={post} key={post.id} />
                        // </Link>
                    )
                })}
            </div>
        );
    }
}
const mapStateToProp = (state) => {
    return {
        igUser: state.ig.igUser,
        igData: state.ig.igData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getIgProfile: () => dispatch(getIgProfile()),
        getIgData: () => dispatch(getIgData())
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(Instagram)