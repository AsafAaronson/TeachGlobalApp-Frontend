import React, { Component } from "react";

//props: raiseLike, id, isLiked

class LikeButton extends Component {
    onLike(id) {
        this.props.raiseLike(id)
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => this.onLike(this.props.id)}
                    className={`btn btn-${this.props.isLiked ? "danger" : "light"}`}
                >
                    <i class="fa fa-heart" />
                </button>
            </div>
        );
    }
}

export default LikeButton;
