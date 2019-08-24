import React, { Component } from "react";
import LikeButton from "./LikeButton";
import GoButton from "./GoButton";

//props: id, type, title, description, imgUrl, buttons, isLiked, raiseLike

class Card extends Component {
    constructor(props) {
        super(props);
    }

    raiseLike = id => {
        this.props.raiseLike(id);
    };

    renderImage = () => {
        return (
            this.props.imgUrl && (
                <img
                    class="card-img-top"
                    src={this.props.imgUrl}
                    alt="Card cap"
                />
            )
        );
    };

    renderButtons = () => {
        return (
            this.props.buttons && (
                <div className="row justify-content-center">
                    <GoButton type={this.props.type} id={this.props.id} />
                    <LikeButton
                        raiseLike={id => this.raiseLike(id)}
                        isLiked={this.props.isLiked}
                        id={this.props.id}
                    />
                </div>
            )
        );
    };

    render() {
        return (
                <div className="card text-start m-1 mb-2" style={{"box-shadow":" 0 4px 4px 0 rgba(153, 153, 153, 0.01), 0 3px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    {this.renderImage()}
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        {this.renderButtons()}
                    </div>
                </div>
        );
    }
}

//
export default Card;
