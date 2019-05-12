import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavLink extends Component {
    render() { 
        return ( 
            <div>
                <li className="nav-item">
                    <Link className="nav-link" to={`/${this.props.location}`}>{this.props.text}</Link>
                </li>
            </div>
         );
    }
}
 
export default NavLink;