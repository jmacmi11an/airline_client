import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor(props){
    super(props);
    this.state = {
      flights_all: [],
      selectedFlight: null,
    }

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);
  }

  getInitialState(){
    return {
      selectedFlight: this.state.flights_all[0]
    };
  }

  _handleOptionChange(event){
    this.setState({
      selectedFlight: event.target.value
    });
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log('you have selected: ', this.state.selectedFlight);
  }


  render (){
    // Add a conditional here so the following is only shown if a boolean is triggered.
    console.log(this.props)
    return (
      <form onSubmit={this._handleSubmit}>
        { this.props.flights_all.map((f) =>
          <div>
            <label>
              <input type="radio" id={ f.id } value={ f.id } checked={this.state.selectedFlight == f.id } onChange={this._handleOptionChange}/>
              { f.origin } - { f.destination }, { f.date }
            </label>
          </div> )
        }
        <button type="submit">Select Flight</button>
      </form>
    )
  }


}



export default Flights;




// Copied from SECRETS, But -- Don't need to save flights, need to select a single flight
// saveFlights(content){
//   axios.post(FLIGHTS_URL, {content: content}).then((result) => {
//     this.setState({flights: [result.data, ...this.state.secrets]});
//   });
// }
