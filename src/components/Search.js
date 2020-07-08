import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

<<<<<<< HEAD
//*****************Parent ************************

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      flights: [],
    /* flight_id: "" */ //to pass to display flights ?
    };
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(o,d) {
    axios.get(FLIGHTS_URL).then(function (results){
      let array_flights = [];
      for (let i=0; i<results.data.length; i++)
        if (results.data[i].origin === o && results.data[i].destination === d)
          array_flights.push(results.data[i]);
        this.setState({flights : array_flights});
    }.bind(this));
  }

  render(){
    return (
      <div>
        <SearchForm onSubmit = {this.fetchFlights} />
      </div>
    );
  }

}

//***************child****************************************

class SearchForm extends Component {
=======
//i changed this to Search from SearchForm
class Search extends Component {
>>>>>>> f93a379d8b2853e2ccd8a339c0c268a2ee70cfa1
  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
    };

    this._handleChange1 = this._handleChange1.bind(this);
    this._handleChange2 = this._handleChange2.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

    _handleChange1(event){
      console.log(event.target.value);
      this.setState( {origin: event.target.value} );
    }

    _handleChange2(event){
      console.log(event.target.value);
      this.setState( {destination: event.target.value} );
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.origin,this.state.destination);
    }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>

        <label className = "search"><span>
        Origin: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </span>
          <select value={this.state.origin} onChange={this._handleChange1}>
            <option value="">Select...</option>
            <option value="Sydney">Sydney</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Adelaide">Adelaide</option>
          </select>
        </label><br />

        <label className = "search"><span>
        Destination: &nbsp; &nbsp; &nbsp;</span>
          <select value={this.state.destination} onChange={this._handleChange2}>
            <option value="">Select...</option>
            <option value="Sydney">Sydney</option>
            <option value="Brisbane">Brisbane</option>
            <option value="Adelaide">Adelaide</option>
          </select>
        </label><br />


        <input type="submit" value="Submit" />
      </form>
    );
  }
}

<<<<<<< HEAD
=======
// class
>>>>>>> f93a379d8b2853e2ccd8a339c0c268a2ee70cfa1

export default Search;
