import React, { Component } from "react";
import NavLink from "./NavLink";
import UserInfoSmall from "./UserInfoSmall";

//props: user

class Navbar extends Component {
    render() {
        const user = this.props.user;
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand" href="/">
                        TeachGlobal
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav">
                            <NavLink location="" text="Home" />
                            <NavLink location="activities" text="Activities" />
                            <NavLink location="workpages" text="Workpages" />
                            {/* <NavLink location="liked" text="Liked" /> */}
                        </ul>
                    </div>
                    <UserInfoSmall
                        fullName={`${user.firstName} ${user.lastName}`}
                        profilePicUrl={user.profilePicUrl}
                    />
                </nav>
            </div>
        );
    }
}

export default Navbar;
