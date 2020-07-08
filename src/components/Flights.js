import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Flights extends Component {
  constructor(){
    super();
    this.state = {
      flights: [],
    }

    const fetchFlights = () => {
      axios.get(FLIGHTS_URL).then((results) => {
        this.setState({flights: results.data});
        // do we need regular updating? probably
      });
    };

    fetchFlights();

  }

  saveFlights(content){
    axios.post(FLIGHTS_URL, {content: content}).then((result) => {
      this.setState({flights: [result.data, ...this.state.secrets]});
    });
  }


  render () {
    return (
      <div>
        <ul>
          { this.state.flights.map((f) => <li key={ f.id }>
            { f.origin}- 
            { f.destination},
            { f.date }</li>) }
        </ul>
      </div>
    )
  }
}



export default Flights;
