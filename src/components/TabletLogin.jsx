/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import './Login.css';
import { TabletImage } from './Images';

class TabletLogin extends Component {
  render() {
    return (
      <div className="login-screen">
        <Breakpoint medium only>
          <div className="tablet-login">
            <div className="login">
              <h4>Login</h4>
              <input className="LoginInputField" placeholder="username" />
              <input className="LoginInputField" placeholder="password" />
              <div className="login-button">
                <button type="button" className="LoginButton">Login</button>
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className="tablet-login-image">
              <TabletImage />
            </div>
          </div>

        </Breakpoint>


      </div>
    );
  }
}
export default TabletLogin;
