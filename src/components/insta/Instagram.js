import React, { Component } from 'react'
import IgItem from './IgItem'
import Instafeed from "react-instafeed";
import { options } from '../../config/instaConfig'

class Instagram extends Component {

    componentDidMount() {

        Instafeed(options).then((res) => this.setState({ data: res.data }))

    }
    state = {
        data: null
    }

    render() {

        const data = this.state.data
        console.log(data)
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

export default Instagram
