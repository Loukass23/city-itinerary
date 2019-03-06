import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import CityChoice from './components/dashboard/CityChoice'
import ItineraryChoice from './components/dashboard/ItineraryChoice'
import CreateItinerary from './components/itinerary/CreateItinerary'
import ItineraryDetails from './components/dashboard/ItineraryDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Navbar from './components/layout/Sidenav'
import './App.css';
import CreateCity from './components/city/CreateCity';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/city' component={CityChoice} />
            <Route path='/city/:name' component={ItineraryChoice} />
            <Route path='/city/:name/itinerary/:id' component={ItineraryDetails} />
            <Route path='/createItinerary' component={CreateItinerary} />
            <Route path='/createCity' component={CreateCity} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
