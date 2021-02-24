import React, { Component } from "react";
import {TagsContext} from "../../contexts/TagsContext"

//props: text

const Tag = props => {
    return (
        <TagsContext.Consumer>
            {({raiseX})=> (
                <span className="badge badge-pill badge-warning mr-1">
                    {props.text}
                    <button
                        className="btn btn-warning ml-1"
                        onClick={() => raiseX(props.text)}
                    >
                        <i class="fa fa-trash" />
                    </button>
                </span>
            )}
        </TagsContext.Consumer>
    );
};

export default Tag;
