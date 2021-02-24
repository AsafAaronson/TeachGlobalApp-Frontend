import React from "react";

//props: children(between tags)

const Card = props => {
    return (
        <div
            className="card text-start m-1 mb-2"
            style={{
                "box-shadow":
                    " 0 4px 4px 0 rgba(153, 153, 153, 0.01), 0 3px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
        >
            {props.children}
        </div>
    );
};
export default Card;
