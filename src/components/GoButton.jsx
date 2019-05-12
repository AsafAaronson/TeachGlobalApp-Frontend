import React, { Component } from "react";
import { Link } from "react-router-dom";

class GoButton extends Component {
    render() {
        return (
            <div>
                <Link to={`/${this.props.type.toLowerCase()}/${this.props.id}`} /*target="_blank"*/>
                    <button className="btn btn-info mr-3">Let's Go!</button>
                </Link>
            </div>
        );
    }
}

export default GoButton;
