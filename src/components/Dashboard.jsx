import React, { Component } from 'react';
import ResponsiveStatBar from './ResponsiveStatBar';
import MobileStatBar from './MobileStatBar';
import TabletStatBar from './TabletStatbar';
import StatColumns from './StatColumns';
import DashboardButtons from './DashboardButtons';
import Menu from './Menu';
import './Dashboard.css';



class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
            <DashboardButtons />
            <StatColumns />
            <MobileStatBar />
            <TabletStatBar />
            <ResponsiveStatBar />
        </div>
    )
  }
}

export default Dashboard;
