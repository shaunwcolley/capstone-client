import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './ResponsiveStatBar.css';

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




      <div className="stat-bar-margin">
        <Breakpoint small down>
          <div className="MobileStatbar">
          <p className="site-url">https://www.Reallylongurladdress.io</p>
          <p className="last-report">Last Report: 3/24/19</p>
          <div className="all-four-stats">
              <div className="top-stat-row">
                <div className="top-left-stat-quandant">
                  <p className="stat-name">PERFORMANCE</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
                <div className="stat-quandant">
                  <p className="stat-name">SEO</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-row">
                <div className="bottom-left-stat-quandant">
                  <p className="stat-name">ACCESSIBILITY</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
                <div className="bottom-right-stat-quandant">
                  <p className="stat-name">BEST PRACTICES</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </Breakpoint>

        <Breakpoint medium only>
          <div className="tablet-flex">
            <div className="MobileStatbar">
            <p className="site-url">https://www.Reallylongurladdress.io</p>
            <p className="last-report">Last Report: 3/24/19</p>
            <div className="all-four-stats">
              <div className="top-stat-row">
                <div className="top-left-stat-quandant">
                  <p className="stat-name">PERFORMANCE</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
                <div className="stat-quandant">
                  <p className="stat-name">SEO</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stat-row">
                <div className="bottom-left-stat-quandant">
                  <p className="stat-name">ACCESSIBILITY</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
                <div className="bottom-right-stat-quandant">
                  <p className="stat-name">BEST PRACTICES</p>
                  <div className="desktop-mobile">
                    <div className="stats">
                      <p className="stat-style">97%</p>
                      <p className="stat-style">Desktop</p>
                    </div>
                    <div className="stats">
                      <p className="stat-style">56%</p>
                      <p className="stat-style">Mobile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Breakpoint>

        <Breakpoint large up>
          <div className="stat-bar">
            <div className="site-info">
              <p className="site-url">https://www.Reallylongurladdress.io</p>
              <p className="last-report">Last Report: 3/24/19</p>
            </div>
            <div className="stat-display">
              <div className="column-style">
                <div className="desktop-info">
                  <p className="stat-style">97%</p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">96%</p>
                  <p className="stat-style">Mobile</p>
                </div>
              </div>
              <div className="column-style">
                <div className="desktop-info">
                  <p className="stat-style">86%</p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">85%</p>
                  <p className="stat-style">Mobile</p>
                </div>
              </div>
              <div className="column-style">
                <div className="desktop-info">
                  <p className="stat-style">97%</p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">36%</p>
                  <p className="stat-style">Mobile</p>
                </div>
              </div>
              <div className="last-column-style">
                <div className="desktop-info">
                  <p className="stat-style">97%</p>
                  <p className="stat-style">Desktop</p>
                </div>
                <div className="mobile-info">
                  <p className="stat-style">75%</p>
                  <p className="stat-style">Mobile</p>
                </div>
              </div>
            </div>
          </div>
      
        </Breakpoint>
      </div>
    );
  }
}

export default ResponsiveStatBar;
