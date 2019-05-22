import React, { Component } from 'react';
import './Login.css';
import { LoginImage } from './LoginImage.jsx'

export class Login extends Component {
  render() {
    return (
      <div className="LoginContainerBox">
        <div className="LoginBox">
        <h2 className="LoginTitle"> Login </h2>
        <input className="LoginInputField" name="username" onChange={this.handleTextBoxChange} placeholder="User Name" />
        <input className="LoginInputField" name="password" onChange={this.handleTextBoxChange} placeholder="Password" />
        <button className="LoginButton" onClick={this.handleLoginClick}>Login</button>
        </div>
        <LoginImage />
      </div>
    );
  }
}
