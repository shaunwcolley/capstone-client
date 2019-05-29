import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import './Login.css';
import { DesktopImage } from './Images';

const LOGIN = gql `
mutation login($username: String, $password: String){
  login(username: $username, password: $password) {
    token
    error
    success
    userId
    message
  }
}
`

const shaunCred = {
  "username": "ShaunC",
  "password": "SCwayfinder"
}

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
              <Mutation mutation={LOGIN} variables={shaunCred} >
              {(login, { data, loading, error }) => {
                if (loading) return <p>loading...</p>;
                if (error) return <p>error...</p>;
                if(data) {
                  return <div>{data.login.error}</div>
                }
                return <button type="button" onClick={login} className="LoginButton">Login</button>
              }}
              </Mutation>
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
