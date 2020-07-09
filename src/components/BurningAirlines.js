import React, { Component } from 'react';
import Flights from './Flights'
import Search from './Search'
import Login from './Login';
import Reservations from './Reservations';

import { Alert } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Jumbotron, Container } from 'reactstrap';
// >>>>>>> f63a5912d4f053e9beca3a71d644b310e9d87657
// import axios from 'axios';


class BurningAirlines extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render () {
    return (
      <div>
         <Jumbotron fluid>
         <Container fluid>
        <h1 className="display-3">Welcome to Burning Airlines</h1>
        <p className="lead">fly at your own risk</p>
        </Container>
        </Jumbotron>
         <Search />
         <Reservations />
      </div>
    )
  }
}


export default BurningAirlines;
