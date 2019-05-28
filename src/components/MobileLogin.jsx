import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import './Login.css';
import { MobileImage } from './Images';

class MobileLogin extends Component {
  render() {
    return (
      <div className="login-screen">
        <Breakpoint small down>
          <div className="image-half">
            <MobileImage />
          </div>
          <div className="login-orgainizer">
            <div className="input-half">
              <h2 className="LoginTitle"> Login </h2>
              <input className="LoginInputField" name="username" onChange={this.handleTextBoxChange} placeholder="Username" />
              <input className="LoginInputField" name="password" onChange={this.handleTextBoxChange} placeholder="Password" />
              <div className="submit">
                <button type="button" className="LoginButton" onClick={this.handleLoginClick}>Submit</button>
                <p className="EmailText"> Forgot Email? </p>
              </div>
            </div>
          </div>
        </Breakpoint>
      </div>
    );
  }
}
export default MobileLogin;
