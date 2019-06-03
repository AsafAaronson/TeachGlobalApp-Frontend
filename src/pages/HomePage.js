import React, { Component } from "react";

class HomePage extends Component {
    emptyCard = (content, amount) => (
        <div className="card shadow-sm text-start m-1 mb-2">
            <div className="card-body">
                <h2>
                    Check out the{" "}
                    <span class="badge badge-primary">
                        {amount}
                    </span>{" "}
                    {content}
                </h2>
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
                    <h1>Welcome to the Teach Global App</h1>
                    <div className="row justify-content-center">
                        {this.emptyCard("Activities Available", this.props.quantities.activities)}
                        {this.emptyCard("Workpages Available", this.props.quantities.workpages)}
                        {this.emptyCard("Likes you made", this.props.quantities.likes)}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
