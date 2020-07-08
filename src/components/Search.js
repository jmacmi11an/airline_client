import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label> Origin:
            <input type="search" placeholder="Origin" />
          </label><br/>

          <label> Destination:
            <input type="search" placeholder="Destination" />
          </label><br />

          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}


export default Search;
