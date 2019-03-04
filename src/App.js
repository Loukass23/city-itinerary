import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ItineraryChoice from './components/dashboard/ItineraryChoice'
import CreateItinerary from './components/itinerary/CreateItinerary'
import ItineraryDetails from './components/dashboard/ItineraryDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Navbar from './components/layout/Navbar'
import AppNav from './components/layout/AppNav'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/city/:name' component={ItineraryChoice} />
            <Route path='/city/:name/itinerary/:id' component={ItineraryDetails} />
            <Route path='/create' component={CreateItinerary} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
