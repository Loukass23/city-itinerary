import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createItinerary } from '../../store/action/itineraryAction'
import { Redirect } from 'react-router-dom'
import { uploadImage } from '../../store/action/itineraryAction'
import { FileUploader } from "react-firebase-file-uploader";
import firebase from "firebase";
import './itinerary.css'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'


class CreateItinerary extends Component {

    componentDidMount() {
        console.log(M);
        M.AutoInit();

    }
    state = {
        title: '',
        cityName: '',
        file: null,
        isUploading: false,
        progress: 0,
        photoURL: "",
        duration: null,
        price: null,
        rating: null,
        summary: null

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
    handleUpload = () => {
        const storageService = firebase.storage();
        const storageRef = storageService.ref();

        console.log(this.state.file.name)
        this.setState({ isUploading: true, progress: 0 })

        const uploadTask = storageRef.child(`images/${this.state.file.name}`).put(this.state.file); //create a child directory called images, and place the file inside this directory

        uploadTask.on('state_changed', (snapshot) => {
            console.log(snapshot)
            let prog = Math.round(snapshot.bytesTransferred * 100 / snapshot.totalBytes)
            this.setState({ progress: prog });
            //this.handleProgress()
        }, (error) => {
            //this.handleUploadError()
            console.log(error);
        }, () => {
            console.log('success');
            this.setState({ isUploading: false, progress: 100 })
            firebase
                .storage()
                .ref("images")
                .child(`${this.state.file.name}`)
                .getDownloadURL()
                .then(url => this.setState({ photoURL: url }));

        });
    }
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: true });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ file: filename, progress: 100, isUploading: false });

        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ photoURL: url }));
    }
    // displayPicture(e) {
    //     e.preventDefault();
    //     let reader = new FileReader();
    //     console.log(e)
    // let file = e.target.file[0]
    // this.props.uploadImage(file)

    // reader.onload = () => {
    //     this.setState({
    //         picture: file,
    //         photoURL: reader.result
    //     })
    // }
    // reader.readAsDataURL(file)


    render() {
        const { cities, input } = this.props
        console.log(this.props)
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
                        <select onChange={this.handleChange} id="cityName">
                            <option selected disabled>Choose your city</option>

                            {cities && cities.map((city, i) => {
                                return (
                                    <option htmlFor="cityName" key={i} value={city.name}>{city.name}</option>

                                )
                            })}
                        </select>
                        <label>Select City</label>
                    </div>
                    <div className="input-field">
                        <select onChange={this.handleChange} id="price">
                            <option >Cheap</option>
                            <option >Moderate</option>
                            <option >Expensive</option>
                        </select>
                        <label htmlFor="price">Price in €</label>
                    </div>
                    <div className="input-field">
                        <input id="duration" type="text" length="10" className="materialize-textarea" onChange={this.handleChange} />
                        <label htmlFor="duration">Duration in hours</label>
                    </div>

                    <div className="input-field">
                        <label htmlFor="summary" >Summary</label>
                        <textarea id="summary" cols="30" rows="10" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input accept="image/*" type="file" {...input} onChange={(e) => {
                                this.setState({ file: e.target.files[0] }, this.handleUpload)
                            }} />
                        </div>
                        <div className="file-path-wrapper col s6">
                            <input className="file-path validate" type="text" />

                        </div>
                        <div className="col s6">
                            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                            {this.state.photoURL && <img width="100px" src={this.state.photoURL} alt="" />}
                        </div>

                    </div>
                    <div className="input-field">




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
const mapStateToProp = (state) => {
    return {
        cities: state.city.cities
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(CreateItinerary)
