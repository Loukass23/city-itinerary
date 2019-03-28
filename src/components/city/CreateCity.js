import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCity } from '../../store/action/cityAction'
import { Link } from 'react-router-dom'

import firebase from "firebase";

import countryList from 'react-select-country-list'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'




class CreateCity extends Component {

    componentDidMount() {
        M.AutoInit();


    }

    state = {
        countryName: '',
        cityName: '',
        file: null,
        isUploading: false,
        progress: 0,
        photoURL: "",
        summary: null,
        options: countryList().getData(),
        value: "",
        error: null

    }


    changeSelectHandler = value => {
        this.setState({ value })
    }

    changeHandler = value => {
        this.setState({ value })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCity(this.state)
        this.props.history.push('/')
    }
    handleUpload = () => {
        const storageService = firebase.storage();
        const storageRef = storageService.ref();
        this.setState({ isUploading: true, progress: 0 })

        const uploadTask = storageRef.child(`cities/${this.state.file.name}`).put(this.state.file); //create a child directory called images, and place the file inside this directory

        uploadTask.on('state_changed', (snapshot) => {
            let prog = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes)
            this.setState({ progress: prog });

        }, (error) => {
            this.setState({ error: error })
            console.log(error);
        }, () => {
            console.log('success');
            this.setState({ isUploading: false, progress: 100 })
            firebase
                .storage()
                .ref("cities")
                .child(`${this.state.file.name}`)
                // .getMetadata()
                // .then(meta => {
                //     console.log(meta)
                // })
                .getDownloadURL()
                .then(url => {
                    console.log(url)
                    this.setState({ photoURL: url })
                })


        });
    }
    render() {
        const progressBarUp = {
            width: this.state.progress + "%"
        }
        const { cities, input } = this.props
        //if (!auth.uid) return <Redirect to='/signin' />
        console.log(this.state.error)
        return (
            <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s1" >
                        <Link to='/city'><div className="btn-floating btn-large waves-effect waves-light red lighten-2">
                            <i className=" white-text lighten-3 fas fa-2x fa-arrow-left " /></div></Link>
                    </div>
                    <h4 className="col s11" >
                        Create City
                    </h4>
                </div>
                <form onSubmit={this.handleSubmit} className="white">



                    <div className="input-field">
                        <label htmlFor="cityName" >City name</label>
                        <input required type="text" id="cityName" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <select required
                            value={this.state.value}
                            onChange={this.handleChange} id="countryName">

                            {this.state.options && this.state.options.map((country, i) => {
                                return (
                                    <option htmlFor="countryName" key={i} value={country.label}>{country.label}</option>

                                )
                            })}
                        </select>
                        <label>Select Country</label>
                    </div>


                    <div className="input-field">
                        <label required htmlFor="summary" >Summary</label>
                        <textarea id="summary" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="row">
                        <div className="col s6 file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input required accept="image/*" type="file" {...input} onChange={(e) => {
                                    this.setState({ file: e.target.files[0], isUploading: true }, this.handleUpload)
                                }} />
                            </div>
                            <div className="file-path-wrapper ">
                                <input className="file-path validate" type="text" />
                            </div>
                            {this.state.isUploading && <div className="progress">
                                <div className="determinate" style={progressBarUp}></div>
                            </div>}
                        </div>
                        <div className="col s6">

                            {this.state.photoURL && <img width="100px" src={this.state.photoURL} alt="" />}
                        </div>

                    </div>
                    <div className="input-field">
                    </div>
                    <div className="input-field">
                        {!this.isUploading && <button disabled={this.isUploading} className="btn red lighten-2 z-depth-0">Create</button>}
                        {this.state.error && <p className="red">You need to log in to create a new city</p>}
                    </div>
                </form>
            </div>)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createCity: (city) => dispatch(createCity(city))

    }
}


export default connect(null, mapDispatchToProps)(CreateCity)

