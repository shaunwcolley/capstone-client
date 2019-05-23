import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatBar from './StatBar';

import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard'>
                <div className='filter-add-website-row'>
                    <div className='filter-button'>
                        <div className='filter-website-button'>
                        <p>Filter:</p>
                        <button className='add-button'><Link to='addwebsite'>+ Add Website</Link></button>
                        </div>
                    <div className='column-placement'>
                    <div className='column-titles'>
                        <p className='performance'>PERFORMANCE</p>
                        <p className='seo'>SEO</p>
                        <p className='accessibilty'>ACCESSIBILITY</p>
                        <p className='best-practices'>BEST PRACTICES</p>
                    </div>
                    </div>
                <StatBar />
                </div>
            </div>
        </div>
        )
    }
}

export default Dashboard;
