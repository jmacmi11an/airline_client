import React, { Component } from 'react';
import Flights from './Flights'
import Search from './Search'
import SeatMap from './SeatMap';
import Reservations from './Reservations';
import Login from './Login';
// import axios from 'axios';


class BurningAirlines extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <h1>Welcome to Burning Airlines</h1>
        <p>fly at your own risk</p>
         <Search />
         <Flights flights={this.props.flights}/>
         <SeatMap />
         <Login />
         <Reservations />
      </div>
    )
  }
}


export default BurningAirlines;

// <Login />
// <Locations />
// <Flights />
// <Reservations />
// <SeatMap  />
// <MyRes />
