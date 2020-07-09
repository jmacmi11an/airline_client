import React, { Component } from 'react';
import SeatMap from './SeatMap'
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Flights extends Component {
  constructor(props){
    super(props);
    this.state = {
      flights_all: this.props.flights_all,
      selectedFlight: null,
    }
    this.fetchFlight = this.fetchFlight.bind(this);
  }

  fetchFlight(flight){
    this.setState({selectedFlight: flight })
  }

  render(){
    return(
      <div>
        <FlightForm flights_all={this.props.flights_all} onSubmit={this.fetchFlight}/>
        <SeatMap currentFlight={ this.state.selectedFlight}/>
      </div>
    )
  }
}


////////////////////////child//////////////////////////////

class FlightForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      flights_all: this.props.flights_all,
      selectedFlight: {}
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);
  }

  _handleOptionChange(event){
    this.setState({
      selectedFlight: event.target.value
    });
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log('you have selected: ', this.state.selectedFlight);
    this.props.onSubmit(this.state.selectedFlight)
  }


  render (){
    // Add a conditional here so the following is only shown if a boolean is triggered.
    console.log(this.props)
    return (
      <form onSubmit={this._handleSubmit}>
        { this.props.flights_all.map((f) =>
          <div>
              <input type="radio" id={ f.id } value={ f.id } checked={this.state.selectedFlight == f.id } onChange={this._handleOptionChange}/>
              { f.origin } - { f.destination }, { f.date }
          </div> )
        }
        <button type="submit">Select Flight</button>
      </form>
    );
  }
}


export default Flights;




// Copied from SECRETS, But -- Don't need to save flights, need to select a single flight
// saveFlights(content){
//   axios.post(FLIGHTS_URL, {content: content}).then((result) => {
//     this.setState({flights: [result.data, ...this.state.secrets]});
//   });
// }
