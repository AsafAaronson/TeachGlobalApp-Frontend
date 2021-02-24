import React from "react";
import { Link } from "react-router-dom";

//props: id, type (workpages/activities)

const GoButton = props => {
    return (
        <div>
            <Link to={`/${props.type.toLowerCase()}/${props.id}`}>
                <button className="btn btn-info mr-3">Let's Go!</button>
            </Link>
        </div>
    );
};

export default GoButton;
