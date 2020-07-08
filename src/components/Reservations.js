import React, { Component } from 'react';
import axios from 'axios';

const RESERVATIONS_URL = 'http://localhost:3000/reservations.json';

class Reservations extends Component {
  constructor(){
    super();
    this.state = {
      reservations: [],
      userID: null,
    }
  }

  render (){
    return (
      <div>
        <h4>My reservations:</h4>

      </div>
    )

  }

}



export default Reservations;
