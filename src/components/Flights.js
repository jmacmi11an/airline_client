import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor(){
    super();
    this.state = {
      flights: [],
      selectedFlight: '',
    }

    const fetchFlights = () => {
      axios.get(FLIGHTS_URL).then((results) => {
        this.setState({flights: results.data});
        // do we need regular updating? probably
      });
    };

    fetchFlights();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log(this.state.selectedFlight)
  }

  _handleOptionChange(event){
    this.setState({
      selectedFlight: event.target.value
    });
  }



  render (){
    // Add a conditional here so the following is only shown if a boolean is triggered.
    return (
      <form onSubmit={this._handleSubmit}>
        { this.state.flights.map((f) =>
          <div>
            <label>
              <input type="radio" id={ f.id } value={ f.id } checked={this.state.selectedOption === f.id } onChange={this._handleOptionChange}/>
              { f.origin } - { f.destination }, { f.date }
            </label>
          </div> )
        }
        <button>Select Flight</button>
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
