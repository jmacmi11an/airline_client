import React, { Component } from 'react';
import axios from 'axios';

const USERS_URL = 'http://localhost:3000/users.json';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      user_id: '', //flight_id, user_id, seat
      flight_id: '',
      email: "",
      seat: '1A'
    }

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }


  fetchUsers(currentEmail) {
    axios.get(USERS_URL).then(function (results){
      let currentUser = {};
      for (let i=0; i<results.data.length; i++)
        if (results.data[i].email == this.state.email){
          currentUser = results.data[i].id
        };
      this.setState({user_id : currentUser});
    }.bind(this));
  }

  _handleInput(event){
    this.setState({email: event.target.value});
    console.log('handleinput event', event.target.value)
  }

  _handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:3000/reservations', {user_id: this.state.user_id, flight_id: this.props.currentFlight, seat: this.state.seat })
    console.log('handlesubmit event', event.target.value)
  }

  render(){
    return(
      <div>
        <form onChange={ this.fetchUsers }>
          <label>Email:</label>
          <input name="email" type="text" placeholder="john.doe@gmail.com" required onInput={ this._handleInput }/>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}


export default Login;


//           <label>Password: </label>
          // <input name="password" type="password" required/>
