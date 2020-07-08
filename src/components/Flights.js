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

  render (){
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

// render () {
//   return (
//     <div>
//       <form>
//         { this.state.flights.map((f) =>
//           <input type="radio" value={ f.id }>
//           <label for={ f.id }>{ f.origin} - {f.destination} , {f.date}</label> )
//         }
//       </form>
//     </div>
//   );
// }
