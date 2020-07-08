import React, { Component } from 'react';
import Flights from './Flights'
import Search from './Search'
import SeatMap from './SeatMap';
import Login from './Login';
import Reservations from './Reservations';

import { Alert } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
// >>>>>>> f63a5912d4f053e9beca3a71d644b310e9d87657
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
         <Alert color="info">
        <h1>Welcome to Burning Airlines</h1>
        </Alert>
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
