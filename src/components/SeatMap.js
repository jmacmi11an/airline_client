import React, { Component } from 'react';
import axios from 'axios';

const FLIGHTS_URL = 'http://localhost:3000/flights.json';

class Seat extends Component {
  checkTaken = () => {
    if ( this.props.takenSeats.indexOf(this.props.seatID) !== -1) {
      this.setState({
        isTaken: true
      });
    } else {
      this.setState ({
        isTaken: false;
      });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      isTaken: false; // seat is not taken
    };
  }

  updatedComponent() {
    this.checkTaken();
  }

  _handleClick = (q) => {
    this.props.getSeat(this.props.seatID);
    this.setState({
      isSelected: true
    });
  }

  render() {
    return (
      <div> className={ this.state.isTaken ? "this seat is taken " : "this seat is free "} onClick={this._handleClick}>
      <div> className={ this.props.selectedSeat === this.props.seatID && !this.state.isTaken ? "seleced" : null }>

      </div>
      </div>
    );
  }
}

class SeatMap extends Component {
  getSeat = (s) => {
    this.setState({
      selectedSeat: s
    });
    this.props.passSeat(s);
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedSeat: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Seat Map</h2>
        <p>Please choose an available seat</p>
        <div className="grid-container" >
          {/* make a row for number of rows */}
          { [...Array(this.props.rows)].map((e, i) =>
            <div className="grid-row" key={i}>
              {/* row letter */}
              <span className="row-num">{ String.fromCharCode(i+65) }</span>
              {/*  make seat / num of cols */}
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
        <p>Selected Seat: { this.state.selectedSeat } </p>
      </div>
    );
  }
}

export default SeatMap;
