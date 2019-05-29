import React, { Component } from 'react';
import Breakpoint, { setDefaultBreakpoints } from 'react-socks';
import './ResponsiveStatBar.css';
import colorCode from '../Utils/ColorCode';

class Data extends Component {
  render() {
    const mobileStats = this.props.stats.filter(stat => {return stat.method === 'mobile'})
    const desktopStats = this.props.stats.filter(stat => {return stat.method === 'desktop'})
    const methodStats = [];
    for (let i = 0; i < desktopStats.length; i++) {
      const tempArray = [];
      for (let j = 0; j < mobileStats.length; j++) {
        if (desktopStats[i].website_id === mobileStats[j].website_id) {
          tempArray.push({ desktop: desktopStats[i], mobile: mobileStats[j] });
        }
      }
      methodStats.push(tempArray);
    }
    const reports = methodStats.map((stat) => {
      const { desktop, mobile } = stat[0];
      return (
        <div className="stat-bar-margin">
          <Breakpoint large up>
    <div className="stat-bar">
      <div className="site-info">
        <p className="site-url">{desktop.website.url}</p>
        <p className="last-report">{desktop.time_fetch}</p>
      </div>
      <div className="stat-display">
        <div className="column-style">
          <div className="desktop-info">
            <p className={colorCode(desktop.performance)}>
              {desktop.performance * 100}
              %
            </p>
            <p className="stat-style">Desktop</p>
          </div>
          <div className="mobile-info">
            <p className={colorCode(mobile.performance)}>
              {mobile.performance * 100}
              %
            </p>
            <p className="stat-style">Mobile</p>
          </div>
        </div>
        <div className="column-style">
          <div className="desktop-info">
            <p className={colorCode(desktop.seo)}>
              {desktop.seo * 100}
              %
            </p>
            <p className="stat-style">Desktop</p>
          </div>
          <div className="mobile-info">
            <p className={colorCode(mobile.seo)}>
              {mobile.seo * 100}
              %
            </p>
            <p className="stat-style">Mobile</p>
          </div>
        </div>
        <div className="column-style">
          <div className="desktop-info">
            <p className={colorCode(desktop.accessibility)}>
              {desktop.accessibility * 100}
              %
            </p>
            <p className="stat-style">Desktop</p>
          </div>
          <div className="mobile-info">
            <p className={colorCode(mobile.accessibility)}>
              {mobile.accessibility * 100}
              %
            </p>
            <p className="stat-style">Mobile</p>
          </div>
        </div>
        <div className="last-column-style">
          <div className="desktop-info">
            <p className={colorCode(desktop.best_practices)}>
              {desktop.best_practices * 100}
              %
            </p>
            <p className="stat-style">Desktop</p>
          </div>
          <div className="mobile-info">
            <p className={colorCode(mobile.best_practices)}>
              {mobile.best_practices * 100}
              %
            </p>
            <p className="stat-style">Mobile</p>
          </div>
        </div>
      </div>
    </div>
          </Breakpoint>
        </div>
      );
    });
    return(
      <div>
      {reports}
      </div>
    );
  }
}

export default Data
