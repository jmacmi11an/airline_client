import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Seat extends Component {
  checkIsAvailable = () => {
    if ( this.props.takenSeats.indexOf( this.props.seatId ) !== -1 ) { // if this seat is taken
      this.setState({
        isTaken: true
      });
    } else {
      this.setState({
        isTaken: false
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isTaken: false,
      // isSelected: false
    };
  }

  confirmUpdate() {
    this.checkIsAvailable();
  }

  _handleClick = (e) => {
    // console.log( this.props.seatId );
    this.props.getSelectedSeat( this.props.seatId );
    this.setState({
      isSelected: true
    });

  }

  render() {
    // console.log( this.props.selectedSeat );
    return (
      <div className={ this.state.isTaken ? "this seat is taken" : "this seat is available" } onClick={ this._handleClick } >
        <div className={ this.props.selectedSeat === this.props.seatId && !this.state.isTaken ? "selected" : null } >

        </div>
      </div>
    );
  }
}

class SeatMap extends Component {
  getSelectedSeat = (s) => {
    this.setState({
      selectedSeat: s
    });
    this.props.passSeat(s);
  }


  constructor(props) {
    super(props);
    this.state = {
      selectedSeat: ""
    };
  }

  render() {
    return (
      <div>
        <h2>Gaudy Seat Map</h2>
        <p>Please choose a seat</p>
        <div className="grid-container" >
          {/* make a row for number of rows */}
          { [...Array(this.props.rows)].map((e, i) =>
            <div className="grid-row" key={i}>
              {/* row letter */}
              <span className="row-num">{ String.fromCharCode(i+65) }</span>
              {/*  make seat re num of cols */}
              { [...Array(this.props.cols)].map((e, j) =>
                <Seat
                  key={`${String.fromCharCode(i+65)}${j+1}`}
                  seatId={`${String.fromCharCode(i+65)}${j+1}`}
                  takenSeats={ this.props.takenSeats }
                  getSelectedSeat={ this.getSelectedSeat }
                  selectedSeat={ this.state.selectedSeat }
                />
              ) }
            </div>
          ) }
        </div>
        <p>Selected Seat: { this.state.selectedSeat }</p>
      </div>
    );
  }
}

export default SeatMap;
