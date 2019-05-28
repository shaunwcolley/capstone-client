import React, { Component } from 'react';
import Breakpoint, { setDefaultBreakpoints } from 'react-socks';
import './Login.css';
import { LoginImage } from './LoginImage';
import { MobileImage, TabletImage, DesktopImage } from './Images';
import MobileLogin from './MobileLogin';
import TabletLogin from './TabletLogin';
import DesktopLogin from './DesktopLogin';

class Login extends Component {
  render() {
    return (
      <div className="all-sizes">
         <MobileLogin />
        <TabletLogin />
        <DesktopLogin />
      </div>
    );
  }
}
export default Login;
