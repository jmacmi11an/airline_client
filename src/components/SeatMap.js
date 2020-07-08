import React, { Component } from 'react';

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

    )
  }
}
export default SeatMap;
