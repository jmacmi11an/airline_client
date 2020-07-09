import React, { Component } from 'react';



class Login extends Component {
  constructor(){
    super();

    this.state = {
      newReservation: {}, //flight_id, user_id, seat
      email: '',
      passwordDigest: '',
    }

    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event){
    this.setState({email: event.target.value});
    console.log('handleinput event', event.target.value)
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log('handlesubmit event', event)
  }
  render(){
    return(
      <div>
        <form onSubmit={ this._handleSubmit }>
          <label>Email:</label>
          <input name="email" type="text" placeholder="john.doe@gmail.com" required onInput={ this._handleInput }/>
          <label>Password: </label>
          <input name="password" type="password" required/>
          <button>Submit</button>
        </form>
      </div>
    )
  }

}


export default Login;
