import React, { Component } from 'react';
import NavLink from './NavLink';

class Navbar extends Component {
    render() { 
        return(
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <NavLink location="activities" text="Activities" />
                        <NavLink location="workpages" text="Workpages" />
                        <NavLink location="liked" text="Liked" />
                    </ul>
                </div>  
            </nav>
        </div>);
    }
}
 
export default Navbar;