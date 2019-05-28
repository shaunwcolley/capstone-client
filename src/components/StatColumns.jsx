import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import './Dashboard.css';

class StatColumns extends Component {
  render() {
    return (
      <Breakpoint large up>
        <div className="column-placement">
          <div className="column-titles">
            <p className="performance">PERFORMANCE</p>
            <p className="seo">SEO</p>
            <p className="accessibilty">ACCESSIBILITY</p>
            <p className="best-practices">BEST PRACTICES</p>
          </div>
        </div>
      </Breakpoint>
    );
  }
}


export default StatColumns;
