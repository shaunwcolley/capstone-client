import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardButtons extends Component {
    render () {
        return (

            <div className="filter-add-website-row">
            <div className="filter-website-button">
              <div className="filter-button">
                <p>Filter:</p>
                <button type="button" className="a-z">A-Z</button>
              </div>
              <button type="button" className="add-button"><Link to="/addwebsite">Add Website</Link></button>
            </div>
          </div>
        )
    }
}

export default DashboardButtons;
