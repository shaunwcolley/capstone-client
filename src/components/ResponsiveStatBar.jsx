import React, { Component } from 'react';
import Breakpoint, { setDefaultBreakpoints } from 'react-socks';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './ResponsiveStatBar.css';

setDefaultBreakpoints([
  { xsmall: 0 }, // all mobile devices
  { small: 576 }, // mobile devices (not sure which one's this big)
  { medium: 768 }, // ipad, ipad pro, ipad mini, etc
  { large: 1100 }, // smaller laptops
  { xlarge: 1200 }, // laptops and desktops
]);

const GET_STATS = gql`
    query {
        stats {
            website_id
            website {
                url
            }
            performance
            accessibility
            best_practices
            seo
            time_fetch
            method
        }
    }
`;

class ResponsiveStatBar extends Component {
  render() {
    return (

      <Query query={GET_STATS}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          const { stats } = data;
          const mobileStats = stats.filter(stat => {return stat.method === 'mobile'})
          const desktopStats = stats.filter(stat => {return stat.method === 'desktop'})
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
                  <p className="stat-style">
                    {desktop.performance * 100}
                    %
                  </p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">
                    {mobile.performance * 100}
                    %
                  </p>
                  <p className="stat-style">Mobile</p>
                </div>
              </div>
              <div className="column-style">
                <div className="desktop-info">
                  <p className="stat-style">
                    {desktop.seo * 100}
                    %
                  </p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">
                    {mobile.seo * 100}
                    %
                  </p>
                  <p className="stat-style">Mobile</p>
                </div>
              </div>
              <div className="column-style">
                <div className="desktop-info">
                  <p className="stat-style">
                    {desktop.accessibility * 100}
                    %
                  </p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">
                    {mobile.accessibility * 100}
                    %
                  </p>
                  <p className="stat-style">Mobile</p>
                </div>
              </div>
              <div className="last-column-style">
                <div className="desktop-info">
                  <p className="stat-style">
                    {desktop.best_practices * 100}
                    %
                  </p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">
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
          return (
            <div>
              {reports}
            </div>
          );
        }
}
      </Query>
    );
  }
}

export default ResponsiveStatBar;
