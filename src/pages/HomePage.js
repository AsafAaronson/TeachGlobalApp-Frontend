import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    emptyCard = (page, content, amount, link) => (
        <div className="card shadow-sm text-start m-1 mb-2 col-sm-5 col-lg-3">
            <div className="card-body">
                <h2>
                    Check out the{" "}
                    <span class="badge badge-secondary">
                        {amount}
                    </span>{" "}
                    {/* <span class="badge badge-secondary">
                        {page}
                    </span> */}
                    {page}{' '}{content}
                </h2>
                <Link to={link}>
                    <button className="btn btn-info mr-3">{page}</button>
                </Link>
            </div>
        </div>
    );

    render() {
        return (
            <div>
                <div className="container-fluid text-center">
                    <img
                        src="https://i.ibb.co/cgKRGnZ/logo-white-background.jpg"
                        alt="logo-white-background"
                        className="img-fluid"
                    />
                    <h1>Hey {this.props.userInfo.firstName},<br/>Welcome to the Teach Global App</h1>
                    <div className="row justify-content-center">
                        {this.emptyCard("Activities", "Available", this.props.quantities.activities, '/activities')}
                        {this.emptyCard("Workpages", "Available", this.props.quantities.workpages, 'workpages')}
                        {this.emptyCard("Likes", "you made", this.props.quantities.likes, '/liked')}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
