import React from "react";
import { LikeHandlerContext } from "../../contexts/LikeHandler";

//props: id, isLiked

const LikeButton = props => {
    return (
        <LikeHandlerContext.Consumer>
            {({ handleLike }) => (
                <button
                    onClick={() => handleLike(props.id)}
                    className={`btn btn-${props.isLiked ? "danger" : "light"}`}
                >
                    <i class="fa fa-heart" />
                </button>
            )}
        </LikeHandlerContext.Consumer>
    );
};

export default LikeButton;
