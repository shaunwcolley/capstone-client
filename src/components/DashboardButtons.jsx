import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class DashboardButtons extends Component {

handleSortButtonAZ = (e) => {
  this.props.handleSortButtonAZ();
}

handleSortButtonZA = (e) => {
  this.props.handleSortButtonZA();
}

    render () {
        return (

            <div className="filter-add-website-row">
            <div className="filter-website-button">
              <div className="filter-button">
                <p>Filter:</p>
                <button type="button" onClick={this.handleSortButtonAZ} className="a-z">A-Z</button>
                <button type="button" onClick={this.handleSortButtonZA} className="a-z">Z-A</button>
              <button type="button" className="add-button"><Link to="/addwebsite">Add Website</Link></button>
            </div>
          </div>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSortButtonAZ: (data) => dispatch({type: 'AtoZ'}),

    handleSortButtonZA: (data) => dispatch({type: 'ZtoA'})
};
}

export default connect(null, mapDispatchToProps)(DashboardButtons)
