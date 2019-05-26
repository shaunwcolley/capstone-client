import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import './MobileStatBar.css';

class MobileStatBar extends Component {
    render() {
        return (
            <Breakpoint medium only>
                <div>I will render only in tablets (iPad, etc...)</div>
            <div className="MobileStatbar">

        </div>
          </Breakpoint>
          
        )
  }
}
export default MobileStatBar;
