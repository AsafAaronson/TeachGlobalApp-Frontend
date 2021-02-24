import React, { Component, createFactory } from "react";

//Props: Size, title, badge

const Header = props => {
    return (
        <div
            className=""
            style={{
                "box-shadow":
                    " 0 4px 4px 0 rgba(153, 153, 153, 0.01), 0 3px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
        >
            {props.children}
        </div>
    );
};
export default Header;
