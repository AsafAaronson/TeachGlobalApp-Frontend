import React, { Component } from "react";
import Card from "./Card";

//props: type("Workpage"/-), data{cardContent, userLiked}

class CardContainer extends Component {
    
    raiseLike = (id) => {
        this.props.raiseLike(id)
    }

    // assignLikes = () => {
    //     return this.props.data.cardsContent.map(element => {
    //         if (this.props.data.userLiked.includes(element.id)) {
    //             element.isLiked = true;
    //         } else {
    //             element.isLiked = false;
    //         }
    //         return element;
    //     });
    // };



    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center justify-content-md-start">
                    {this.props.data.cardsContent.map(el => (
                        <div className="col-10 col-sm-5 col-md-3 col-xl-2">
                            <Card
                                type={(this.props.type === "Workpage")? "Workpage":"Activity"}
                                key={el.id}
                                id={el.id}
                                title={el.title}
                                description={el.description}
                                imgUrl={el.imgUrl}
                                buttons={true}
                                isLiked={el.isLiked}
                                raiseLike= {(id) => this.raiseLike(id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default CardContainer;
