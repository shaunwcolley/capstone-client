import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Breakpoint, { setDefaultBreakpoints } from 'react-socks';

import './Menu.css';


class Menu extends Component {
    render() {
        return(
            <div id="myHeader" className='menu'>
              <ul className='menu-items'>
                <li  className='wayfinder'><NavLink to='/dashboard'>Wayfinder</NavLink></li>
                <li className='logout'><NavLink to='/login'>Logout</NavLink></li>
              </ul>
            </div>
        )
    }
}


export default Menu;
