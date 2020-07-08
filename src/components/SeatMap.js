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
}
