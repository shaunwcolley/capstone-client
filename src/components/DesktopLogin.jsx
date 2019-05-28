import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import './Login.css';
import { DesktopImage } from './Images';

class DesktopLogin extends Component {
  render() {
    return (
      <div className="login-screen">
        <Breakpoint large up>
          <div className="desktop-login">
            <div className="login">
              <h4>Login</h4>
              <input className="LoginInputField" placeholder="username" />
              <input className="LoginInputField" placeholder="password" />
              <div className="login-button">
                <button type="button" className="LoginButton">Login</button>
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="desktop-image">
              <DesktopImage />
            </div>
          </div>

        </Breakpoint>


      </div>
    );
  }
}
export default DesktopLogin;
