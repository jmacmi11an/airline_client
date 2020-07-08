import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor(){
    super();
    this.state = {
      flights: [],
      flight: '',
    }

    const fetchFlights = () => {
      axios.get(FLIGHTS_URL).then((results) => {
        this.setState({flights: results.data});
        // do we need regular updating? probably
      });
    };

    fetchFlights();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event){
    event.preventDefault();
    this.state.flight.onSubmit(this.state.flights.id)
    console.log(this.state.flights.id)
  }



  render (){
    // Add a conditional here so the following is only shown if a boolean is triggered.
    return (
      <div>
        <form onSubmit={ this._handleSubmit }>
          { this.state.flights.map((f) =>
            <div>
              <input type="radio" name="flight" id={ f.id } value={ f.id } />
              <label for={ f.id }>{ f.origin } - { f.destination } , { f.date }</label>
            </div> )
          }
          <button>Select Flight</button>
        </form>
      </div>
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
