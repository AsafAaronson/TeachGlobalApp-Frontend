import React from "react";
import Card from "./Card";
import LikeButton from "./LikeButton";
import GoButton from "./GoButton";
import { LikeHandlerContext } from "../../contexts/LikeHandler";

//props:  id, type, title, description, isLiked, imgUrl(Optional)

const ListCard = props => {
    let image = props.imgUrl && (
        <img class="card-img-top" src={props.imgUrl} alt="Card cap" />
    );

    return (
        <LikeHandlerContext.Consumer>
            {({ assignLike }) => {
                let isLiked = assignLike(props.id);
                return (
                    <div className="col-10 col-sm-5 col-md-3 col-xl-2">
                        <Card>
                            {image}
                            <div className="card-body">
                                <h5 className="card-title">{props.title}</h5>
                                <p className="card-text">{props.description}</p>
                                <div className="row justify-content-center">
                                    <GoButton type={props.type} id={props.id} />
                                    <LikeButton
                                        isLiked={isLiked}
                                        id={props.id}
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            }}
        </LikeHandlerContext.Consumer>
    );
};
export default ListCard;
