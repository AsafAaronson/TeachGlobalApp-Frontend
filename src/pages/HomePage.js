import React, { Component } from "react";
import Card from "../components/Card";

class HomePage extends Component {
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
                        <div className="card shadow-sm text-start m-1 mb-2">
                            <div className="card-body">
                                <h2>
                                    Check out the{" "}
                                    <span class="badge badge-primary">
                                        {this.props.quantities.activities}
                                    </span>{" "}
                                    Activities available
                                </h2>
                            </div>
                        </div>
                        <div className="card shadow-sm text-start m-1 mb-2">
                            <div className="card-body">
                                <h2>
                                    Check out the{" "}
                                    <span class="badge badge-primary">
                                        {this.props.quantities.workpages}
                                    </span>{" "}
                                    Workpages available
                                </h2>
                            </div>
                        </div>
                        <div className="card shadow-sm text-start m-1 mb-2">
                            <div className="card-body">
                                <h2>
                                    Check out your{" "}
                                    <span class="badge badge-primary">
                                        {this.props.quantities.likes}
                                    </span>{" "}
                                    favorites
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
