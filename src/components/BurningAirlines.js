import React, { Component } from 'react';
import Flights from './Flights'
import Search from './Search'
import SeatMap from './SeatMap';

import { Alert } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import Reservations from './Reservations';

import axios from 'axios';


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
         <Login />
         <Search />
         {/* <Flights flights={this.props.flights}/> */}
         <SeatMap />
         <Reservations />
      </div>
    )
  }
}



class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      passwordDigest: '',
    }

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event){
    this.setState({email: event.target.value});
    console.log('handleinput event', event.target.value)
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log('handlesubmit event', event)
  }
  render(){
    return(
      <div>
        <form onSubmit={ this._handleSubmit }>
          <label>Email:</label>
          <input name="email" type="text" placeholder="john.doe@gmail.com" required onInput={ this._handleInput }/>
          <label>Password: </label>
          <input name="password" type="password" required/>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}


export default BurningAirlines;
