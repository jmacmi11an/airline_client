import React, { Component } from 'react';
import axios from 'axios';

const RESERVATIONS_URL = 'http://localhost:3000/reservations.json';

class Reservations extends Component {
  constructor(){
    super();
    this.state = {
      reservations: [],
      userID: "1",    //testing - otherwise start as null
      myRes: [] //myReservations(),
    }

    const fetchReservations = () => {
      axios.get(RESERVATIONS_URL).then((results) => {
        this.setState({reservations: results.data})
      })
    }

  }

//this function returns an array of objects that match the user with this.state.userID
// const myReservations = () => {
//   let result = [];
//   let allReservations = this.state.reservations
//   for (let i = 0; i < allReservations.length; i++){
//     if (allReservations[i].user_id == this.state.userID){
//       result.push(allReservations[i])
//     }
//     }
//     console.log(result);
//     return result
//   }


  render (){
    return (
      <div>
        <h4>My reservations:</h4>
        { this.state.myRes.map((r) =>
          <ul>
            <li>{r.seat} - {r.url}</li>
          </ul>)}

      </div>
    )

  }

}



export default Reservations;




// testing a few functions to pull things from array of objects:
