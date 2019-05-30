import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Menu from './Menu';
import App from '../App';
import './Menu.css';


class BaseLayout extends Component {


    render() {

        return(
            <div>
                <Menu history={this.props.history} />
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(BaseLayout);
